import { types } from "mobx-state-tree";
import Payment from "./payment.model";

const Store = types.model("Store", {
  payment: Payment
});

const store = Store.create({
  payment: {
    billingAddress: "",
    country: "",
    ccNumber: "",
    ccMonth: "",
    ccYear: "",
    ccCvv: "",
    errors: {
      billingAddress: "",
      lastName: "",
      country: "",
      ccNumber: "",
      ccMonth: "",
      ccYear: "",
      ccCvv: ""
    },
    dirty: false,
    success: false,
    sending: false,
    progress: 0,
    payentError: ""
  }
});

export default store;
