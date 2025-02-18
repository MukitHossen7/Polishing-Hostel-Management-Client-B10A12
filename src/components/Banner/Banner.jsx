import bannerImg from "../../../src/assets/images/slider-2.jpg";

const Banner = () => {
  return (
    <section className="relative bg-gray-100 h-[300px] md:h-[550px]">
      {/* Background Image */}
      <div
        className="absolute inset-0  w-full h-full"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundOrigin: "center",
          //   backgroundAttachment: "fixed",
          backgroundClip: "border-box",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-800 bg-opacity-65"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 space-y-5 h-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Welcome to the <br></br> Hostel Management
        </h1>
        <p className="text-base md:text-lg lg:text-xl md:max-w-xl  lg:max-w-2xl text-gray-100">
          Easily manage student meals, reviews, and requests efficiently in your
          university hostel.
        </p>
      </div>
    </section>
  );
};

export default Banner;
