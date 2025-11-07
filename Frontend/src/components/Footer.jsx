import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-black text-white pt-10 pb-4 px-4 md:px-20">
    <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-700 pb-8">
      <div className="mb-8 md:mb-0">
        <h2 className="text-2xl font-bold">
          <span className="text-yellow-400">Auto</span>-Sarathi
        </h2>
        <p className="mt-4 text-gray-300 max-w-xs">
          Making urban transportation accessible, reliable, and convenient for everyone through technology and innovation.
        </p>
        <div className="flex gap-3 mt-5">
          {/* Icon buttons if you want to add them */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div>
          <h5 className="font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/work" className="hover:text-yellow-400">How It Works</Link></li>
            <li><Link to="/fareestimation" className="hover:text-yellow-400">Fare Estimation</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Support</h5>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/help-center" className="hover:text-yellow-400">Help Center</Link></li>
            <li><Link to="/safety-guidelines" className="hover:text-yellow-400">Safety Guidelines</Link></li>
            <li><Link to="/terms" className="hover:text-yellow-400">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-yellow-400">Privacy Policy</Link></li>
            <li><Link to="/driver-support" className="hover:text-yellow-400">Driver Support</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Contact Info</h5>
          <ul className="space-y-2 text-gray-300">
            <li>
              <span className="inline-block w-5"><i className="fas fa-phone-alt"></i></span>
              +91 90197 95625
            </li>
            <li>
              <span className="inline-block w-5"><i className="fas fa-envelope"></i></span>
              <a href="mailto:support@auto-sarathi.com" className="hover:text-yellow-400">support@auto-sarathi.com</a>
            </li>
            <li>
              <span className="inline-block w-5"><i className="fas fa-map-marker-alt"></i></span>
              Sanjay Ghodawat University,<br /> Kolhapur<br /><span className="text-xs">Maharashtra, India</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center md:justify-between text-xs text-gray-400">
      <span>&copy; 2024 Auto-Sarathi. All rights reserved.</span>
      <div className="space-x-4 mt-2 md:mt-0">
        <Link to="/privacy" className="hover:text-yellow-400">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-yellow-400">Terms of Service</Link>
        <Link to="/cookie-policy" className="hover:text-yellow-400">Cookie Policy</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
