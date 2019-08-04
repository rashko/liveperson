import getCreditCardType from "./cardTypeHelper";

const required = value => value && value !== "";
const isNumber = value => !isNaN(value);
const isValidCC = value => getCreditCardType(value) !== "unknown";
const exactLenght = (length, value) => value.length === length;

const validator = {
  billingAddress: {
    rules: [required],
    messeges: [`Billing address is required`]
  },
  country: {
    rules: [required],
    messeges: [`Country is required`]
  },
  ccNumber: {
    rules: [required, isNumber, isValidCC, exactLenght.bind(this, 16)],
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
    rules: [required, isNumber, exactLenght.bind(this, 3)],
    messeges: [
      `CVV is required`,
      `CVV must be a number`,
      `CVV must be 3 characters length`
    ]
  }
};

export const validateForm = form => {
  const errors = {};
  for (let field in form) {
    const fieldErrors = validate(field, form[field]);
    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
    }
  }
  return errors;
};

export const validate = (validatorName, value) => {
  const field = validator[validatorName];
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

export const validateExpiry = (month, year) => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const currentMonth = d.getMonth();
  return parseInt(year) === currentYear && parseInt(month) < currentMonth + 1
    ? "Expiry date is invalid"
    : "";
};
