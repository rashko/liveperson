import getCreditCardType from "./cardTypeHelper";
import * as validator from './validator';

export const required = value => (typeof(value) === "number" || typeof(value) === "string") && value !== "";
export const isNumber = value => (typeof(value) === "number" || typeof(value) === "string") && !isNaN(value);
export const isValidCC = value => getCreditCardType(value) !== "unknown";
export const exactLength = (length, value) => typeof(value) === "string" && typeof(length) === "number" && value.length === length;

export const validatorRules = {
  billingAddress: {
    rules: [required],
    messeges: [`Billing address is required`]
  },
  country: {
    rules: [required],
    messeges: [`Country is required`]
  },
  ccNumber: {
    rules: [required, isNumber, isValidCC, exactLength.bind(this, 16)],
    messeges: [
      `Credit card number is required`,
      `Credit card number must be a number`,
      `Credit card number is not valid`,
      `Credit card number must be 16 characters length`
    ]
  },
  ccMonth: {
    rules: [required],
    messeges: [`Expiry month is required`]
  },
  ccYear: {
    rules: [required],
    messeges: [`Expiry year is required`]
  },
  ccCvv: {
    rules: [required, isNumber, exactLength.bind(this, 3)],
    messeges: [
      `CVV is required`,
      `CVV must be a number`,
      `CVV must be 3 characters length`
    ]
  }
};

export const validate = (validatorName, value, rules = validatorRules) => {
  const field = rules[validatorName];
  const errors = [];
  if (!field) {
    return errors;
  }
  field.rules.forEach((rule, index) => {
    if (!rule(value)) {
      errors.push(field.messeges[index]);
    }
  });

  return errors;
};

export const validateExpiry = (month, year, now = new Date()) => {
  if((now) instanceof Date === false){
    return "Expiry date is invalid"
  }
  return parseInt(year) === now.getFullYear() && parseInt(month) < now.getMonth() + 1
    ? "Expiry date is invalid"
    : "";
};
