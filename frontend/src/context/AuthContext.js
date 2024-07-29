import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { isAuthenticated, user: auth0User, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchUser = async () => {
      if (isAuthenticated && auth0User) {
        try {
          const token = await getAccessTokenSilently();
          const response = await axios.post('/api/users/login', {
            auth0Id: auth0User.sub,
            name: auth0User.name,
            email: auth0User.email,
            picture: auth0User.picture,
            lastLogin: new Date().toISOString()
          }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUser(response.data);
        } catch (error) {
          console.error('Login failed:', error);
        }
      }
    };

    fetchUser();
  }, [isAuthenticated, auth0User, getAccessTokenSilently]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
