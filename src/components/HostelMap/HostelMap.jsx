import { useState } from "react";

const HostelMap = () => {
  const [location, setLocation] = useState(null);

  const handleFindHostel = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };
  return (
    <div>
      <section className="w-full px-4 py-12 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">
            📍 Hostel Map & Dining Area Location
          </h2>
          <p className="mt-2 text-gray-600">
            Find out where the hostel dining area is located on campus.
          </p>

          {/* Google Map Embed */}
          <div className="mt-6 w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Your+Hostel+Location"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Find My Hostel Button */}
          <button
            onClick={handleFindHostel}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            🔍 Find My Hostel
          </button>

          {/* Show User's Current Location */}
          {location && (
            <div className="mt-4 text-gray-700">
              <p>Your Location:</p>
              <p className="font-semibold">
                Latitude: {location.lat}, Longitude: {location.lng}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HostelMap;
