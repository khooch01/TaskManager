// src/pages/IndexPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';


const IndexPage = () => {
  return (
    <div>
      <h2>Welcome to Know Your NeighborHood</h2>
      <p>This is your home page.</p>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
