import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TermsAndConditionsPage.css'; // Import the CSS file

const TermsAndConditionsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="terms-and-conditions-container">
      <h1 className="page-title">Terms and Conditions</h1>
      <p className="terms-description">
        Welcome to our Know Your NeighborHood application! Please read these terms and conditions carefully before using our service.
      </p>
      <h2>1. Acceptance of Terms</h2>
      <p>You agree to comply with and be bound by these terms and conditions.</p>
      <h2>2. User Responsibilities</h2>
      <p>You are responsible for maintaining the confidentiality of your account and password.</p>
      <h2>3. Prohibited Uses</h2>
      <p>You may not use our application for any unlawful purpose.</p>
      <h2>4. Limitation of Liability</h2>
      <p>We are not liable for any damages arising from your use of our application.</p>
      <h2>5. Changes to Terms</h2>
      <p>We reserve the right to modify these terms and conditions at any time.</p>
      <h2>6. Contact Us</h2>
      <p>If you have any questions, please contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
      <button className="back-button" onClick={handleBack}>Back</button>
    </div>
  );
};

export default TermsAndConditionsPage;
