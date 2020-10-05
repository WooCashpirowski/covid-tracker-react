import React, { useContext } from "react";
import { DataContext } from "../context";
import Card from "../components/Card";
import Picker from "../components/Picker";
import CountUp from "react-countup";
import styled from "styled-components";
import world from "../images/world.jpg";
import virus from "../images/virus.png";
import Charts from "../components/Charts";

const Home = () => {
  const { stats, previousDay } = useContext(DataContext);

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
              <h4>
                population:{" "}
                <span>{(stats.population / 1000000).toFixed(2)} mln</span>
              </h4>
              <h2>
                Total cases: <br />
                <span>
                  <CountUp
                    className="numbers"
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
          <div className="cards-container">
            {stats ? (
              <h2 className="date">
                {new Date(stats.updated).toLocaleDateString()}
              </h2>
            ) : (
              <h3>loading...</h3>
            )}
            <div className="cards">
              <Card
                title="Today's cases:"
                numbers={stats.todayCases}
                noNumbersInfo="no cases reported today"
                yesterday={previousDay}
              />

              <Card
                title="Deaths:"
                numbers={stats.deaths}
                info={`Mortality rate: ${(
                  (stats.deaths / stats.cases) *
                  100
                ).toFixed(2)}%`}
              />
              <Card title="Total recovered:" numbers={stats.recovered} />
              <Card
                title="Tests:"
                numbers={stats.tests}
                info={`Tests rate: ${(
                  (stats.testsPerOneMillion / 1000000) *
                  100
                ).toFixed(2)}%`}
              />
            </div>
          </div>
        )}
        <Charts />
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    .image {
      position: absolute;
      top: -16px;
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
      width: 85%;
      font-family: "Roboto Mono", monospace;
      border: none;
      border-bottom: 2px solid #7fd1ae;
      padding: 1rem;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
      font-size: 16px;
      margin: 0 auto 2rem;
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        transform: scale(1.005);
      }
      &:active {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        transform: scale(1.005);
      }
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
      width: 170px;
      height: 150px;
      border-radius: 10%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      margin: 1rem auto;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

      img {
        height: 100%;
      }
    }
  }
  .cards-container {
    flex: 1;
    padding: 1rem;
    .date {
      font-family: "Roboto Mono", monospace;
      font-weight: bold;
      text-align: center;
      width: 85%;
      margin: auto;
      font-size: 2.5rem;
      color: #f3944c;
      padding: 0.5rem;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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
