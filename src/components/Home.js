import React from 'react'
import '../styles/home.css'
import Navbar from './Navbar'
import HomeContent from './HomeContent'
export default function Home(){
    return(
        <div className='home' style={{backgroundImage:`url("assets/home/background-home-desktop.jpg")`}}>
           <Navbar/>
           <HomeContent/>
        </div>
         
        

    )
}