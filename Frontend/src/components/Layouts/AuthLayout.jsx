import React from 'react';

const AuthLayout = ({ children }) => {
  // Minimal layout for auth pages (no Navbar / Footer)
  return <div className="min-h-screen">{children}</div>;
};

export default AuthLayout;
