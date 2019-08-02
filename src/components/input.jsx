import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #a6a6a6;
  background: #fff;
  font-family: "Source Sans Pro", sans-serif;
  flex: 1;
  -webkit-box-shadow: none;
  box-shadow: none;
  transition: 0.3s;
  &::placeholder {
    color: #a6a6a6;
  }
  &:hover {
    background: #f9f9f9;
    border-color: #808080;
  }
  &:focus {
    background: #ffffff;
    border-color: #f26d32;
    outline: none;
  }
`;

const InputComponent = (props) => {
    return <Input
    name={props.name}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
  />
}

export default InputComponent;