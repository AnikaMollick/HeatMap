import React from 'react'
import detectedObjects from './player-postions.json'
import h337 from "heatmap.js";
import events from './Events.json'

const HalfTimeDetection =events.filter( timeFrame => [13,14].includes(timeFrame.eventType)).map( timeFrame => timeFrame.timestamp)
export const endOfFirstHalf = HalfTimeDetection[0]*1000000000 
export const startOfSecondHalf= HalfTimeDetection[1]*1000000000

export const mainFunction = (detectedObjects,filterFn) => {

const deleteNode = document.getElementById("root2");
while (deleteNode.firstChild) {
  deleteNode.removeChild(deleteNode.lastChild);
}
const heatmapInstance = h337.create({
  container: document.querySelector('#root2'),
 height: 960,
 width:1100,
 
  });
  
  const coords =  detectedObjects.filter(filterFn).map(ball => ({x:ball.top_view_position[0],y:ball.top_view_position[1] }) )

  const values = {}
  for (let data of coords) {
      if (!values[data.x+'-'+data.y])
          values[data.x+'-'+data.y] = 0
      values[data.x+'-'+data.y] =+1
  }
  
  const width =1000
  const height =600
  let max=100
    for (let element of coords)
    { const key = element.x+"-"+element.y
    const value = values[key]
    element.value = value }
    
    let elements = coords.map(elm => ({ x: Math.floor(elm.x*width), y: Math.floor(elm.y*height),value: 1}))

  
      heatmapInstance.setData( {data:elements,max});


       heatmapInstance.onclick = () => {

      }
  }
  

  function HeatMap() {
      return (
        <div>
          <div className ="Button">
          <button id ='heatmapInstance' onClick = {() => mainFunction( detectedObjects, detectedObject =>{return detectedObject.type === 'ball' && detectedObject.timestamp_ns <= endOfFirstHalf})} >Ball 1st Half</button>
          </div>
                </div>
          );
            }
        export default HeatMap;