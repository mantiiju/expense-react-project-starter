import React from "react";
import "./ChartBar.css";

const ChartBar = () => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: "50%" }}></div>
      </div>
      <div className="chart-bar__label">Jan</div>
    </div>
  );
};

export default ChartBar;
