import React from 'react'
import detectedObjects from './player-postions.json'
import h337 from "heatmap.js";
import events from './Events.json'
import { endOfFirstHalf,  mainFunction } from './BallPosition';
 

  
  
  function HeatMap() {
      return (
        <div className='clearfix'>
          <div className ="Button">
          <button id ='heatmapInstance' onClick = {() => mainFunction(detectedObjects,detectedObject=> {return detectedObject.type==='player' && detectedObject.team ==='1' && detectedObject.timestamp_ns <= endOfFirstHalf})} >Team B 1st Half</button>
          </div>
                </div>
          );
            }
        export default HeatMap;