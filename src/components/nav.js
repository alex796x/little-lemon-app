import React from 'react';
import logo from '../assets/little-lemon-logo.png';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="Little Lemon Logo" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Log In</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
