import HeroSection from "./sections/HeroSection";
import FeaturedProducts from "./sections/FeaturedProducts";
import CategoriesSection from "./sections/CategoriesSection";
import WhyChooseUs from "./sections/WhyChooseUs";
import HowToOrder from "./sections/HowToOrder";
import LocationCTA from "./sections/LocationCTA";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <WhyChooseUs />
      <HowToOrder />
      <LocationCTA />
    </div>
  );
};

export default Home;
