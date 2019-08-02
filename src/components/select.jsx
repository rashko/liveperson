import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 4px 10px;
  border-radius: 4px;
  flex: 1;
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

const SelectComponent = (props) => {
    return (
        <Select
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        >
          {props.children}
        </Select>
      );
}

export default SelectComponent;