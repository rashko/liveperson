import {types, typecheck, getSnapshot} from "mobx-state-tree";

const validators = {
    firstName: types.refinement(types.string, value => value.length > 5),
    lastName: types.refinement(types.string, value => value.length > 5)
}

export const validate = (validatorName, value) => {
    try {
        typecheck(validators[validatorName], value)
        return true;
    } catch (e) {
        return false;
    }
};


const Errors = types
    .model("Errors", {
        firstName: types.string,
        lastName: types.string,
    })
    .actions(self => ({
        updateFormError(key, value) {
            self[key] = value
        }
    }));

const Payment = types
    .model("Payment", {
        firstName: types.string,
        lastName: types.string,
        errors: Errors,
    })
    .actions(self => ({
        updateFormInput(key, value) {
            self[key] = value
        },
        submitForm() {
            console.log(getSnapshot(self))
        },
    }))
    .views(self => ({
        get isValid() {
            return Object.values(self.errors).every(v => v === '');

        }
    }));

export default Payment;