
import React from 'react';
import './Nav.css'; // Import CSS for styling (optional)

const Navbar = () => {
  return (
  <>
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home">MyBrand</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
