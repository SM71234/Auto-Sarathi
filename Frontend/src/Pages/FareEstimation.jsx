import React, { useState } from "react";

function FareEstimation() {
  const [distance, setDistance] = useState("");
  const [fare, setFare] = useState(null);

  const calculateFare = () => {
    const dist = parseFloat(distance);
    if (dist && dist > 0) {
      const calculatedFare = 20 + dist * 12;
      setFare(calculatedFare);
    }
  };

  return (
    <div className="py-16 px-4 mt-[5vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Fare Estimation</h1>
        <p className="text-center text-gray-600 mb-12">
          Get an instant estimate of your rickshaw fare before you book.
        </p>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🧮</span>
            <h2 className="text-2xl font-bold">Calculate Your Fare</h2>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400">📍</span>
              <input
                type="number"
                placeholder="Enter distance in kilometers"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              />
            </div>
          </div>

          <button
            onClick={calculateFare}
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition mb-6"
          >
            Calculate Fare
          </button>

          {fare !== null && (
            <div className="bg-yellow-50 rounded-lg p-6 text-center">
              <p className="text-gray-600 mb-2">Estimated Fare</p>
              <p className="text-4xl font-bold text-black">₹{fare.toFixed(2)}</p>
            </div>
          )}

          {/* Fare Structure */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Fare Structure</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Base Fare:</span>
                <span className="font-semibold">₹20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Per Kilometer:</span>
                <span className="font-semibold">₹12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Waiting Charges:</span>
                <span className="font-semibold">₹2/min (after 5 min)</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * Actual fare may vary based on traffic conditions and route taken
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FareEstimation;
