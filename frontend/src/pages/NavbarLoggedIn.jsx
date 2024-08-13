import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';
import profilePic from '../assets/profilepic.jpg';
import cart from '../assets/cart.png';

const NavbarLoggedIn = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <img src={logo} alt="Company Logo" className="navbar-logo" />
                </div>
                <div className="navbar-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Customer Service</a></li>
                    </ul>
                </div>
                <div className="navbar-profile">
                    <a href="#">
                        <img src={profilePic} alt="Profile" className="profile-pic" />
                    </a>
                    <a href="#" className="cart-icon">
                        <img src={cart} alt="Cart" className="cart-pic" />
                    </a>
                </div>
            </nav>
        </>
    );
};

export default NavbarLoggedIn;