import Banner from "../components/Banner";
import CategorySection from "../components/CategorySection";
import { CTA } from "../components/CTA";
import { FAQ } from "../components/FAQ";
import { Highlights } from "../components/Highlights";
import LatestListing from "../components/LatestListing";
import PetCards from "../components/PetCards";
import PetHeroes from "../components/PetHeroes";
import { Statistics } from "../components/Statistics";
import { Testimonials } from "../components/Testimonials";
import WhyAdopt from "../components/WhyAdopt";
import Loading from "./Loading";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategorySection />
      <LatestListing />
      <WhyAdopt />
      <PetHeroes />
      <Highlights />
      <Statistics />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;
