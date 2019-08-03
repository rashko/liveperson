import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  padding: ${props => props.action ? '12px 108px' : '12px 0'};
  position: relative;
  align-items:  ${props => props.action ? 'center' : 'flex-start'};
`;

const RowComponent = (props) => {
    return <Row {...props}>{props.children}</Row>
}

export default RowComponent;