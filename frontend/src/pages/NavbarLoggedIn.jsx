import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const NavbarLoggedIn = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Company Logo" className="navbar-logo" />
      <div className="navbar-links">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Customer Service</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLoggedIn;
