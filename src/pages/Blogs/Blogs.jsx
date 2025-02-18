import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pt-8 pb-14">
      <Helmet>
        <title>Blogs || Hostel Management</title>
      </Helmet>
      <h1
        role="heading"
        className="text-center text-2xl md:text-3xl font-semibold text-gray-800"
      >
        Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {/* Blog 1 */}
        <div className="flex flex-col items-start gap-6">
          <div className="w-full">
            <img
              src="https://i.ibb.co.com/C3kD676F/nadine-primeau-ft-Wfohtj-Nw-unsplash.jpg"
              alt="woman smiling"
              className="w-full h-64 lg:h-72 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              Healthy Eating in Hostels
            </h2>
            <p className="text-base mt-2 italic text-gray-600">
              Maintaining a balanced diet is key for hostel students. Learn
              about affordable healthy meals and meal planning tips.
            </p>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="flex flex-col items-start gap-6">
          <div className="w-full">
            <img
              src="https://i.ibb.co.com/W41dNPdK/premium-photo-1687697860923-2e4bb1220c82.jpg"
              alt="Smart Meal Management"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              Smart Meal Management
            </h2>
            <p className="text-base mt-2 italic text-gray-600">
              Discover how digital meal management improves student life,
              reduces food waste, and enhances dining experiences.
            </p>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="flex flex-col items-start gap-6">
          <div className="w-full">
            <img
              src="https://i.ibb.co.com/4GFWHY7/premium-photo-1736876605928-10b842860c13.jpg"
              alt="Budget-Friendly Meals"
              className="w-full h-64 lg:h-72 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              Budget-Friendly Meals
            </h2>
            <p className="text-base mt-2 italic text-gray-600">
              Explore five nutritious and affordable meal ideas that are easy to
              prepare for hostel students.
            </p>
          </div>
        </div>

        {/* Blog 4 */}
        <div className="flex flex-col items-start gap-6">
          <div className="w-full">
            <img
              src="https://i.ibb.co.com/Cs8CLxwv/premium-photo-1723795350625-5ffd570cd01b.jpg"
              alt="Time Management Hacks"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              Time Management Hacks
            </h2>
            <p className="text-base mt-2 italic text-gray-600">
              Learn the best time management strategies to balance studies,
              meals, and personal life in a hostel.
            </p>
          </div>
        </div>

        {/* Blog 5 */}
        <div className="flex flex-col items-start gap-6 lg:-mt-8">
          <div className="w-full">
            <img
              src="https://i.ibb.co.com/Kz8xpGjM/pexels-mart-production-8108019.jpg"
              alt="Quick & Healthy Snacks"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              Quick & Healthy Snacks
            </h2>
            <p className="text-base mt-2 italic text-gray-600">
              Check out five simple, healthy, and budget-friendly snack ideas
              for hostel students.
            </p>
          </div>
        </div>

        {/* Blog 6 */}
        <div className="flex flex-col items-start gap-6">
          <div className="w-full">
            <img
              src="https://i.ibb.co.com/gMfhYdkr/pexels-kristina-snowasp-81019562-9986235.jpg"
              alt="Cutting Food Waste"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              Cutting Food Waste
            </h2>
            <p className="text-base mt-2 italic text-gray-600">
              Find out how to reduce food waste in hostels through smart
              planning and proper food storage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
