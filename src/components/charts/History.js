import React, { useContext } from "react";
import { DataContext } from "../../context";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, CandyTheme);

const History = () => {
  const { history } = useContext(DataContext);

  const historyData = Object.keys(history).map((key) => {
    const newDate = `${key.split("/")[1]}/${key.split("/")[0]}/20${
      key.split("/")[2]
    }`;
    return {
      label: newDate,
      value: history[key],
    };
  });

  const chartConfigs = {
    type: "line",
    width: "100%",
    height: "350",
    dataFormat: "json",
    dataSource: {
      chart: {
        yAxisName: "Number of cases",
        palettecolors: "7fd1ae",
        captionFont: "Nunito",
        labelFontSize: "10",
        theme: "candy",
        alignCaptionWithCanvas: 0,
        labelStep: 15,
        slantLabels: 1,
        rotateLabels: 1,
        drawAnchors: 0,
      },
      data: historyData,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default History;
