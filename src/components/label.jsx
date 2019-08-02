import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  width: 100px;
  text-align: right;
  margin-right: 13px;
  text-transform: capitalize;
`;

const LabelComponent = (props) => {
    return <Label>{props.children}</Label>
}

export default LabelComponent;