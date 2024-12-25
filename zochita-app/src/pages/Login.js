import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Home.css';

function Login() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
  });

  const navigate = useNavigate();  // Create navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data submitted: ", formData);
    alert('Logged in successfully');
    
    // Navigate to TodoApp page after login
    navigate('/todo');  // Redirect to TodoApp
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-100 text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">ZOCHITA APP</h1>
        <p className="text-center mb-6"><i>Sign in to start your session</i></p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
