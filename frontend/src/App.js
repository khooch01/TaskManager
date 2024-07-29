// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import UserHomePage from './pages/UserHomePage';
import IndexPage from './pages/IndexPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri="https://6803-2001-f40-905-afd-3c54-cb9d-25c6-45c2.ngrok-free.app/home"
    >
      <AuthProvider>
        <TaskProvider>
          <Router>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
              <Route path="/home" element={<UserHomePage />} />
              <Route path="/logout" element={<IndexPage />} /> {/* Add a route for logout */}
            </Routes>
          </Router>
        </TaskProvider>
      </AuthProvider>
    </Auth0Provider>
  );
}

export default App;
