import React from 'react';
import NavbarLoggedIn from './NavbarLoggedIn';
// import Footer from './Footer';
import bg from '../assets/bg-shoe.jpg';
import mencat from '../assets/mencat.jpg';
import womencat from '../assets/womencat.jpg';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <>
      <NavbarLoggedIn />
      <div className="homepage-container">
        <img src={bg} alt="Background Shoe" className="homepage-bg" />
        <div className="centered">
          Centered Content
        </div>
      </div>
      <div className="categories-container">
        <div className="category">
          <a href="#">
            <img src={mencat} alt="Men Category" className='category-image' />
            {/* <div className="centered">Men Category</div> */}
          </a>
        </div>
        <div className="category">
          <a href="#">
            <img src={womencat} alt="Women Category" className='category-image' />
            {/* <div className="centered">Women Category</div> */}
          </a>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
