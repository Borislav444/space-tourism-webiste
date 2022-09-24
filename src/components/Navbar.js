import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'
export default function Navbar(){
    return(
      <div className='nav'>
      <img src="assets/Path.png" alt='logo'/>
      <p></p>
        <div className="navBar">
          <Link to="/"><b>00</b>HOME</Link>
          <Link to="/destination"><b>01</b>DESTINATION</Link>
          <Link to="/crew"><b>02</b>CREW</Link>
          <Link to="/technology"><b>03</b>TECHNOLOGY</Link> 
        </div>
     </div>
    
    )
}