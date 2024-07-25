import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AboutUsPage.css'; // Import the CSS file

const AboutUsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="about-us-container">
      <h1 className="page-title">About Us</h1>
      <p className="about-description">
        Welcome to our Know Your NeighborHood application! Our mission is to provide a user-friendly platform that simplifies task management and enhances productivity.
      </p>
      <p className="about-footer">Feel free to explore our application and make the most out of our features.</p>
      <button className="back-button" onClick={handleBack}>Back</button>
    </div>
  );
};

export default AboutUsPage;
