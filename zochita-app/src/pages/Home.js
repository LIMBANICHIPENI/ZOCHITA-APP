import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Make sure the image path is correct
import logoImage from './images/Checkmark Logo.jpg';  // Example image path

const Home = () => {
  return (
    <div className="home-container">
      {/* Logo */}
      <div className="logo">
        <h1>ZOCHITA APP</h1>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="/about" className="nav-link">About Us</a>
        <a href="/help" className="nav-link">Help</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Image above the welcome statement */}
        <div className="image-container">
          <img src={logoImage} alt="Zochita Logo" className="logo-image" />
        </div>

        <h2>Welcome to Zochita App</h2>
        <h3>Beautiful day starts with a plan!</h3>
        <Link to="/signup">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
