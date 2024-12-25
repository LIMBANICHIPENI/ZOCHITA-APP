// Help.js
import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <h1>Help</h1>
      <p>If you encounter issues, here are some quick tips:</p>
      <ul>
        <li>To add a task, enter the task details and click "Add Task".</li>
        <li>You can record a voice note by clicking "Start Recording".</li>
        <li>For troubleshooting, check your internet connection or reload the app.</li>
      </ul>
      <p>
        For further assistance, please contact us via the Contact page or email us at chipenilimbani@gmail.com.
      </p>
    </div>
  );
};

export default Help;
