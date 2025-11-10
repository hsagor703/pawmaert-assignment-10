import Banner from "../components/Banner";
import CategorySection from "../components/CategorySection";
import LatestListing from "../components/LatestListing";
import PetCards from "../components/PetCards";
import PetHeroes from "../components/PetHeroes";
import WhyAdopt from "../components/WhyAdopt";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategorySection />
      <LatestListing />
      <WhyAdopt/>
      <PetHeroes/>
    </div>
  );
};

export default Home;
