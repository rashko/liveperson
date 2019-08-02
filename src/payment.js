import { types, typecheck, getSnapshot } from "mobx-state-tree";
import getCreditCardType from "./helpers/cardTypeHelper";

const validators = {
  billingAddress: types.refinement(types.string, value => value.length > 5),
  country: types.refinement(types.string, value => value.length > 0),
  lastName: types.refinement(types.string, value => value.length > 5),
  ccNumber: types.refinement(types.string, value => value.length > 5)
};

export const validate = (validatorName, value) => {
  try {
    typecheck(validators[validatorName], value);
    return true;
  } catch (e) {
    return false;
  }
};
const required = value => value && value !== '';
const isNumber = value => !isNaN(value);
const isValidCC = value => {
    const isValid = getCreditCardType(value);
    return isValid !== 'unknown';
}
const validator = {
  billingAddress: {
    rules: [required],
    messeges: [`Billing address is required`]
  },
  country: {
    rules: [required],
    messeges: [`Country is required`]
  },
  ccNumber: {
    rules: [required, isNumber, isValidCC],
    messeges: [`Credit card number is required`, `Credit card number must be a number`, `Credit card number is not valid`]
  }
};

export const validate2 = (validatorName, value) => {
    const field = validator[validatorName];
    const errors = [];
    field.rules.forEach((rule, index) => {
        if(!rule(value)){
            errors.push(field.messeges[index])
        }
    })

    return errors;
}

const Errors = types
  .model("Errors", {
    billingAddress: types.string,
    country: types.string,
    lastName: types.string,
    ccNumber: types.string
  })
  .actions(self => ({
    updateFormError(key, value) {
      self[key] = value;
    }
  }));

const Payment = types
  .model("Payment", {
    billingAddress: types.string,
    country: types.string,
    ccNumber: types.maybeNull(types.string),
    errors: Errors,
    dirty: types.boolean
  })
  .actions(self => ({
    updateFormInput(key, value) {
      self[key] = value;
      self.dirty = true;
    },
    submitForm() {
      console.log(getSnapshot(self));
    }
  }))
  .views(self => ({
    get isValid() {
      return self.dirty && Object.values(self.errors).every(v => v === "");
    }
  }));

export default Payment;
