import React from 'react'
import detectedObjects from './player-postions.json'
import events from './Events.json'
import {  mainFunction, startOfSecondHalf } from './BallPosition';




  function HeatMap() {
      return (
        <div className='clearfix'>
          <div className ="Button">
          <button id ='heatmapInstance' onClick = {() => mainFunction(detectedObjects,detectedObject=> {return detectedObject.type==='player' && detectedObject.team ==='0'&& detectedObject.timestamp_ns >= startOfSecondHalf})} > Team A 2nd Half</button>
          </div>
                </div>
          );
            }
        export default HeatMap;