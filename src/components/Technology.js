import React from "react";
import '../styles/technology.css'
import Navbar from "./Navbar";
import TechContent from "./TechContent";



export default function Technology(){
    return(
        <div className="technology" style={{backgroundImage:`url("assets/technology/background-technology-desktop.jpg")`}}>
            <Navbar/>
            <TechContent/>
        </div>
    )
}