import React from "react";

function HowItWorks() {
  return (
    <div className="py-16 px-4 mt-[5vh]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">How It Works</h1>
        <p className="text-center text-gray-600 mb-12">
          Booking your auto-rickshaw ride is simple and fast
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-black">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Enter Your Destination</h3>
            <p className="text-gray-600">
              Simply enter your pickup and drop locations in the app
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-black">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Choose Your Rickshaw</h3>
            <p className="text-gray-600">
              See available rickshaws nearby and select your preferred driver
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-black">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Track & Enjoy Your Ride</h3>
            <p className="text-gray-600">
              Track your ride in real-time and reach your destination safely
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Auto-Sarathi?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold mb-1">Verified Drivers</h3>
                <p className="text-gray-600">All drivers are background-checked and trained</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold mb-1">Transparent Pricing</h3>
                <p className="text-gray-600">Know your fare upfront before you book</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold mb-1">Multiple Payment Options</h3>
                <p className="text-gray-600">Pay via cash, UPI, cards, or digital wallets</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold mb-1">24/7 Availability</h3>
                <p className="text-gray-600">Book rides anytime, day or night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
