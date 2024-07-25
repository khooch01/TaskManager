import React from 'react';
import RegistrationForm from '../components/RegistrationForm'; // Adjust the path if necessary
import '../styles/LoginPage.css'; // Import the CSS file

const RegistrationPage = () => {
    return (
        <div className="registration-container">
            <h1>Register</h1>
            <RegistrationForm />
        </div>
    );
};

export default RegistrationPage;
