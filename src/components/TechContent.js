import React, {useState} from "react";
import '../styles/technology.css'
import Data from '../data.json'

export default function TechContent(){

 const[currenTech, setCurrentTech] = useState(0)

    function handleClick(id){
      setCurrentTech(id)
    }

const Tech = Data.technology.map(({name,images,description,index})=>
    <div className="TechHeader">
    <h2><span>03</span>SPACE LOUNCH 101</h2>

<div className="MainTech">
<div className="button">
    <button type="radio" onClick={()=> handleClick(0)} >1</button>
    <button type="radio" onClick={()=> handleClick(1)}>2</button>
    <button type="radio" onClick={()=> handleClick(2)}>3</button>
    </div>
    <div className="techContent" key={index}>
        <h5>THE TERMINOLOGY</h5>
        <h1>{name}</h1>
         <p>{description}</p>
    </div>
    <div className="techImage">
        <img src={images.portrait} alt="img"/>
    </div>
</div>
</div>
    
    )
    
    return(
       <div>{Tech[currenTech]}</div>
    )
}
    



