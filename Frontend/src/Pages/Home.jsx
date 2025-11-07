import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Home() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const handleFindRickshaw = () => {
    alert("Finding rickshaw...");
  };

  return (
    <div className="mt-[5vh]">
      {/* Hero Section */}
      <section className="bg-yellow-400 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Book Your Rickshaw<br />in Seconds
          </h1>
          <p className="text-lg md:text-xl text-black mb-8 italic">
            Fast, reliable, and affordable auto-rickshaw rides at your fingertips. Get wherever you need to go with just a tap.
          </p>

          {/* Booking Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="text"
                placeholder="Drop location"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <button
              onClick={handleFindRickshaw}
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Find Rickshaw
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-yellow-300 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Quick Booking</h3>
            <p className="text-black">Book in under 30 seconds</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-300 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Fair Pricing</h3>
            <p className="text-black">Transparent, upfront costs</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-300 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Live Tracking</h3>
            <p className="text-black">Track your ride in real-time</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2">How do I book a rickshaw?</h3>
              <p className="text-gray-600">Simply enter your pickup and drop locations, choose your rickshaw, and confirm your booking. It's that easy!</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Can I cancel my booking?</h3>
              <p className="text-gray-600">You can cancel your booking free of charge up to 2 minutes after confirmation.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept cash, UPI, credit/debit cards, and digital wallets for your convenience.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">How are fares calculated?</h3>
              <p className="text-gray-600">Fares are calculated based on distance and time, with transparent pricing shown upfront before booking.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Is it safe to ride with Auto-Sarathi?</h3>
              <p className="text-gray-600">Yes! All our drivers are verified, and every ride is tracked for your safety and security.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Do you operate 24/7?</h3>
              <p className="text-gray-600">Yes, Auto-Sarathi operates round the clock to ensure you can book a ride whenever you need one.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
