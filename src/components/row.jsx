import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  padding: 8px 0;
  position: relative;
  align-items: flex-start;
`;

const RowComponent = (props) => {
    return <Row>{props.children}</Row>
}

export default RowComponent;