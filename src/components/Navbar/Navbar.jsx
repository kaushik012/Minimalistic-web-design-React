import React from 'react';

import './Navbar.css';
// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="app__navbar">
      <ul className="app__navbar-links">
        {/* <li className="nav__montserrat"><Link to="/home">Home</Link></li>
        <li className="nav__montserrat"><Link to="/products">Products</Link></li>
        <li className="nav__montserrat"><Link to="/services">Services</Link></li>
        <li className="nav__montserrat"><Link to="/about">About</Link></li>
        <li className="nav__montserrat"><Link to="/contact">Contact</Link></li> */}
        <li className="nav__montserrat"><a href="#home">Home</a></li>
        <li className="nav__montserrat"><a href="#products">Products</a></li>
        <li className="nav__montserrat"><a href="#service">Services</a></li>
        <li className="nav__montserrat"><a href="#about">About</a></li>
        <li className="nav__montserrat"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}
