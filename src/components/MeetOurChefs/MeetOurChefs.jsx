const MeetOurChefs = () => {
  const team = [
    {
      name: "Chef Rahim",
      role: "Head Chef",
      description: "Expert in traditional and modern cuisine.",
    },
    {
      name: "Chef Ayesha",
      role: "Pastry Chef",
      description: "Creates delicious desserts and baked goods.",
    },
    {
      name: "Chef Karim",
      role: "Sous Chef",
      description: "Ensures every meal is cooked to perfection.",
    },
    {
      name: "John Doe",
      role: "Kitchen Manager",
      description: "Oversees kitchen operations and food quality.",
    },
    {
      name: "Sarah Ali",
      role: "Nutritionist",
      description: "Ensures balanced and healthy meals for students.",
    },
    {
      name: "Michael Khan",
      role: "Assistant Chef",
      description: "Helps in meal preparation and quality control.",
    },
    {
      name: "Emily Smith",
      role: "Head Waitress",
      description: "Manages food serving and hospitality.",
    },
    {
      name: "David Roy",
      role: "Maintenance Staff",
      description: "Keeps the kitchen and dining area clean and safe.",
    },
  ];
  return (
    <div>
      <section className="w-full px-4 py-12 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">
            Meet Our Chefs & Staff
          </h2>
          <p className="mt-2 text-gray-600">
            Get to know the talented chefs and staff members behind our
            delicious meals.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-medium">{member.role}</p>
                <p className="mt-2 text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetOurChefs;
