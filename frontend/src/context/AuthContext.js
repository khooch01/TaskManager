// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import axiosInstance from '../api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            const response = await axiosInstance.post('/auth/login', null, {
                params: { username, password }
            });
            setUser(response.data); // Assuming response.data contains the user data
            return { success: true };
        } catch (error) {
            console.error('Login failed:', error);
            return { success: false, message: error.response?.data || 'Login failed' };
        }
    };

    const logout = () => {
        setUser(null);
        // Optionally, you could also call a logout API endpoint here
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
