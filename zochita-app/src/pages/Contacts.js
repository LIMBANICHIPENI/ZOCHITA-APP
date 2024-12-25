// Contact.js
import React from 'react';
import './Contacts.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Here's how you can reach us:</p>
      <ul>
        <li>Email: <a href="mailto:support@zochita.com">chipenilimbani@gmail.com</a></li>
        <li>Phone: +265 99 3053 020 OR +265 88 2060 190</li>
        <li>Address: University of Malawi, P/bag 280, Zomba</li>
      </ul>
    </div>
  );
};

export default Contact;
