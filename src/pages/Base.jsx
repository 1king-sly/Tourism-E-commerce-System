import React from 'react';
// import background from "./images/mountains.jpg"
import Navbar from '../Components/NavBar';
import "./Base.css";
import Contact from '../Components/Contact';
import  Services from '../Components/Services.jsx';
import ServicesOffered from '../Components/ServicesOffered.jsx';
import About from './About';
import ServicesVal from '../Components/ServicesVal';
import Specials from '../Components/Specials.jsx';
import TestimonialShow from '../Components/TestimonialShow.jsx';
// import {NextUIProvider} from '@nextui-org/react'

const Base = () =>{
  return(
    <>
    <div className="showcase">
      <div className="navbar">
      <Navbar/>

      </div>
      <div className='text-box '>
        {/* <h1>Services</h1>
        <p>Home Services</p> */}
        <h1><span className='text-4xl'>  TUJUANE EVENTS & ADVENTURES LTD </span>  
        <span className='text-3xl  flex w-full '>TRANSFORMING COMMUNITIES.</span> 
          <span className='text-lg'>Tujuaane Events and Adventures transforms communities through a holistic approach, involving clean-ups, tree planting, tourism events, charity initiatives, and educational support for students.</span> </h1>
      </div>
    </div>
    <div id='destination'>
    <ServicesVal />
    </div>
    
    <div id='services'>
    <ServicesOffered/>
    </div>
    <About/>
    <div id='contact'>
    <Contact/>
    </div>
    
    </>
  )
}

export default Base;