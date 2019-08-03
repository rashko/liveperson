import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: strech;
    padding: 0;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: ${props => (props.action ? "center" : "flex-start")};
    justify-content: flex-start;
    padding: ${props => (props.action ? "12px 108px" : "12px 0")};
  }
`;

const RowComponent = props => {
  return <Row {...props}>{props.children}</Row>;
};

export default RowComponent;
