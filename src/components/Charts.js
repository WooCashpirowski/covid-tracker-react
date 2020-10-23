import React, { useContext, useState } from "react";
import { DataContext } from "../context";
import styled from "styled-components";
import TopTenCol3d from "./charts/TopTenCol3d";
import TopTenTotal from "./charts/TopTenTotal";
import TopRate from "./charts/TopRate";
import Sunburst from "../components/charts/Sunburst";
import Pie from "../components/charts/Pie";
import Carousela from "./Carousela";
import { BsArrowsFullscreen, BsFullscreenExit } from "react-icons/bs";

const Charts = () => {
  const { allCountriesData, yesterdayCountriesData } = useContext(DataContext);

  const countriesData = allCountriesData.map((country) => {
    return {
      id: country.countryInfo.iso3,
      country: country.country,
      cases: country.cases,
      today: country.todayCases,
      deaths: country.deaths,
      recovered: country.recovered,
      flag: country.countryInfo.flag,
      population: country.population,
      tests: country.tests,
    };
  });
  const yesterdayData = yesterdayCountriesData.map((country) => {
    return {
      id: country.countryInfo.iso3,
      country: country.country,
      cases: country.cases,
      today: country.todayCases,
      deaths: country.deaths,
      recovered: country.recovered,
      flag: country.countryInfo.flag,
    };
  });

  const topTenToday = countriesData
    .sort((a, b) => b.today - a.today)
    .slice(0, 10)
    .map((item) => {
      return {
        label: item.country,
        value: item.today,
      };
    });
  const topTenYesterday = yesterdayData
    .sort((a, b) => b.today - a.today)
    .slice(0, 10)
    .map((item) => {
      return {
        label: item.country,
        value: item.today,
      };
    });
  const topTenTotal = countriesData
    .sort((a, b) => b.cases - a.cases)
    .slice(0, 10)
    .map((item) => {
      return {
        label: item.country,
        value: item.cases,
      };
    });

  const topDeathsRate = countriesData
    .map((item) => {
      const rate = ((item.deaths / item.cases) * 100).toFixed(2);
      return {
        label: item.country,
        value: rate,
      };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 15);

  const topTestsRate = countriesData
    .map((item) => {
      const rate = ((item.tests / item.population) * 100).toFixed(2);
      return {
        label: item.country,
        value: rate,
      };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 10);

  const topTests = countriesData
    .map((item) => {
      return {
        label: item.country,
        value: item.tests,
      };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 10);

  const [largeChart, setLargeChart] = useState(false);

  return (
    <ChartStyled>
      {countriesData.length ? (
        <>
          <div className="chart pie">
            <Pie />
            <button
              className="full-screen-btn"
              onClick={() => setLargeChart(true)}
            >
              <BsArrowsFullscreen />
            </button>
          </div>

          <div className="chart">
            <Carousela>
              <div>
                <TopTenTotal
                  data={topTenTotal}
                  caption="Countries with the highest number of cases in total"
                  palettecolors="7fd1ae"
                  yAxisName="Total cases"
                />
                <div className="overlay"></div>
              </div>
              <div>
                <TopTenCol3d
                  data={topTenToday}
                  caption="Today's top daily cases"
                  palettecolors="528140"
                />
                <div className="overlay"></div>
              </div>
              <div>
                <TopTenCol3d
                  data={topTenYesterday}
                  caption="Yesterday's top daily cases"
                  palettecolors="f3944c"
                />
                <div className="overlay"></div>
              </div>
              <div>
                <TopRate
                  data={topDeathsRate}
                  caption="Countries with the highest mortality rate"
                  subCaption="Number of deaths in relation to the number of infections"
                  yAxisName="Mortality rate"
                  palettecolors="f3944c"
                />
                <div className="overlay"></div>
              </div>
              <div>
                <TopTenTotal
                  data={topTests}
                  caption="Countries with the highest number of tests"
                  palettecolors="528140"
                  yAxisName="Total tests"
                />
                <div className="overlay"></div>
              </div>
              <div>
                <TopRate
                  data={topTestsRate}
                  caption="Countries with the highest tests rate"
                  subCaption="Number of tests in relation to the number of population"
                  yAxisName="Tests rate"
                  palettecolors="528140"
                />
                <div className="overlay"></div>
              </div>
            </Carousela>
          </div>
        </>
      ) : (
        <p style={{ textAlign: "center" }}>loading charts...</p>
      )}
      {largeChart && (
        <div className="sunburst-large">
          <Sunburst />
          <button
            className="full-screen-btn"
            onClick={() => setLargeChart(false)}
          >
            <BsFullscreenExit />
          </button>
        </div>
      )}
    </ChartStyled>
  );
};

const ChartStyled = styled.section`
  width: 33%;
  margin: 0.5rem 2.5rem 0.5rem 0;
  padding: 0.5rem;
  text-align: center;
  flex: 1;
  .chart {
    margin-bottom: 0.5rem;
    position: relative;
    width: 100%;
    &.pie {
      height: 350px;
      .full-screen-btn {
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        background: none;
        border: none;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
      }
    }
  }
  .sunburst-large {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10000 !important;
    .full-screen-btn {
      position: fixed;
      top: 0.5em;
      right: 0.5em;
      background: none;
      border: none;
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 85%;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 20%;
    }
  }
`;

export default Charts;
