import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { validate, validateExpiry } from "../helpers/validator";
import CountrySelect from "./countrySelect";
import Row from "./row";
import Button from "./button";
import Input from "./input";
import Label from "./label";
import Error from "./error";
import InputWrapper from "./inputWrapper";
import CreditCardLogo from "./CreditCardLogo";
import getCreditCardType from "../helpers/cardTypeHelper";
import Select from "./select";
import SuccessMessege from "./successMessege";
import ProgressBar from "./progressBar";
import Title from "./title";
import { months, years } from "../helpers";
import { withRouter } from "react-router-dom";

const Form = styled.form`
  padding: 10px;
  background: #ccc;
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
`;

const FormComponent = observer(props => {
  const { payment } = props.store;
  const { history } = props;

  const handelFormInput = e => {
    const { name, value } = e.target;
    payment.updateFormInput(name, value);

    const errors = validate(name, value);
    if (name === "ccMonth" || name === "ccYear") {
      const expiryError = validateExpiry(payment.ccMonth, payment.ccYear);
      if (expiryError !== "") {
        errors.push(expiryError);
      }
    }
    payment.errors.updateFormError(name, errors.join(", "));
  };

  const handleSubmit = e => {
    e.preventDefault();
    payment.updateSending(true);
    const form = {
      billingAddress: payment.billingAddress,
      country: payment.country,
      ccNumber: payment.ccNumber,
      ccMonth: payment.ccMonth,
      ccYear: payment.ccYear,
      ccCvv: payment.ccCvv
    };
    for (let input in form) {
      const errors = validate(input, form[input]);
      if (errors.length > 0) {
        payment.errors.updateFormError(input, errors.join(", "));
      }
    }
    if (payment.isValid) {
      payment.increaseProgress();
      payment
        .submitForm()
        .then(() => history.push("/success"))
        .catch(() => history.push("/fail"));
    }
  };
  const creditCardType = getCreditCardType(payment.ccNumber);

  return (
    <>
      <Title title={"Secure payment page"} />
      <Form>
        <Row>
          <Label>billing address</Label>
          <InputWrapper>
            <Input
              name={"billingAddress"}
              placeholder={"Street address"}
              value={payment.billingAddress}
              onChange={handelFormInput}
            />
            <Error>{payment.errors.billingAddress}</Error>
          </InputWrapper>
          <InputWrapper>
            <CountrySelect
              onHandleChange={handelFormInput}
              value={payment.country}
            />
            <Error>{payment.errors.country}</Error>
          </InputWrapper>
        </Row>
        <Row>
          <Label>Credit card details</Label>
          <InputWrapper>
            <Input
              name={"ccNumber"}
              placeholder={"Credit card number"}
              value={payment.ccNumber}
              onChange={handelFormInput}
            />
            <Error>{payment.errors.ccNumber}</Error>
          </InputWrapper>
          {creditCardType !== "unknown" && (
            <CreditCardLogo type={creditCardType} />
          )}
        </Row>
        <Row>
          <Label />
          <InputWrapper>
            <Select
              name="ccMonth"
              placeholder={"Select expiry month"}
              value={payment.ccMonth}
              onChange={handelFormInput}
            >
              {months().map(month => (
                <option key={month.value} value={month.value}>
                  {month.value} - {month.name}
                </option>
              ))}
            </Select>
            <Error>{payment.errors.ccMonth}</Error>
          </InputWrapper>
          <InputWrapper>
            <Select
              name="ccYear"
              placeholder={"Select expiry year"}
              value={payment.ccYear}
              onChange={handelFormInput}
            >
              {years().map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </Select>
            <Error>{payment.errors.ccYear}</Error>
          </InputWrapper>
          <InputWrapper>
            <Input
              name={"ccCvv"}
              placeholder={"CVV"}
              value={payment.ccCvv}
              onChange={handelFormInput}
            />
            <Error>{payment.errors.ccCvv}</Error>
          </InputWrapper>
        </Row>
        <Row action={"action"}>
          <Button onClick={handleSubmit} disabled={payment.sending}>
            Submit Payment
          </Button>
          {payment.success && <SuccessMessege />}
          {payment.sending && (
            <ProgressBar
              label={"processing payment"}
              max={100}
              value={payment.progress}
            />
          )}
        </Row>
      </Form>
    </>
  );
});

export default withRouter(FormComponent);
