import React from "react";
import styled from "styled-components";
import Title from "./title";
const List = styled.ul`
  padding: 10px;
  background: #ccc;
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
  list-style-type: none;
`;

const Value = styled.span`
    font-weight: bold
`;

const SuccessComponent = props => {
  const { payment } = props.store;
  const { billingAddress, country, ccNumber, ccMonth, ccYear, ccCvv } = payment;

  return (
    <>
      <Title title={"payment success data"} />
      <List>
        <li>Billing Address: <Value>{billingAddress}</Value></li>
        <li>Country: <Value>{country}</Value></li>
        <li>Credit card number: <Value>{ccNumber}</Value></li>
        <li>Expiry month: <Value>{ccMonth}</Value></li>
        <li>Expiry year: <Value>{ccYear}</Value></li>
        <li>CVV: <Value>{ccCvv}</Value></li>
      </List>
    </>
  );
};

export default SuccessComponent;
