import React, { useContext } from "react";
import { DataContext } from "../../context";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, PowerCharts, CandyTheme);

const Sunburst = () => {
  const { allCountriesData: allData } = useContext(DataContext);

  const chartData = allData.map((item, i) => {
    if (item.continent === "Africa") {
      return {
        id: `2.${i}`,
        parent: "1.1",
        name: item.country,
        value: item.cases,
      };
    } else if (item.continent === "Asia") {
      return {
        id: `2.${i}`,
        parent: "1.3",
        name: item.country,
        value: item.cases,
      };
    } else if (item.continent === "North America") {
      return {
        id: `2.${i}`,
        parent: "1.2",
        name: item.country,
        value: item.cases,
      };
    } else if (item.continent === "South America") {
      return {
        id: `2.${i}`,
        parent: "1.6",
        name: item.country,
        value: item.cases,
      };
    } else if (item.continent === "Europe") {
      return {
        id: `2.${i}`,
        parent: "1.4",
        name: item.country,
        value: item.cases,
      };
    } else if (item.continent === "Australia/Oceania") {
      return {
        id: `2.${i}`,
        parent: "1.5",
        name: item.country,
        value: item.cases,
      };
    } else {
      return {};
    }
  });

  const parents = [
    {
      id: "0.0",
      parent: "",
      name: "The World",
      value: 0,
    },
    {
      id: "1.3",
      parent: "0.0",
      name: "Asia",
      value: 0,
    },
    {
      id: "1.1",
      parent: "0.0",
      name: "Africa",
      value: 0,
    },
    {
      id: "1.2",
      parent: "0.0",
      name: "North America",
      value: 0,
    },
    {
      id: "1.6",
      parent: "0.0",
      name: "South America",
      value: 0,
    },
    {
      id: "1.4",
      parent: "0.0",
      name: "Europe",
      value: 0,
    },
    {
      id: "1.5",
      parent: "0.0",
      name: "Australia/Oceania",
      value: 0,
    },
  ];

  const data = [...parents, ...chartData];

  const chartConfigs = {
    type: "sunburst",
    width: "100%",
    height: "100%",
    dataFormat: "JSON",
    dataSource: {
      chart: {
        caption: "Number of cases",
        subcaption: "Regions and countries",
        showplotborder: "1",
        theme: "candy",
      },
      data,
      styles: {
        definition: [
          {
            name: "myHTMLFont",
            type: "font",
            ishtml: "1",
          },
        ],
        application: [
          {
            toobject: "TOOLTIP",
            styles: "myHTMLFont",
          },
        ],
      },
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Sunburst;
