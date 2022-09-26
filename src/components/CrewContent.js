import React, { useState }  from "react";
import '../styles/crew.css'
import Data from '../data.json'
export default function CrewContent(){
  const[currenCrew, setCurrentCew] = useState(0)
    function handleClick(id){
      setCurrentCew(id)
    }

    const Crew= Data.crew.map(({role,name,bio,images, index})=>
    <div className="crewHeader">
        <h2><span>02</span>MEET YOUR CREW</h2>
     
      <div className="crewContent">
       
            <div className="crewText" key={index}>
            <h1>{role}</h1>
            <h3>{name}</h3>
            <p>{bio}</p>

            <div className="buttons">
            <button type="radio" onClick={()=> handleClick(0)}></button>
            <button type="radio" onClick={()=> handleClick(1)}></button>
            <button type="radio" onClick={()=> handleClick(2)}></button>
            <button type="radio" onClick={()=>handleClick(3)}></button>
            </div>
          </div>
         

          <div className="crewImage">
        <img src={images.png} alt="img"/>
          </div>
      </div>
     </div>
       )
    return(
       
         <div>{Crew[currenCrew]}</div>
    )
}