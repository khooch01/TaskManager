// src/pages/UserHomePage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/UserHomePage.css'; // Import CSS for styling
import Profile from '../components/Profile';

const UserHomePage = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState('home');

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    navigate('/login'); // Redirect to login page after logout
  };

  const renderContent = () => {
    switch (selectedContent) {
      case 'profile':
        return <ProfileContent />;
      case 'contact-us':
        return <ContactUsContent />;
      case 'about-us':
        return <AboutUsContent />;
      case 'terms-and-conditions':
        return <TermsAndConditionsContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Know Your Neighborhood</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="#" onClick={() => setSelectedContent('home')}>Home</Link></li>
          <li><Link to="#" onClick={() => setSelectedContent('profile')}>Profile</Link></li>
          <li><Link to="#" onClick={() => setSelectedContent('contact-us')}>Contact Us</Link></li>
          <li><Link to="#" onClick={() => setSelectedContent('about-us')}>About Us</Link></li>
          <li><Link to="#" onClick={() => setSelectedContent('terms-and-conditions')}>Terms and Conditions</Link></li>
          <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
        </ul>
      </nav>
      <div className="home-content">
        {renderContent()}
      </div>
    </div>
  );
};

const HomeContent = () => (
  <div className="home-content">
    <h1>Welcome to Know Your NeighborHood!</h1>

    {/* User Introduction */}
    <section className="user-introduction">
      <h2>Hello User</h2>
      <p>
        We're glad to have you here. This platform helps you stay connected with your neighborhood. Explore various features and make the most out of your experience.
      </p>
    </section>

    {/* Quick Links */}
    <section className="quick-links">
      <h2>Quick Links</h2>
      <ul>
        <li>
          <a href="/events">Upcoming Events</a>
        </li>
        <li>
          <a href="/community-forum">Community Forum</a>
        </li>
        <li>
          <a href="/local-news">Local News</a>
        </li>
        <li>
          <a href="/services">Local Services</a>
        </li>
      </ul>
    </section>

    {/* Tips and Guides */}
    <section className="tips-guides">
      <h2>Tips & Guides</h2>
      <p>
        Check out our latest tips and guides to help you get the most out of your neighborhood:
      </p>
      <ul>
        <li><a href="/guide/how-to-get-involved">How to Get Involved in Your Community</a></li>
        <li><a href="/guide/safety-tips">Safety Tips for Urban Living</a></li>
        <li><a href="/guide/local-gardening">Local Gardening: Tips and Tricks</a></li>
      </ul>
    </section>

    {/* User Feedback */}
    <section className="user-feedback">
      <h2>Your Feedback</h2>
      <p>
        We value your feedback. Let us know what you think about our platform and how we can improve:
      </p>
      <button>Give Feedback</button>
    </section>
  </div>
);

const ProfileContent = () => (
  <div className="profile-content">
    <Profile />
  </div>
);

const ContactUsContent = () => (
  <div className="contact-us-content">
    <h1>Contact Us</h1>
    <p>If you have any questions or feedback, please reach out to us:</p>
    <address>
      <p>Email: <a href="knowyourneighborhood:support@example.com">support@example.com</a></p>
      <p>Phone: +1-234-567-890</p>
      <p>Address: 1234 Wawasan University, Penang, Malaysia</p>
    </address>
    <p>We look forward to hearing from you!</p>
  </div>
);

const AboutUsContent = () => (
  <div className="about-us-container">
    <h1 className="page-title">About Us</h1>
    <p className="about-description">
      Welcome to our Know Your Neighborhood application! Our mission is to provide a user-friendly platform that simplifies task management and enhances productivity.
    </p>
    <p className="about-footer">Feel free to explore our application and make the most out of our features.</p>
  </div>
);

const TermsAndConditionsContent = () => (
  <div className="terms-and-conditions-container">
    <h1 className="page-title">Terms and Conditions</h1>
    <p className="terms-description">
      Welcome to our Know Your Neighborhood application! Please read these terms and conditions carefully before using our service.
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
  </div>
);

export default UserHomePage;
