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

const FailComponent = props => {
  const { payentError } = props.store.payment;

  return (
    <>
      <Title title={"payment failed data"} />
      <List>
        <li>Error message: <Value>{payentError}</Value></li>
      </List>
    </>
  );
};

export default FailComponent;
