import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import TodoApp from './pages/TodoApp';
import Help from './pages/Help'; // Import Help page
import Contacts from './pages/Contact'; // Import Contact page
import About from './pages/About'; // Import About Us page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Sign Up Route */}
        <Route path="/signup" element={<SignUp />} />
        
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        
        {/* TodoApp Route */}
        <Route path="/todo" element={<TodoApp />} />
        
        {/* Help Route */}
        <Route path="/help" element={<Help />} />
        
        {/* Contact Route */}
        <Route path="/contact" element={<Contacts />} />
        
        {/* About Us Route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
