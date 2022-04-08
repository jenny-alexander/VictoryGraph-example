import "./styles.css";
import React from "react";
import { VictoryTooltip, VictoryChart, VictoryBar } from "victory";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <VictoryChart
        domain={{ x: [0, 4], y: [-10, 10] }}
        style={{
          background: { fill: "lavender" }
        }}
      ></VictoryChart>
    </div>
  );
}
