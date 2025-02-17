import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import MealsCategory from "../../components/MealsCategory/MealsCategory";
import MembershipSection from "../../components/MembershipSection/MembershipSection";
import WeeklyMealPlan from "../../components/WeeklyMealPlan/WeeklyMealPlan";
import HostelMap from "../../components/HostelMap/HostelMap";
import MeetOurChefs from "../../components/MeetOurChefs/MeetOurChefs";

const Home = () => {
  return (
    <div className="pb-14">
      <Helmet>
        <title>Home || Hostel Management</title>
      </Helmet>
      <Banner></Banner>
      <MembershipSection></MembershipSection>
      <MealsCategory></MealsCategory>
      <WeeklyMealPlan></WeeklyMealPlan>
      <HostelMap></HostelMap>
      <MeetOurChefs></MeetOurChefs>
    </div>
  );
};

export default Home;
