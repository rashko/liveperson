import React from 'react';
import styled from 'styled-components';
import {observer} from "mobx-react"
import {validate} from '../payment';
import CountrySelect from './countrySelect';
import {getCountries} from '../services/country';
const Button = styled.button`
  background: #F26D32;
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #F26D32;
  border-radius: 3px;
  transition: all 0.3s;
  &:hover {
    background: #fff;
    color: #F26D32;
  }
`;

const Input = styled.input`
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid  #A6A6A6;
  background: #fff;
  font-family: "Source Sans Pro", sans-serif;
  flex: 1;
  -webkit-box-shadow: none;
  box-shadow: none;
  transition: 0.3s;
  &::placeholder {
    color: #A6A6A6;
  }
  &:hover {
    background: #F9F9F9;
    border-color: #808080;
  }
  &:focus {
    background: #FFFFFF;
    border-color: #F26D32;
    outline: none;
  }
`;

const Row = styled.div`
    display: flex;
    padding: 8px 0;
    position: relative;
    align-items: center;
`;

const Label = styled.label`
    width: 100px;
    text-align: right;
    margin-right: 13px;
    text-transform: capitalize;
`;


const Form = styled.form`
    padding: 10px;  
`;

const Error = styled.span`
    color: #cc0000;
    font-size: 0.9em;
    font-weight: bold;
`;

const FormComponent = observer(props => {
    const {store} = props;
    
    const handelFormInput = (e) => {
        const {name, value} = e.target;
        const error = validate(name, value) ? '' : `${name} is invalid`;
        store.payment.updateFormInput(name, value);
        store.payment.errors.updateFormError(name, error)

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (store.payment.isValid) {
            store.payment.submitForm()
        }
    }
    return (
        <Form>
            <Row>
                <Label>billing address</Label>
                <Input name={'billingAddress'} placeholder={'Street address'} value={store.payment.billingAddress} onChange={handelFormInput}/>
                <Error>{store.payment.errors.billingAddress}</Error>
            </Row>
            <Row>
                <CountrySelect onHandleChange={handelFormInput} value={store.payment.country}/>
                <Error>{store.payment.errors.country}</Error>
            </Row>
            <Row>
                <Label>last name</Label>
                <Input name={'lastName'} value={store.payment.lastName} onChange={handelFormInput}/>
                <Error>{store.payment.errors.lastName}</Error>
            </Row>
            <Button onClick={handleSubmit}>Send</Button>
        </Form>
    );


});

export default FormComponent;
