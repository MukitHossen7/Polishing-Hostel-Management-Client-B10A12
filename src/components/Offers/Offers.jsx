const Offers = () => {
  const offers = [
    {
      title: "Meal Plan Special",
      description:
        "Get a 15% discount on all meal plans when you book a stay for 7 days or more.",
      validity: "Valid till 30th April",
      image: "meal_plan_offer.jpg",
    },
    {
      title: "Group Discount",
      description:
        "Group bookings of 5 or more get a 20% discount on all food orders.",
      validity: "Valid till 31st March",
      image: "group_discount_offer.jpg",
    },
    {
      title: "Healthy Eating Promo",
      description:
        "Enjoy a free healthy breakfast for two when you book a meal plan.",
      validity: "Valid till 15th May",
      image: "healthy_eating_offer.jpg",
    },
    {
      title: "Stay & Dine Special",
      description:
        "Book your stay and get a complimentary dinner for two from our special menu.",
      validity: "Valid till 31st December",
      image: "stay_dine_offer.jpg",
    },
    {
      title: "Student Discount",
      description:
        "All students get 10% off on meal orders with valid student ID.",
      validity: "Valid all year round",
      image: "student_discount_offer.jpg",
    },
  ];

  return (
    <div>
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto mt-10 md:mt-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={offer.image}
                alt="Offer"
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{offer.title}</h3>
              <p className="text-gray-500">{offer.description}</p>
              <p className="text-lg font-semibold text-green-500">
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
