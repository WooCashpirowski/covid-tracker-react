import React from "react";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, CandyTheme);

const TopTenCol3d = ({ data, caption, palettecolors }) => {
  const chartConfigs = {
    type: "column3d",
    width: "100%",
    height: "350",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption,
        palettecolors,
        labelDisplay: "rotate",
        slantLabel: "1",
        captionFont: "Nunito",
        usePlotGradientColor: "1",
        yAxisName: "Number of cases",
        theme: "candy",
        alignCaptionWithCanvas: 0,
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default TopTenCol3d;
