import React from 'react'
import mapData from './player-postions.json'
import { myFn } from './BallPosition';


  //const coords = mapData.filter(playerType => playerType.type === 'player').filter( t => t.team ==='0').map(ball => ({x:ball.top_view_position[0],y:ball.top_view_position[1] }) ) 
 
    
  
   function TeamA() {
      return (
        <div>
          
          <div className ="TeamButton">
          {/* <h1>Heatmap for Team A </h1> */}
          <button onClick = {()=>myFn(mapData, playerType=> playerType.type==='player', t => t.team ==='0') }>Show heatmap for Team A</button>
          
          </div>
          
          </div>
      );
    }
    export default TeamA;