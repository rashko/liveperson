import { types, getSnapshot } from "mobx-state-tree";
import { makePayment } from "./services/payment";
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
    ccNumber: types.string,
    ccMonth: types.string,
    ccYear: types.string,
    ccCvv: types.string,
    errors: Errors,
    dirty: types.boolean,
    success: types.boolean,
    sending: types.boolean,
    progress: types.number,
  })
  .actions(self => ({
    updateFormInput(key, value) {
      self[key] = value;
      self.dirty = true;
    },
    submitForm() {
      self.sending = true;
      makePayment(self)
        .then(() => self.updateSuccess(true))
        .catch(() => self.updateSuccess(true));
    },
    updateSuccess(flag) {
      self.success = flag;
      self.sending = false;
    },
    increaseProgress(){
        let interval;
        const limit = 3;
        let counter = 0;
        interval = setInterval(() => {
            self.updateProgress(self.progress + 100/limit)
            counter++;
            console.log(self.progress)
            console.log(counter)
            if(counter === limit){
                clearInterval(interval)
            }
        }, 1000)
    },
    updateProgress(value){
        self.progress = value;
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
