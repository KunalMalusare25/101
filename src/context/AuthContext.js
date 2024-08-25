// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
// import { luser } from "../components/apicall/Api";
// import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setIsAuthenticated(true);
  }, [user]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,

        userRole,
        setUserRole,
        userName,
        setUserName,
        setUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
