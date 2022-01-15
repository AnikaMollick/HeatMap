import './App.css';
import { useState } from 'react';
import Map from './Heatmap/Map.js';
import PlayerHeatmap from './Heatmap/PlayerHeatmap';
import BallPosition from './Heatmap/BallPosition';
import BallPosition2ndHalf from './Heatmap/BallPosition2ndHalf';
import TeamAFirstHalf from './Heatmap/TeamAFirstHalf';
import TeamBFirstHalf from './Heatmap/TeamBFirstHalf';
import TeamASecondHalf from './Heatmap/TeamASecondHalf';
import TeamBSecondHalf from './Heatmap/TeamBSecondHalf';
import { HeatMap } from './components/HeatMap';
import playerPositions from './Heatmap/player-postions.json';
import { filterData, ball1stHalfFilter, ball2ndHalfFilter } from "./Heatmap/logic";

function App() {
  const [heatmapData, setHeatmapData] = useState();

  return (
    <div className="App" style={{minHeight: 800}}>
      <h1>Heatmap Player Position</h1>
      <div className="clearfix">
        <div className="Button">
          <button
            onClick={() => {
              const newData = filterData(playerPositions, ball1stHalfFilter);
              setHeatmapData(newData);
            }}
          >
            Ball 1st half (New)
          </button>
        </div>

        <div className="Button">
          <button
            onClick={() => {
              const newData = filterData(playerPositions, ball2ndHalfFilter);
              setHeatmapData(newData);
            }}
          >
            Ball 2nd half (New)
          </button>
        </div>
      </div>

      {heatmapData && <HeatMap data={heatmapData}></HeatMap>}

      <div id="old-code">
        <Map />
        <PlayerHeatmap />
        <BallPosition />
        <BallPosition2ndHalf />
        <TeamAFirstHalf />
        <TeamBFirstHalf />
        <TeamASecondHalf />
        <TeamBSecondHalf />
      </div>
    </div>
  );
}

export default App;
