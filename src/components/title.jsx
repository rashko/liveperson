import React from 'react';
import styled from 'styled-components';
import lock from '../assets/lock.png';
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;
const SecureImage = styled.div`
    background: url(${lock}) top left no-repeat;
    height: 32px;
    width: 32px;
`;

const Title = styled.div`
    font-size:1.2em;
    padding: 0 10px;
    font-weight: bold;
`
const TitleComponent = () => {
    return <Section>
        <SecureImage />
        <Title>Secure payment page</Title>
    </Section>
}

export default TitleComponent;