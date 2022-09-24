import React from "react";
import '../styles/destination.css'
import Data from '../data.json'
export default function Titan(){
  
 
 
    return(
        <div className="titan">
         <div className="img">
            <img src='/assets/destination/image-titan.png' alt="img"/>
          </div>
      
        <div className="titanText">
        <h1>{Data.destinations[3].name}</h1>
          <p>{Data.destinations[3].description}</p>
          <hr/>
          <div className="destinationDistance">
            <div>
            <h6>AVG DISTANCE</h6>
            <p>{Data.destinations[3].distance}</p>
            </div>
             <div>
                <h6>EST. TRAVEL TIME</h6>
                <p>{Data.destinations[3].travel}</p>
             </div>
          </div>
        </div>
        </div>
  
  
    )
}