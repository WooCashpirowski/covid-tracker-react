import React, { useContext } from "react";
import { DataContext } from "../context";

const Chart = () => {
  const { allCountriesData } = useContext(DataContext);

  if (allCountriesData.length) {
    console.log(allCountriesData);
  }

  return <div>CHART component</div>;
};

export default Chart;
