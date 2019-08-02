import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { validate } from "../payment";
import CountrySelect from "./countrySelect";
import Row from "./row";
import Button from "./button";
import Input from "./input";
import Label from "./label";
import Error from "./error";
import InputWrapper from "./inputWrapper";

const Form = styled.form`
  padding: 10px;
`;

const FormComponent = observer(props => {
  const { store } = props;

  const handelFormInput = e => {
    const { name, value } = e.target;
    const error = validate(name, value) ? "" : `${name} is invalid`;
    store.payment.updateFormInput(name, value);
    store.payment.errors.updateFormError(name, error);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (store.payment.isValid) {
      store.payment.submitForm();
    }
  };
  return (
    <Form>
      <Row>
        <Label>billing address</Label>
        <InputWrapper>
          <Input
            name={"billingAddress"}
            placeholder={"Street address"}
            value={store.payment.billingAddress}
            onChange={handelFormInput}
          />
          <Error>{store.payment.errors.billingAddress}</Error>
        </InputWrapper>
        <InputWrapper>
          <CountrySelect
            onHandleChange={handelFormInput}
            value={store.payment.country}
          />
          <Error>{store.payment.errors.country}</Error>
        </InputWrapper>
      </Row>
      <Row>
        <Label>Credit card details</Label>
        <InputWrapper><Input
          name={"lastName"}
          value={store.payment.lastName}
          onChange={handelFormInput}
        />
        <Error>{store.payment.errors.lastName}</Error>
        </InputWrapper>
      </Row>
      <Button onClick={handleSubmit}>Send</Button>
    </Form>
  );
});

export default FormComponent;
