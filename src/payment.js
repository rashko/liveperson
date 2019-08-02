import { types, getSnapshot } from "mobx-state-tree";

const Errors = types
  .model("Errors", {
    billingAddress: types.string,
    country: types.string,
    lastName: types.string,
    ccNumber: types.string,
    ccMonth: types.string,
    ccYear: types.string,
    ccCvv: types.string
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
    ccMonth: types.string,
    ccYear: types.string,
    ccCvv: types.string,
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
      return (
        self.dirty && Object.values(self.errors).every(value => value === "")
      );
    }
  }));

export default Payment;
