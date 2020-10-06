import React from "react";
import styled from "styled-components";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        <a href="https://woocashpirowski.com/">Woo Cashpirowski</a>{" "}
        {new Date().getFullYear()}
      </p>
      <a href="https://github.com/WooCashpirowski/covid-tracker-react">
        <VscGithub />
      </a>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: #f3944c;
    svg {
      font-size: 2rem;
    }
  }
`;
