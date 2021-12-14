
import React from 'react'
import detectedObjects from '../Heatmap/player-postions.json'
import { mainFunction } from './BallPosition';


function HeatMap() {
    return (
      <div>
        <div className ="Button">
      
           <button id ='heatmapInstance' onClick = {() => mainFunction( detectedObjects, () => true )}> Full Heatmap</button>
        
          </div>
        </div>
    );
  }
  export default HeatMap;



