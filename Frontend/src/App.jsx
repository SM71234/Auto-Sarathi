

// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Home from "./Pages/Home";
// import HowItWork from "./Pages/HowItWorks";
// import FareEstimation from "./Pages/FareEstimation";
// import SignInPage from './Pages/SignInPage';
// import RegistrationPage from './Pages/RegisterPage';

// import { getToken } from "./utils/auth";

// const ProtectedRoute = ({ children }) => {
//   const token = getToken();
//   if (!token) {
//     return <Navigate to="/signup" replace />;
//   }
//   return children;
// };


// function App() {
//   const token = getToken();

//   return (
//     <BrowserRouter>
//       {token && <Navbar />}

//      <Routes>
//   <Route path="/signup" element={<SignInPage />} />
//   <Route path="/register" element={<RegistrationPage />} />
//   <Route path="/" element={<ProtectedRoute>< SignInPage/></ProtectedRoute>} />
//   <Route path="/home" element={<Home />} />
//   <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
//   <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
//   <Route path="/work" element={<ProtectedRoute><HowItWork /></ProtectedRoute>} />
//   <Route path="/fareestimation" element={<ProtectedRoute><FareEstimation /></ProtectedRoute>} />
//   <Route path="*" element={<Navigate to={getToken() ? "/" : "/signup"} replace />} />
// </Routes>


//       {token && <Footer />}
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from "./components/Layouts/AuthLayout";
import MainLayout from "./components/Layouts/MainLayout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import HowItWork from "./Pages/HowItWorks";
import FareEstimation from "./Pages/FareEstimation";
import SignInPage from './Pages/SignInPage';
import RegistrationPage from './Pages/RegisterPage';
import Profile from "./Pages/Profile"; // ✅ Added Profile import

import { getToken } from "./utils/auth";

const ProtectedRoute = ({ children }) => {
  const token = getToken();
  if (!token) {
    return <Navigate to="/signup" replace />;
  }
  return children;
};

function App() {
  const token = getToken();

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth / Public routes — no Navbar/Footer */}
        <Route path="/signup" element={<AuthLayout><SignInPage /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><RegistrationPage /></AuthLayout>} />

        {/* Protected routes wrapped with MainLayout (has Navbar + Footer) */}
        <Route path="/" element={<ProtectedRoute><AuthLayout><SignInPage /></AuthLayout></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><MainLayout><Home /></MainLayout></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><MainLayout><About /></MainLayout></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><MainLayout><Contact /></MainLayout></ProtectedRoute>} />
        <Route path="/work" element={<ProtectedRoute><MainLayout><HowItWork /></MainLayout></ProtectedRoute>} />
        <Route path="/fareestimation" element={<ProtectedRoute><MainLayout><FareEstimation /></MainLayout></ProtectedRoute>} />

        {/* ✅ Added Profile route just like others */}
        <Route path="/profile" element={<ProtectedRoute><MainLayout><Profile /></MainLayout></ProtectedRoute>} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to={token ? "/" : "/signup"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
