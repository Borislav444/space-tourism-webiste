import React from "react";
import '../styles/destination.css'
import Navbar from "./Navbar";
import{Link,Outlet} from 'react-router-dom'

export default function Destination(){
    return(
        <div className="destination" style={{backgroundImage:`url("assets/destination/background-destination-desktop.jpg")`}}>
            <Navbar/>
            <h2><span>01</span>PICK YOUR DESTINATION</h2>
           <div className="destination-links">
            <Link to="moon">Moon</Link>
            <Link to="mars">Mars</Link>
            <Link to="europa">Europa</Link>
            <Link to="titan">Titan</Link>

           </div>

            <Outlet/>
        </div>
            
    )
}