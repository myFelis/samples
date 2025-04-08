//import React from 'react';
import { Fragment } from 'react';
import { Chart } from "react-google-charts";
import dataChart from "../data"


// Optional
const options = {
  title: "My Flat Daily Activities",
  legend: {
    position: "bottom",
    alignment: "center",
  }
};

const options2 = {
    title: "My Super 3D Daily Activities",
    pieHole: 0.4, // Creates a Donut Chart. Does not do anything when is3D is enabled
    is3D: true, // Enables 3D view
    // slices: {
    //   1: { offset: 0.2 }, // Explodes the second slice
    // },
    pieStartAngle: 100, // Rotates the chart
    sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
    colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#D1C28A"],
  };

  const NewPieChart = () => {
    return (
        <Fragment>
            <Chart
                chartType="PieChart"
                data={dataChart}
                options={options}
                width={"100%"}
                height={"400px"}
              />;
              <Chart
                chartType="PieChart"
                data={dataChart}
                options={options2}
                width={"100%"}
                height={"400px"}
              />;
        </Fragment>
    );
};

export default NewPieChart;