// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import TaskPage from './pages/TaskPage';
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
      redirectUri="https://ca52-2001-f40-905-afd-d5f8-d6df-2d96-cee.ngrok-free.app/home"
    >
      <AuthProvider>
        <TaskProvider>
          <Router>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/tasks" element={<TaskPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
              <Route path="/home" element={<UserHomePage />} />
              <Route path="/logout" element={<LoginPage />} /> {/* Add a route for logout */}
            </Routes>
          </Router>
        </TaskProvider>
      </AuthProvider>
    </Auth0Provider>
  );
}

export default App;
