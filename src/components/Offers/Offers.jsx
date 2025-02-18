const Offers = () => {
  const offers = [
    {
      title: "Weekend Treat",
      description:
        "Get a 25% discount on selected meals every Friday and Saturday.",
      validity: "Limited time every weekend.",
      image: "https://i.ibb.co.com/rGz7FG47/new-years-eve-518032-1280.jpg",
    },
    {
      title: "Loyalty Rewards",
      description:
        "Order 10+ meals in a month and get a 50% discount on your next meal.",
      validity: "Valid throughout the year.",
      image: "https://i.ibb.co.com/fW8nLTq/spring-roll-6760871-1280.jpg",
    },
    {
      title: "Midnight Snack Deal",
      description: "Get a free small snack on any meal order after 10 PM.",
      validity: "Every night.",
      image: "https://i.ibb.co.com/tpJNmJbR/intro-1696965449.jpg",
    },
    {
      title: "Refer & Earn",
      description: "Refer a new student and both get a 20% discount.",
      validity: "Limited time offer.",
      image: "https://i.ibb.co.com/PGN30c0h/food-715542-1280.jpg",
    },
    {
      title: "Festive Special",
      description:
        "Enjoy a 30% discount on special festival menus (e.g., Ramadan, Puja, New Year).",
      validity: "During festive seasons.",
      image: "https://i.ibb.co.com/mVvKKkH3/firangi-4929031-1280.jpg",
    },
  ];

  return (
    <div>
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto mt-10 md:mt-14">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-4 transform hover:scale-105 transition duration-300"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-56 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                {offer.title}
              </h3>
              <p className="text-gray-600 mt-2">{offer.description}</p>
              <p className="text-lg font-semibold text-green-500 mt-4">
                {offer.validity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
