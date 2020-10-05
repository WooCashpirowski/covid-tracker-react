import React from "react";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, CandyTheme);

const TopTenToday = ({ data }) => {
  const chartConfigs = {
    type: "bar3d",
    width: "100%",
    height: "350",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Top 10 countries with the highest number of deaths",
        // palettecolors: "f3944c",
        captionFont: "Nunito",
        usePlotGradientColor: "1",
        xAxisName: "Country",
        yAxisName: "Today's cases",
        theme: "candy",
        alignCaptionWithCanvas: 0,
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default TopTenToday;
