import React from "react";
import styled from "styled-components";

const Label = styled.label`
  margin-right: 13px;
  text-transform: capitalize;
  font-weight: bold;
  @media (max-width: 768px) {
  }

  @media (min-width: 769px) {
    width: 100px;
    text-align: right;
  }
`;

const LabelComponent = props => {
  return <Label>{props.children}</Label>;
};

export default LabelComponent;
