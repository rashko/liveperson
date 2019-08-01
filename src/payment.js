import {types} from "mobx-state-tree";

const Payment = types
    .model("Payment", {
        firstName: types.string,
        lastName: types.string,
    })
    .actions(self => ({
        updateFormInput(key, value) {
            self[key] = value
        },
        submitForm(e){
            e.preventDefault();
            console.log(self)
        }
    }));

export default Payment;