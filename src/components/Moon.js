import React from "react";
import '../styles/destination.css'
import Data from '../data.json'
export default function Moon(){



  return(
        <div className="moon">
          <div className="img">
            <img src="/assets/destination/image-moon.png" alt="img"/>
          </div>
          <div className="destinationText">
           <h1>{Data.destinations[0].name}</h1>
            <p>{Data.destinations[0].description}</p>
            <hr/>
          <div className="destinationDistance">
            <div>
            <h6>AVG DISTANCE</h6>
            <p>{Data.destinations[0].distance}</p>
            </div>
             <div>
                <h6>EST. TRAVEL TIME</h6>
                <p>{Data.destinations[0].travel}</p>
             </div>
          </div>
       </div>
        </div>
        
    )
  }
    
         
     
            
      

