// src/pages/IndexPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/IndexPage.css';

const IndexPage = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="index-page">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Know Your NeighborHood</h1>
        </div>
        <ul className="navbar-links">
          {isAuthenticated ? (
            <>
              <li>
                <span>Welcome, {user.name}</span>
              </li>
              <li>
                <button className="navbar-button" onClick={() => logout({ returnTo: window.location.origin })}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button className="navbar-button" onClick={() => loginWithRedirect()}>
                  Login / Register
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="welcome-content">
        <h2>Welcome to Know Your NeighborHood</h2>
        <p>This is your home page.</p>
      </div>
    </div>
  );
};

export default IndexPage;
