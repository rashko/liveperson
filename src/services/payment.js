import axios from 'axios';

export const makePayment = (payload) => {
    return axios.post('https://liveperson-payment.free.beeceptor.com', payload)
    .then(response => response.data)
    .catch(error => console.error(error))
}