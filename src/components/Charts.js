import React, { useContext } from "react";
import { DataContext } from "../context";
import styled from "styled-components";
import TopTenToday from "./charts/TopTenToday";
import TopTenTotal from "./charts/TopTenTotal";
import TopMortalityRate from "./charts/TopMortalityRate";
import Carousela from "./Carousela";

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

  const deathsRate = countriesData.map((item) => {
    const rate = ((item.deaths / item.cases) * 100).toFixed(2);
    return {
      label: item.country,
      value: rate,
    };
  });

  const topDeathsRate = deathsRate
    .sort((a, b) => b.value - a.value)
    .slice(0, 15);

  return (
    <ChartStyled>
      {countriesData.length ? (
        <>
          <div className="chart">
            <TopTenTotal data={topTenTotal} />
            <div className="overlay"></div>
          </div>
          <div className="chart">
            <Carousela>
              <div>
                <TopTenToday
                  data={topTenToday}
                  caption="Countries with the highest number of daily cases"
                  palettecolors="528140"
                />
                <div className="overlay"></div>
              </div>
              <div>
                <TopTenToday
                  data={topTenYesterday}
                  caption="Yesterday's top daily cases"
                  palettecolors="f3944c"
                />
              </div>
            </Carousela>
          </div>
          <div className="chart">
            <TopMortalityRate data={topDeathsRate} />
            <div className="overlay"></div>
          </div>
        </>
      ) : (
        <p style={{ textAlign: "center" }}>loading charts...</p>
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
