import React from "react";
import '../styles/destination.css'
import Data from '../data.json'
export default function Europa(){
  
    return(
        <div className="europa">
             <div className="img">
            <img src='/assets/destination/image-europa.png' alt="img"/>
          </div>
         <div className="europaText">
        <h1>{Data.destinations[2].name}</h1>
          <p>{Data.destinations[2].description}</p>
          <hr/>
          <div className="destinationDistance">
            <div>
            <h6>AVG DISTANCE</h6>
            <p>{Data.destinations[2].distance}</p>
            </div>
             <div>
                <h6>EST. TRAVEL TIME</h6>
                <p>{Data.destinations[2].travel}</p>
             </div>
          </div>
         </div>
        </div>
  
  
    )
}