import React from 'react';
import styled from 'styled-components';
import mastercard from "../assets/mastercard.png";
import visa from "../assets/visa.png";
import amex from "../assets/amex.png";
const Logo = styled.div`
background: url(${props => {
    switch(props.type){
        case 'mastercard': return mastercard; 
        case 'visa': return visa; 
        case 'amex': return amex;
        default: return null
    }
}}) top center no-repeat;
width: 48px;
height: 48px;
background-position-y: -10px;
`;

const CreditCardLogo = (props) => {
    return <Logo type={props.type} />
}

export default CreditCardLogo;