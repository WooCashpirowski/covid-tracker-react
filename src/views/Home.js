import React, { useContext } from "react";
import { DataContext } from "../context";
import Card from "./components/Card";
import Picker from "./components/Picker";
import CountUp from "react-countup";
import styled from "styled-components";
import world from "../images/world.jpg";
import virus from "../images/virus.png";

const Home = () => {
  const { stats } = useContext(DataContext);

  console.log(stats && stats);

  return (
    <>
      <h1 className="heading">
        COVID-19{" "}
        <span>
          {" "}
          <img src={virus} alt="virus" />{" "}
        </span>{" "}
        NOW
      </h1>
      <Container>
        <div className="info">
          <Picker />

          {stats ? (
            <>
              {stats.country ? (
                <>
                  <h1>{stats.country}</h1>

                  <div className="image">
                    <img src={stats.countryInfo.flag} alt={stats.country} />
                  </div>
                </>
              ) : (
                <>
                  <h1>World</h1>
                  <div className="image">
                    <img src={world} alt="world" />
                  </div>
                </>
              )}
              <h4>
                region: <span>{stats.continent}</span>
              </h4>
              <h2>
                Total cases: <br />
                <span>
                  <CountUp
                    start={0}
                    end={stats.cases ? stats.cases : 0}
                    duration={2.75}
                    separator=" "
                  />
                </span>
              </h2>
            </>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
        {stats && (
          <div className="cards">
            {stats ? (
              <h2>{new Date(stats.updated).toLocaleDateString()}</h2>
            ) : (
              <h3>loading...</h3>
            )}
            <Card
              title="today's cases"
              numbers={stats.todayCases}
              noNumbersInfo="no cases reported so far"
            />
            <Card
              title="deaths"
              numbers={stats.deaths}
              info={`death rate: ${((stats.deaths / stats.cases) * 100).toFixed(
                2
              )}%`}
            />
            <Card title="total recovered" numbers={stats.recovered} />
            <Card
              title="tests"
              numbers={stats.deaths}
              info={`tests rate per citizen: ${(
                stats.testsPerOneMillion / 1000000
              ).toFixed(2)}`}
            />
          </div>
        )}
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  @media (max-width: 568px) {
    flex-direction: column;
    text-align: center;
    position: relative;
    .image {
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
      opacity: 0.4;
      width: 100% !important;
      height: 300px !important;
      border-radius: 0 !important;
      img {
        width: 100%;
      }
    }
  }
  .info {
    flex: 1;
    padding: 1rem;
    text-align: center;
    @media (max-width: 768px) {
      flex: 2;
    }
    select {
      width: 100%;
      border: none;
      background: rgb(250, 250, 250);
      padding: 0.5rem;
      margin-bottom: 2rem;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    h2 {
      font-weight: normal;
      margin-top: 1rem;
      span {
        font-weight: bold;
        font-size: 3rem;
      }
    }
    h3 {
    }
    h4 {
      font-weight: normal;
      span {
        font-weight: bold;
      }
    }

    .image {
      width: 150px;
      height: 150px;
      border-radius: 10%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      margin: 1rem auto;
      img {
        height: 100%;
      }
    }
  }
  .cards {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    @media (max-width: 768px) {
      flex: 3;
    }
    h2 {
      font-weight: normal;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;

export default Home;
