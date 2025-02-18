import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import MealsCategory from "../../components/MealsCategory/MealsCategory";
import MembershipSection from "../../components/MembershipSection/MembershipSection";
import WeeklyMealPlan from "../../components/WeeklyMealPlan/WeeklyMealPlan";
import HostelMap from "../../components/HostelMap/HostelMap";
import Facilities from "../../components/Facilities/Facilities";
import Offers from "../../components/Offers/Offers";

const Home = () => {
  return (
    <div className="pb-14">
      <Helmet>
        <title>Home || Hostel Management</title>
      </Helmet>
      <Banner></Banner>
      <MembershipSection></MembershipSection>
      <MealsCategory></MealsCategory>
      <Offers></Offers>
      <WeeklyMealPlan></WeeklyMealPlan>
      <Facilities></Facilities>
      <HostelMap></HostelMap>
    </div>
  );
};

export default Home;
