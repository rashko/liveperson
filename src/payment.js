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
        dirty: types.boolean
    })
    .actions(self => ({
        updateFormInput(key, value) {
            self[key] = value
            self.dirty = true
        },
        submitForm() {
            console.log(getSnapshot(self))
        },
    }))
    .views(self => ({
        get isValid() {
            return self.dirty && Object.values(self.errors).every(v => v === '');

        }
    }));

export default Payment;