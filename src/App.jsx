
import React, { Component } from 'react';
// import React from 'react'
// import './App.css'
import Base from './pages/Base';
import About from './pages/About';
import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';
import Contact from './Components/Contact';
import Services from './Components/Services';
// import ServicesCard from './Components/ServicesCard.jsx';
import ServicesOffered from './Components/ServicesOffered';
// import Special from './Components/Special.jsx';
import Specials from './Components/Specials';
// import Testimonial from './Components/Testimonial.jsx';
import TestimonialShow from './Components/TestimonialShow';
// import TestimonialShow from './Components/TestimonialShow.jsx';
import Blog from './Components/Blog';

class App extends Component {
  render(){
  return (
    <>
      <Router>
        
        <div className='App'>
             {/* <Link to="/"></Link>
            <Link to="/signup"></Link>
            <Link to="/"></Link>  */}
        <Routes>
            {/* <Route exact path='/' element={<Header />}></Route> */}
            <Route exact path='/' element={<Base />}></Route>
                <Route exact path='/about' element={<About />}></Route>
                <Route exact path='/blog' element={<Blog />}></Route>
                <Route exact path='/contact' element={<Contact />}></Route>
                <Route exact path='/services' element={<Services />}></Route>
                <Route exact path='/services-offered' element={<ServicesOffered />}></Route>
                <Route exact path='/specials' element={<Specials />}></Route>
                <Route exact path='/testimonialShow' element={<TestimonialShow />}></Route>
        </Routes> 
        </div>
      </Router>
    
    </>
    
  );
}
}

export default App;


