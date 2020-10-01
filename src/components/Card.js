import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Card = ({ title, numbers, noNumbersInfo, info, yesterday }) => {
  return (
    <CardContainer>
      <h2>{title}</h2>
      {numbers === 0 ? (
        <h3 className="numbers">{noNumbersInfo}</h3>
      ) : (
        <h1>
          <CountUp
            className="numbers"
            start={0}
            end={numbers ? numbers : 0}
            duration={1.5}
            separator=" "
          />
        </h1>
      )}

      <p>{info}</p>

      {yesterday ? (
        <h3>
          Yesterday's cases:{" "}
          <span>
            <CountUp
              className="numbers"
              start={0}
              end={yesterday ? yesterday : ""}
              duration={1}
              separator=" "
            />
          </span>
        </h3>
      ) : (
        ""
      )}
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
  background: #f3944c;
  border-bottom: 5px solid #7fd1ae;
`;

export default Card;
