import React from 'react'
import detectedObjects from './player-postions.json'
import h337 from "heatmap.js";
import events from './Events.json'
import { endOfHalfTime, mainFunction, startOfSecondHalf } from './BallPosition';



  
  function HeatMap() {
      return (
        <div>
          <div className ="Button">
          <button id ='heatmapInstance' onClick = {() => mainFunction(detectedObjects,detectedObject=> {return detectedObject.type==='player' && detectedObject.team ==='0'&& detectedObject.timestamp_ns >= startOfSecondHalf})} > Team A 2nd Half</button>
          </div>
                </div>
          );
            }
        export default HeatMap;