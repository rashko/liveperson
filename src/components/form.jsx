import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { validate } from "../helpers/validator";
import CountrySelect from "./countrySelect";
import Row from "./row";
import Button from "./button";
import Input from "./input";
import Label from "./label";
import Error from "./error";
import InputWrapper from "./inputWrapper";
import CreditCardLogo from './CreditCardLogo';
import getCreditCardType from '../helpers/cardTypeHelper';
import Select from './select';

const Form = styled.form`
  padding: 10px;
`;

const FormComponent = observer(props => {
  const { store } = props;

  const handelFormInput = e => {
    const { name, value } = e.target;
    // const error = validate(name, value) ? "" : `${name} is invalid`;
    const errors = validate(name, value);
    store.payment.updateFormInput(name, value);
    store.payment.errors.updateFormError(name, errors.join(', '));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (store.payment.isValid) {
      try {
        store.payment.submitForm();
      } catch(e){
        console.error(e);
      }
    }
  };
  const creditCardType = getCreditCardType(store.payment.ccNumber);
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
        <InputWrapper>
          <Input
            name={"ccNumber"}
            value={store.payment.ccNumber}
            onChange={handelFormInput}
          />
          <Error>{store.payment.errors.ccNumber}</Error>
        </InputWrapper>
        {creditCardType !== 'unknown' && <CreditCardLogo type={creditCardType} />}
      </Row>
      <Row>
        <Label />
        <InputWrapper>
          <Select name="ccMonth" placeholder={'Select expiry month'} value={store.payment.ccMonth}
            onChange={handelFormInput}>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(value => <option value={value}>{value}</option>)}
          </Select>
          <Error>{store.payment.errors.ccMonth}</Error>
        </InputWrapper>
        <InputWrapper>
          <Select name="ccYear" placeholder={'Select expiry year'} value={store.payment.ccYear}>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(value => <option value={value}>{value}</option>)}
          </Select>
          <Error>{store.payment.errors.ccYear}</Error>
        </InputWrapper>
        <InputWrapper>
          <Input
            name={"ccCvv"}
            value={store.payment.ccCvv}
            onChange={handelFormInput}
          />
          <Error>{store.payment.errors.ccCvv}</Error>
        </InputWrapper>
      </Row>
      <Button onClick={handleSubmit}>Submit Payment</Button>
    </Form>
  );
});

export default FormComponent;
