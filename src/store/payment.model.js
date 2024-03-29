import { types } from "mobx-state-tree";
import { makePayment } from "../services/payment";
const Errors = types
  .model("Errors", {
    billingAddress: types.array(types.string),
    country: types.array(types.string),
    lastName: types.array(types.string),
    ccNumber: types.array(types.string),
    ccMonth: types.array(types.string),
    ccYear: types.array(types.string),
    ccCvv: types.array(types.string)
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
    payentError: types.string,
  })
  .actions(self => ({
    updateFormInput(key, value) {
      self[key] = value;
      self.dirty = true;
    },
    submitForm() {
      self.sending = true;
      self.progress = 0;
      self.success = false;
      return makePayment(self)
        .then(() => self.updateSuccess(true))
        .catch(e => {
          self.updateSuccess(false);
          self.updatePaymentError(e.messege);
          return Promise.reject();
        });
    },
    updatePaymentError(messege){
        self.payentError = messege
    },
    updateSending(flag){
        self.sending = flag;
        self.dirty = true;
    },
    updateSuccess(flag) {
      self.success = flag;
      self.sending = false;
    },
    increaseProgress() {
      let interval;
      const limit = 3;
      let counter = 0;
      interval = setInterval(() => {
        self.updateProgress(self.progress + 100 / limit);
        counter++;
        if (counter === limit) {
          clearInterval(interval);
        }
      }, 1000);
    },
    updateProgress(value) {
      self.progress = value;
    }
  }))
  .views(self => ({
    get isValid() {
      return (
        self.dirty && Object.values(self.errors).every(value => value.length === 0)
      );
    }
  }));

export default Payment;
