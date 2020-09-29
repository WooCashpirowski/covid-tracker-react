import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Card = ({ title, numbers, noNumbersInfo, info }) => {
  return (
    <CardContainer>
      <h2>{title}</h2>
      <h1>
        <CountUp
          start={0}
          end={numbers ? numbers : 0}
          duration={1.5}
          separator=" "
        />
      </h1>
      {numbers === 0 && <p>{noNumbersInfo}</p>}
      <p>{info}</p>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 85%;
  height: 135px;
  margin: 0.5rem auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  text-align: center;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #cdc7db;
`;

export default Card;
