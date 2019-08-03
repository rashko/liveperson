import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const InputWrapperComponent = (props) => {
    return <InputWrapper>{props.children}</InputWrapper>
}

export default InputWrapperComponent;