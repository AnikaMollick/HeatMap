import React from 'react'
import h337 from "heatmap.js";
import detectedObjects from './player-postions.json'
import events from './Events.json'
import { mainFunction, startOfSecondHalf } from './BallPosition';


  
  function HeatMap() {
      return (
        <div className='clearfix'>
          <div className ="Button">
          <button id ='heatmapInstance' onClick = {() => mainFunction( detectedObjects, detectedObject =>{return detectedObject.type === 'ball' && detectedObject.timestamp_ns >=startOfSecondHalf})} >Ball 2nd Half</button>
          </div>
                </div>
          );
            }
        export default HeatMap;