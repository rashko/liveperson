import getCreditCardType from "./cardTypeHelper";

const required = value => value && value !== "";
const isNumber = value => !isNaN(value);
const isValidCC = value => getCreditCardType(value) !== "unknown";
const minLength = (length, value) => value.length >= length;
const maxLength = (length, value) => value.length < length;

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
    rules: [required, isNumber, isValidCC],
    messeges: [
      `Credit card number is required`,
      `Credit card number must be a number`,
      `Credit card number is not valid`
    ]
  },
  ccCvv: {
    rules: [required, isNumber, minLength.bind(this, 3)],
    messeges: [`CVV is required`,`CVV must be a number`, `CVV minimum length 3 character`]
  }
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
