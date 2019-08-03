import { types } from "mobx-state-tree";
import Payment from "./payment.model";

const Store = types.model("Store", {
  payment: Payment
});

const store = Store.create({
  payment: {
    billingAddress: "sdkjfskjf",
    country: "IL",
    ccNumber: "5326",
    ccMonth: "12",
    ccYear: "2020",
    ccCvv: "444",
    errors: {
      billingAddress: "",
      lastName: "",
      country: "",
      ccNumber: "",
      ccMonth: "",
      ccYear: "",
      ccCvv: ""
    },
    dirty: true,
    success: false,
    sending: false,
    progress: 0,
    payentError: ''
  }
});

export default store;