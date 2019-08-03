import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 1.2em;
  padding: 0 10px;
`;
const ProgrssBarComponent = props => {
  return (
    <>
      <Label>{props.label}</Label>
      <progress max={props.max} value={props.value}>{props.value}%</progress>
    </>
  );
};

export default ProgrssBarComponent;
