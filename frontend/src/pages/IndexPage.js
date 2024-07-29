import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../styles/IndexPage.css';

const IndexPage = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    const saveUserToDatabase = async () => {
      if (isAuthenticated && user) {
        console.log('User is authenticated:', user); // Debugging
        try {
          const response = await axios.post('https://6803-2001-f40-905-afd-3c54-cb9d-25c6-45c2.ngrok-free.app/api/users', {
            auth0Id: user.sub,
            name: user.name,
            email: user.email,
            picture: user.picture,
          });
          console.log('User saved successfully:', response.data); // Debugging
        } catch (error) {
          console.error('Error saving user to database:', error);
        }
      } else {
        console.log('User is not authenticated or user object is missing.');
      }
    };

    // Run the function if user is authenticated
    if (isAuthenticated && user) {
      saveUserToDatabase();
    }
  }, [isAuthenticated, user]);

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
