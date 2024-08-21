// AuthContext.js
import React, { createContext, useState, useContext } from "react";
import { luser } from "../components/apicall/Api";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const login = async (payload) => {
    try {
      const response = await luser(payload);
      if (response.Success) {
        const userData = {
          role: response.role, // Assuming response contains role
          name: response.name, // Assuming response contains username
        };

        // Store user data in local storage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Update state with user details
        setIsAuthenticated(true);
        setUserRole(response.role);
        setUserName(response.name);
        setUser(userData);

        // Navigate to the landing page
        navigate('/landingpage');
      } else {
        alert('Login failed: ' + response.Message.message);
      }
      return response;
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred: ' + error.message);
        throw new Error('Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('userData');

    // Reset state
    setIsAuthenticated(false);
    setUserRole(null);
    setUserName(null);
    setUser(null);

    // Optionally navigate to login page
    navigate('/');
  };

  return (
    <AuthContext.Provider
    value={{
      isAuthenticated,
      login,
      logout,
      userRole,
      userName,
      user,
    }}
  >
    {children}
  </AuthContext.Provider>
  );
};
