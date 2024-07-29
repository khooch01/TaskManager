import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const LoginForm = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginWithRedirect({
      redirectUri: ""
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <button type="submit">Login with Auth0</button>
      </div>
    </form>
  );
};

export default LoginForm;
