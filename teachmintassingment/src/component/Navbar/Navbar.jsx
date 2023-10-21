import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this CSS file for styling
import { BsPersonCircle } from "react-icons/bs";


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <Link to="/" className="logo">
      <div>
       <img src="data:image/png;base64,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" style={{width:"50px" , height:"50px"}} alt={"logo"}/>
      </div>
      </Link>
      <ul className={`nav-links ${isNavOpen ? 'open' : ''}`} onClick={()=>handleNavClick()}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="profile-options">
          <Link to="/profile"><BsPersonCircle w={"100px"} h="100px" color='black'/></Link>

        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
