import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear tokens, localStorage, etc.)
    console.log("User logged out");
    navigate("/signin"); // redirect to sign-in page after logout
  };

  // Temporary example data — replace with real user info later
  const user = {
    name: "Sankalp Misal",
    email: "sankalpmisal007@gmail.com",
    phone: "+91 9019795625",
    rides: [
      { id: 1, from: "MG Road", to: "Whitefield", fare: "₹250", date: "Nov 2, 2025" },
      { id: 2, from: "Indiranagar", to: "Koramangala", fare: "₹180", date: "Oct 28, 2025" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[12vh] px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
          Customer Profile
        </h1>

        {/* Personal Info */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Personal Information</h2>
          <div className="text-gray-700">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        </div>

        {/* Ride Details */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Your Rides</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-yellow-100">
                <tr>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">From</th>
                  <th className="px-4 py-2 border">To</th>
                  <th className="px-4 py-2 border">Fare</th>
                </tr>
              </thead>
              <tbody>
                {user.rides.map((ride) => (
                  <tr key={ride.id} className="text-center">
                    <td className="px-4 py-2 border">{ride.date}</td>
                    <td className="px-4 py-2 border">{ride.from}</td>
                    <td className="px-4 py-2 border">{ride.to}</td>
                    <td className="px-4 py-2 border">{ride.fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Logout Button */}
        <div className="text-center">
          <button
            onClick={handleLogout}
            className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-600 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
