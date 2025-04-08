import logo from './logo.svg';
import './App.css';

import NewPieChart from "./components/pie-chart/index"

function MyButton() {
  return (
    <button>
      "I'm a button for all sadness in my life"
    </button>
  );
};

export default function MyApp() {
  return (
    <div>
       <h1>Welcome to my app</h1>
       <NewPieChart />
       <MyButton />
    </div>
  );
};