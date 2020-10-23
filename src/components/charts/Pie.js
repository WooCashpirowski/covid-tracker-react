import React, { useContext } from "react";
import { DataContext } from "../../context";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, CandyTheme);

const Pie = () => {
  const { allCountriesData: allData } = useContext(DataContext);

  const countValue = (continent) => {
    return allData
      .filter((item) => item.continent === continent)
      .reduce((a, b) => a + b.cases, 0);
  };

  const data = [
    {
      label: "Europe",
      value: countValue("Europe"),
      displayValue: "Europe",
    },
    {
      label: "Asia",
      value: countValue("Asia"),
      displayValue: "Asia",
    },
    {
      label: "North America",
      value: countValue("North America"),
      displayValue: "North America",
    },
    {
      label: "South America",
      value: countValue("South America"),
      displayValue: "South America",
    },
    {
      label: "Africa",
      value: countValue("Africa"),
      displayValue: "Africa",
    },
    {
      label: "Australia/Oceania",
      value: countValue("Australia/Oceania"),
      displayValue: "Australia/Oceania",
    },
  ];

  const chartConfigs = {
    type: "pie2d",
    width: "100%",
    height: "100%",
    dataFormat: "JSON",
    dataSource: {
      chart: {
        caption: "Total number of cases in regions",
        showlegend: "0",
        showpercentvalues: "0",
        palettecolors: "E87271,BD638C,825F90,4B577B,518A38,006F5E",
        usedataplotcolorforlabels: "1",
        decimals: "2",
        labelPosition: "inside",
        valuePosition: "inside",
        theme: "candy",
        pieRadius: "150",
        skipOverlapLabels: "1",
        slicingDistance: "10",
        labelFontSize: "12",
        labelFontColor: "#ffffff",
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Pie;
