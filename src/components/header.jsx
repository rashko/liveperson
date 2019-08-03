import React from "react";
import styled from "styled-components";
import logo from "../assets/liveperson.png";
const Header = styled.div`
  background: #ccc;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Logo = styled.div`
  @media (max-width: 768px) {
    background: url(${logo}) center left no-repeat;
    background-size: 180px;
    height: 52px;
    width: 180px;
  }

  @media (min-width: 769px) {
    background: url(${logo}) top left no-repeat;
    height: 52px;
    width: 268px;
  }
`;

const Title = styled.div`
  @media (max-width: 768px) {
    font-size: 1.3em;
    padding: 0 5px;
  }
  @media (min-width: 769px) {
    font-size: 2em;
    padding: 0 10px;
  }
`;
const HeaderComponent = () => {
  return (
    <Header>
      <Title>Liveperson</Title>
      <Logo />
    </Header>
  );
};

export default HeaderComponent;
