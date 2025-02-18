import {
  FaWifi,
  FaUserShield,
  FaTshirt,
  FaBook,
  FaUsers,
  FaUtensils,
  FaShower,
  FaFirstAid,
  FaDumbbell,
  FaCar,
} from "react-icons/fa";

const Facilities = () => {
  const facilities = [
    { name: "24/7 Security", icon: <FaUserShield /> },
    { name: "Free Wi-Fi", icon: <FaWifi /> },
    { name: "Laundry Service", icon: <FaTshirt /> },
    { name: "Study Rooms", icon: <FaBook /> },
    { name: "Common Room", icon: <FaUsers /> },
    { name: "Cafeteria", icon: <FaUtensils /> },
    { name: "Hot Water Showers", icon: <FaShower /> },
    { name: "Medical Assistance", icon: <FaFirstAid /> },
    { name: "Gym & Fitness Center", icon: <FaDumbbell /> },
    { name: "Parking Area", icon: <FaCar /> },
  ];

  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
      {/* Hostel Overview & Facilities */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Hostel Overview & Facilities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center text-gray-700"
            >
              <span className="text-3xl text-blue-500 mb-2">
                {facility.icon}
              </span>
              <p className="font-medium">{facility.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Facilities;
