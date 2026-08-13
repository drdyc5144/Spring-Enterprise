import { useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import FeaturedProducts from "./sections/FeaturedProducts";
import CategoriesSection from "./sections/CategoriesSection";
import WhyChooseUs from "./sections/WhyChooseUs";
import HowToOrder from "./sections/HowToOrder";
import LocationCTA from "./sections/LocationCTA";
import SkeletonLoader from "../../components/common/SkeletonLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading - remove this in V2.0 when you have real API
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds feels realistic

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="home-page">
        <SkeletonLoader type="hero" />
        <div className="section-padding">
          <SkeletonLoader type="product" count={4} />
        </div>
      </div>
    );
  }

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
