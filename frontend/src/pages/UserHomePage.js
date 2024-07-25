// src/pages/UserHomePage.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const UserHomePage = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div>
      <h1>Welcome to Your Home Page!</h1>
      <nav>
        <ul>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserHomePage;
