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
      <section className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto mt-10 md:mt-14">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Hostel Map & Dining Area Location
          </h2>
          <p className="mt-2 text-gray-600">
            Find out where the hostel dining area is located on campus.
          </p>

          {/* Google Map Embed */}
          <div className="mt-6 w-full h-72 md:h-[450px] rounded-lg overflow-hidden ">
            <iframe
              className="w-full h-full rounded-lg "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902119233826!2d90.38909951536334!3d23.750887294659596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAyLjMiTiA5MMKwMjMnMzIuNiJF!5e0!3m2!1sen!2sbd!4v1633791792796!5m2!1sen!2sbd"
              allowFullScreen=""
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
