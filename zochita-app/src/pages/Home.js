import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    
    <div className="home-container">
      <div className="logo">
        <h1>ZOCHITA APP</h1>
      </div>
      <div className="nav-links">
        <a href="/about" className="nav-link">About Us</a>
        <a href="/help" className="nav-link">Help</a>
        <a href="/contact" className="nav-link">Contact</a>
        <h2><i>Beautiful day starts with a plan!</i></h2>
      </div>
      <div className="get-started">
        <Link to="/signup">
        <button className="get-started-button">Get Started</button>
        </Link>
        
      </div>
    </div>
  );
};


export default Home;