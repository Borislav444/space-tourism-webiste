import React from "react";
import '../styles/crew.css'
import Navbar from "./Navbar";
import CrewContent from "./CrewContent";
export default function Crew(){
    return(
        <div className='crew' style={{backgroundImage:`url("assets/crew/background-crew-desktop.jpg")`}}>
            <Navbar/>
            <CrewContent/>
        </div>
    )
}