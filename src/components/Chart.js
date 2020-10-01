import React, { useContext } from "react";
import { DataContext } from "../context";
import styled from "styled-components";

const Chart = () => {
  const { allCountriesData } = useContext(DataContext);

  const data = allCountriesData.map((country) => {
    return {
      id: country.countryInfo.iso3,
      country: country.country,
      cases: country.cases,
      deaths: country.deaths,
      recovered: country.recovered,
    };
  });

  // if (data.length) {
  //   console.log(data);
  // }

  return data && <ChartStyled></ChartStyled>;
};

const ChartStyled = styled.section`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  margin: 1rem auto;
  text-align: center;
`;

export default Chart;
