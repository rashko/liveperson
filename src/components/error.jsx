import React from 'react';
import styled from 'styled-components';

const Error = styled.span`
  color: #cc0000;
  font-size: 0.9em;
  font-weight: bold;
`;

const ErrorComponent = (props) => {
    return <Error>{props.children}</Error>
}

export default ErrorComponent;