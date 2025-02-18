import { Helmet } from "react-helmet-async";

const ChefsStaff = () => {
  const team = [
    {
      name: "Chef Rahim",
      image: "https://i.ibb.co.com/vvC3vxnK/chef-rahim-whom-responsible.jpg",
      role: "Head Chef",
      description: "Expert in traditional and modern cuisine.",
    },
    {
      name: "Chef Ayesha",
      role: "Pastry Chef",
      image: "https://i.ibb.co.com/cX6NPRGK/images-24.jpg",
      description: "Creates delicious desserts and baked goods.",
    },
    {
      name: "Chef Karim",
      role: "Sous Chef",
      image: "https://i.ibb.co.com/PvmPFpS3/images-25.jpg",
      description: "Ensures every meal is cooked to perfection.",
    },
    {
      name: "John Doe",
      role: "Kitchen Manager",
      image: "https://i.ibb.co.com/LBRJ0sC/testy3-1.png",
      description: "Oversees kitchen operations and food quality.",
    },
    {
      name: "Sarah Ali",
      role: "Nutritionist",
      image: "https://i.ibb.co.com/mFzLcvqL/1647172882729.jpg",
      description: "Ensures balanced and healthy meals for students.",
    },
    {
      name: "Michael Khan",
      role: "Assistant Chef",
      image: "https://i.ibb.co.com/4kHTDYH/images-26.jpg",
      description: "Helps in meal preparation and quality control.",
    },
    {
      name: "Emily Smith",
      role: "Head Waitress",
      image: "https://i.ibb.co.com/S4hT4P7Z/1705792944281.jpg",
      description: "Manages food serving and hospitality.",
    },
    {
      name: "David Roy",
      role: "Maintenance Staff",
      image: "https://i.ibb.co.com/2YmypnRZ/1620811823983.jpg",
      description: "Keeps the kitchen and dining area clean and safe.",
    },
  ];
  return (
    <div>
      <section className="pt-8 pb-14 text-black w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <div className="text-center">
          <Helmet>
            <title>Chefs & Staff || Hostel Management</title>
          </Helmet>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Meet Our Chefs & Staff
          </h2>
          <p className="mt-2 text-gray-600">
            Get to know the talented chefs and staff members behind our
            delicious meals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {team.map((teams, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-6 text-center"
              >
                <img
                  src={teams?.image}
                  alt={teams?.name}
                  className="w-24 h-24 mx-auto object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">{teams?.name}</h4>
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  {teams?.role}
                </p>
                <p className="text-base">{teams?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefsStaff;
