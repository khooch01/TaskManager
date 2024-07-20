// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h2>Welcome to Task Manager</h2>
            <p>This is your home page. Manage your tasks efficiently!</p>
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

export default HomePage;
