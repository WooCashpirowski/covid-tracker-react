import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  h1 {
    text-align: center;
    margin: 5rem 0;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
    border: 1px solid black;
    transition: all 0.2s ease;
    &:hover {
      color: violet;
      border: 1px solid violet;
    }
  }
`;

const Error = () => {
  return (
    <ErrorPage>
      <h1>404. There's no way that you can find anything here.</h1>
      <Link to="/">Go home</Link>
    </ErrorPage>
  );
};

export default Error;
