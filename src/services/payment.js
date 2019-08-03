import axios from "axios";
// const PROCESS_PAYMENT_URL = "http://www.mocky.io/v2/5d45ea563000002f66c5c975?mocky-delay=3s";
const PROCESS_PAYMENT_URL = "https://liveperson-payment.free.beeceptor.com";
export const makePayment = payload => {
  return axios
    .post(PROCESS_PAYMENT_URL, payload)
    .then(response => response.data)
    .catch(e => Promise.reject(e.response.data));
};
