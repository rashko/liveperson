import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #f26d32;
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #f26d32;
  border-radius: 3px;
  transition: all 0.3s;
  white-space: nowrap;
  &:hover {
    background: #fff;
    color: #f26d32;
  }
  &:focus {
    outline: 0;
  }
`;

const ButtonComponent = props => {
  return <Button onClick={props.onClick}>{props.children}</Button>;
};

export default ButtonComponent;
