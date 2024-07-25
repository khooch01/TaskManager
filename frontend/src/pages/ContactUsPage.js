// src/pages/ContactUsPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ContactUsPage.css';

const ContactUsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, please reach out to us:</p>
      <address>
        <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
        <p>Phone: +1-234-567-890</p>
        <p>Address: 1234 Main St, Anytown, USA</p>
      </address>
      <p>We look forward to hearing from you!</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default ContactUsPage;
