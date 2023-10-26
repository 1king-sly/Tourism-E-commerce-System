import React from 'react';
// import background from "./images/mountains.jpg"
import Navbar from '../Components/NavBar';
import "./Base.css";
// import Contact from './src/Contact.jsx';
// import  Services from '../Components/Services.jsx';
// import ServicesCard from '../Components/ServicesCard.jsx';
// import ServicesOffered from '../Components/ServicesOffered.jsx';
// import Special from '../Components/Special.jsx';
// import Specials from '../Components/Specials.jsx';
// import Testimonial from '../Components/Testimonial.jsx';
// import TestimonialShow from '../Components/TestimonialShow.jsx';

const Base = () =>{
  return(
    <>
    <div className="showcase">
      <div className="navbar">
      <Navbar/>

      </div>
      <div className='text-box'>
        {/* <h1>Services</h1>
        <p>Home Services</p> */}
        <h1><span className='text-4xl'> Welcome to Tujuaane Events and Adventures Ltd </span><br /> <br />
          <span className='text-lg'>Where Every Journey is an Experience, Every Experience is a Memory, and Every Memory is a Bond. Explore with Us, Unite with Your Team, and Thrive Together!</span> </h1>
      </div>
    </div>
  
    {/* <Contact/>
    <Services/>
    <ServicesCard/>
    <ServicesOffered/>
    <Special/>
    <Specials/>
    <Testimonial/>
    <TestimonialShow/> */}
    </>
  )
}

export default Base;