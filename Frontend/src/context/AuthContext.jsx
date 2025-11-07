import React, { createContext, useState, useEffect } from "react";
import { getToken, clearToken as clearTokenStorage } from "../utils/auth";

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());

  const logout = () => {
    clearTokenStorage();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
