import React from "react";
import '../styles/destination.css'
import Data from '../data.json'
export default function Mars(){

 
  
    return(
      <div className="mars">
         <div className="marsImg">
            <img src="/assets/destination/image-mars.png" alt="img"/>
          </div>
      <div className="text">

      <h1>{Data.destinations[1].name}</h1>
        <p>{Data.destinations[1].description}</p>
        <hr/>
        <div className="destinationDistance">
          <div>
          <h6>AVG DISTANCE</h6>
          <p>{Data.destinations[1].distance}</p>
          </div>
           <div>
              <h6>EST. TRAVEL TIME</h6>
              <p>{Data.destinations[1].travel}</p>
           </div>
        </div>

      </div>

      </div>
    )
}