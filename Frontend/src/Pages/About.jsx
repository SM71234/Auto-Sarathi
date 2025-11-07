import React from "react";

function About() {
  return (
    <div className="py-16 px-4 mt-[5vh]">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Auto-Sarathi</h1>
        <p className="text-lg text-gray-600">
          We're revolutionizing urban transportation by making auto-rickshaw rides more accessible, reliable, and convenient for everyone.
        </p>
      </div>

      {/* Mission and Stats */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At Auto-Sarathi, we believe that transportation should be affordable, reliable, and accessible to all. We're bridging the gap between traditional auto-rickshaw services and modern technology to create a seamless experience for both riders and drivers.
          </p>
          <p className="text-gray-700">
            Our platform empowers drivers with better earning opportunities while providing passengers with transparent pricing, real-time tracking, and guaranteed availability.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-yellow-400 text-4xl mb-2">👥</div>
            <h3 className="text-3xl font-bold mb-1">50,000+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-yellow-400 text-4xl mb-2">🏆</div>
            <h3 className="text-3xl font-bold mb-1">25+</h3>
            <p className="text-gray-600">Cities Covered</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-yellow-400 text-4xl mb-2">🛡️</div>
            <h3 className="text-3xl font-bold mb-1">10,000+</h3>
            <p className="text-gray-600">Daily Rides</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-yellow-400 text-4xl mb-2">❤️</div>
            <h3 className="text-3xl font-bold mb-1">5,000+</h3>
            <p className="text-gray-600">Driver Partners</p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">👥</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Community First</h3>
            <p className="text-gray-600">
              We're committed to building a strong community of drivers and riders who support each other's success and safety.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Safety & Security</h3>
            <p className="text-gray-600">
              All our drivers are verified and trained. Every ride is tracked and monitored to ensure your safety and peace of mind.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">❤️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Social Impact</h3>
            <p className="text-gray-600">
              By choosing Auto-Sarathi, you're supporting local drivers and contributing to sustainable urban transportation solutions.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto mt-16 bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Growing Family</h2>
        <p className="text-gray-600 mb-6">
          Whether you're a rider looking for convenient transportation or a driver seeking better earning opportunities, Auto-Sarathi is here for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
            Start Riding
          </button>
          <button className="bg-white border-2 border-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-50 transition">
            Become a Driver
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
