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
    // Simulate loading for 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="home-page">
        {/* Hero Section Skeleton */}
        <div className="section-padding bg-gradient-to-br from-brand-primary/10 via-white to-brand-secondary/5">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-1/3" />
                <div className="h-16 bg-gray-200 rounded w-3/4" />
                <div className="h-24 bg-gray-200 rounded w-full" />
                <div className="flex gap-4">
                  <div className="h-12 bg-gray-200 rounded w-32" />
                  <div className="h-12 bg-gray-200 rounded w-32" />
                </div>
                <div className="flex gap-8">
                  <div className="h-10 bg-gray-200 rounded w-20" />
                  <div className="h-10 bg-gray-200 rounded w-20" />
                  <div className="h-10 bg-gray-200 rounded w-20" />
                </div>
              </div>
              <div className="h-[400px] bg-gray-200 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* Featured Products Skeleton */}
        <div className="section-padding bg-background-light">
          <div className="container-custom">
            <div className="text-center mb-8">
              <div className="h-10 bg-gray-200 rounded w-48 mx-auto mb-2 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
            </div>
            <SkeletonLoader type="product" count={4} />
            <div className="text-center mt-10">
              <div className="h-12 bg-gray-200 rounded w-40 mx-auto animate-pulse" />
            </div>
          </div>
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