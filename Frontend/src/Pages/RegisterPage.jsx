
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";
import { Eye, EyeOff } from "lucide-react";

// Utility: Unregister service worker to avoid cache issues
const unregisterServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (let registration of registrations) {
      await registration.unregister();
    }
  }
};

// Utility: Fetch with retry logic for network resilience
const fetchWithRetry = async (url, options = {}, retries = 3, delay = 1000) => {
  let attempt = 0;
  while (attempt < retries) {
    try {
      const response = await api.post(url, options.data);
      return response;
    } catch (error) {
      attempt++;
      if (attempt >= retries) throw error;
      await new Promise((res) => setTimeout(res, delay));
      delay *= 2; // Exponential backoff
    }
  }
};

const RegistrationPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    // Unregister service worker on mount to avoid cache issues
    unregisterServiceWorker();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const fullName = form.fullName.trim();
    const email = form.email.trim().toLowerCase();
    const contactNumber = form.contactNumber.trim();

    if (!fullName) {
      setError("Full name is required.");
      return;
    }
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!contactNumber) {
      setError("Contact number is required.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!/^\d{10}$/.test(contactNumber)) {
      setError("Contact number must be 10 digits");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const response = await fetchWithRetry("/register", {
        data: {
          fullName,
          email,
          contactNumber,
          password: form.password,
        },
      });

      setForm({
        fullName: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
      });
      setSuccess(response.data?.message || "Registration successful. Redirecting to sign in...");
      setTimeout(() => navigate("/signup"), 1400);
    } catch (err) {
      const status = err.response?.status;
      const data = err.response?.data;

      if (!status) {
        setError("Network error: could not reach the server.");
      } else if (data?.message) {
        setError(data.message);
      } else {
        setError(`Server error${status ? ` (${status})` : ""}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 p-4 mt-[5vh]">
      <div className="flex flex-col sm:flex-row w-full max-w-5xl h-auto sm:h-[640px] rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative sm:w-1/2 w-full bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 flex flex-col justify-between p-8 sm:p-10 text-white">
          {/* Decorative Circles */}
          <div className="absolute top-10 right-20 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 blur-sm"></div>
          <div className="absolute bottom-20 left-10 w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-60 blur-md"></div>
          <div className="absolute top-32 left-28 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-50 blur-lg"></div>
          <div className="absolute bottom-10 right-10 w-12 sm:w-16 h-12 sm:h-16 bg-pink-400 rounded-full opacity-40"></div>
          <div className="absolute top-4 left-4 z-20 flex items-center gap-3">
            <img
              src="Graphura.jpg"
              alt="Graphura Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full"
            />
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center mt-16 sm:mt-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-wide drop-shadow-md">Register Portal Access</h1>
            <p className="text-base sm:text-lg text-gray-200 mb-2">Create your account.</p>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              Gain secure access to monitor intern performance, review feedback reports, and manage departmental evaluations seamlessly.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-12 py-8 sm:py-10 overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
              required
            />
            <input
              type="tel"
              name="contactNumber"
              value={form.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full pb-2 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 mt-4 sm:mt-6 disabled:opacity-50"
            >
              {loading ? "Registering..." : "REGISTER"}
            </button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/signup"
                  className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
