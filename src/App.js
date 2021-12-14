
import './App.css';
import Map from './Heatmap/Map.js'
import PlayerHeatmap from './Heatmap/PlayerHeatmap';
import BallPosition from './Heatmap/BallPosition';
import BallPosition2ndHalf from './Heatmap/BallPosition2ndHalf';
import TeamAFirstHalf from './Heatmap/TeamAFirstHalf';
import TeamBFirstHalf from './Heatmap/TeamBFirstHalf';
import TeamASecondHalf from './Heatmap/TeamASecondHalf';
import TeamBSecondHalf from './Heatmap/TeamBSecondHalf';
function App() {
  return (
    <div className="App">
      <h1>Heatmap Player Position</h1>
      <Map/>
      <PlayerHeatmap/>
        <BallPosition/> 
        <BallPosition2ndHalf/>       
      <TeamAFirstHalf/>
      <TeamBFirstHalf/>
      <TeamASecondHalf/>
      <TeamBSecondHalf/>
     
    </div>
  );
}

export default App;
