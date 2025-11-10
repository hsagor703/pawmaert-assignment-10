import Banner from "../components/Banner";
import CategorySection from "../components/CategorySection";
import LatestListing from "../components/LatestListing";
import PetCards from "../components/PetCards";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategorySection />
      <LatestListing />
    </div>
  );
};

export default Home;
