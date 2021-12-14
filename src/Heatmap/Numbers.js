import React from 'react'
import HeatMap from "react-heatmap-grid";




const xLabels = new Array(400).fill().map((i) => `${i}`);

const xLabelsVisibility = new Array(xLabels.length).fill(0).map((i) => (i  === xLabels.length));

const yLabels = ["1", "2", "3", "4","5","6","7","8","9","10","11", "12", "13", "14","15","16","17","18","19","20","21", "22", "23", "24","25","26","27","28","29","30","31", "32", "33", "34","35","36","37","38","39","40"];
const data = new Array(yLabels.length).fill(0).map(() =>new Array(xLabels.length).fill().map(() => Math.floor(Math.random() * 10000)));

function Players() {
  return (
    <div >
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsVisibility={xLabelsVisibility}
        data={data}
      
      />
    </div>
  );
}
export default Players;