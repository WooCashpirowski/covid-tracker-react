import React from "react";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, CandyTheme);

const TopTenToday = ({ data, caption, palettecolors, yAxisName }) => {
  const chartConfigs = {
    type: "bar3d",
    width: "100%",
    height: "350",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption,
        palettecolors,
        captionFont: "Nunito",
        xAxisName: "Country",
        yAxisName,
        theme: "candy",
        alignCaptionWithCanvas: 0,
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default TopTenToday;
