import logo from './logo.svg';
import './App.css';

import { Chart } from "react-google-charts";
    
function MyButton() {
  return (
    <button>
      I'm a button for all sadness in my life
    </button>
  );
};

const data = [
  ["Task", "Hours per Day"],
  ["Work", 10],
  ["Eat", 2],
  ["Family", 6],
  ["Sleep", 6],
];

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

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />;
      <Chart
        chartType="PieChart"
        data={data}
        options={options2}
        width={"100%"}
        height={"400px"}
      />;
      <MyButton />
    </div>
  );
}