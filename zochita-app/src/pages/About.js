import React from 'react';
import './About.css';
import developerImage from '../pages/images/zochita8.jpg'; // Path to the developer's image

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Zochita App is designed to help you plan your day efficiently. With features like task scheduling, 
        voice notes, and reminders, you can stay productive and organized effortlessly.
      </p>
      <p>
        Our mission is to empower individuals with simple tools that make life easier, one task at a time.
      </p>

      {/* Developer Section */}
      <div className="developer-section">
        <img src={developerImage} alt="Developer" className="developer-image" />
        <p className="developer-name"><i>Limbani Chipeni@2024</i></p>
      </div>
    </div>
  );
};

export default About;
