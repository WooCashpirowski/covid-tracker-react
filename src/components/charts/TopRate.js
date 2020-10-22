import React from "react";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, CandyTheme);

const TopRate = ({ data, caption, subCaption, yAxisName, palettecolors }) => {
  const chartConfigs = {
    type: "bar2d",
    width: "100%",
    height: "350",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption,
        subCaption,
        palettecolors,
        subCaptionFontSize: "12",
        labelFontSize: "9",
        valueFontSize: "10",
        numberSuffix: "%",
        captionFont: "Nunito",
        usePlotGradientColor: "1",
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

export default TopRate;
