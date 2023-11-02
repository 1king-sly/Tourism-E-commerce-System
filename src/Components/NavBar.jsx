import React from 'react';
import './Navbar.css'; // Import your CSS file for styling if needed
import { Link } from "react-router-dom";



const Navbar  =()=> {
  return (
    <div className="navbar   " id='navbar' >
      <div className="logo">
        <img src="src/images/tujuane_logo-removebg-preview.png" alt="Logo" />
      </div>
      <div className='nav max-[485px]:hidden'>
      <nav>
      <ul className="nav-links">
        <li className="nav-item "><Link className='link' to="" href='#servicesOffered'>Home</Link></li>
        <li className="nav-item"><a href='#destination' to="">Destinations</a></li>
        <li className="nav-item"><a href='#services'>Trip Types</a></li>
        <li className="nav-item"><Link to="">Shop</Link></li>
        <li className="nav-item"><Link to="/blog">Blog</Link></li>
        <li className="nav-item"><a href='#contact'>Contact Us</a></li>
      </ul>
      </nav>
      </div>
    </div>
    

  );
};

export default Navbar;
