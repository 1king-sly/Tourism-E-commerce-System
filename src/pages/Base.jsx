import React from 'react';
// import background from "./images/mountains.jpg"
import Navbar from '../Components/NavBar';
import "./Base.css";
import Contact from '../Components/Contact';
import ServicesOffered from '../Components/ServicesOffered.jsx';
import About from './About';
import ServicesVal from '../Components/ServicesVal';

const Base = () =>{
  return(
    <>
    <div className="showcase w-[100vw] max-[485px]:object-contain">
      <div className="navbar">
      <Navbar/>

      </div>
      <div className='text-box  '>
        <h1><span className='text-6xl max-[485px]:text-4xl'>  TUJUANE EVENTS & ADVENTURES LTD </span><br /> 
        <span className='text-3xl max-[485px]:text-xl  flex w-full '>TRANSFORMING COMMUNITIES.</span> 
          <span className='text-lg max-[485px]:text-sm'>Tujuaane Events and Adventures transforms communities through a holistic approach, involving clean-ups, tree planting, tourism events, charity initiatives, and educational support for students.</span> </h1>
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