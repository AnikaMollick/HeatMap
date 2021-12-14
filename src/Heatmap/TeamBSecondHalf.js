import React from 'react'
import detectedObjects from './player-postions.json'
import { mainFunction, startOfSecondHalf } from './BallPosition';


  
  
  function HeatMap() {
      return (
        <div>
          <div className ="Button">
          <button id ='heatmapInstance' onClick = {() => mainFunction(detectedObjects,detectedObject=> {return detectedObject.type==='player' && detectedObject.team ==='1'&& detectedObject.timestamp_ns >= startOfSecondHalf})} > Team B 2nd Half</button>
          </div>
                </div>
          );
            }
        export default HeatMap;