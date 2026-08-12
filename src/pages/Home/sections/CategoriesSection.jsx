import { Link } from "react-router-dom";
import { FaFish, FaLeaf, FaSeedling, FaOilCan, FaBox } from "react-icons/fa";
import SectionHeader from "../../../components/common/SectionHeader";

const CategoriesSection = () => {
  const categories = [
    {
      name: "Stock Fish",
      icon: FaFish,
      description: "Premium stock fish heads, ears, and flesh",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      link: "/shop?category=Stock Fish",
    },
    {
      name: "Soup Ingredients",
      icon: FaLeaf,
      description: "Ogbono, Egusi, Crawfish, and more",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      link: "/shop?category=Soup Ingredients",
    },
    {
      name: "Grains",
      icon: FaSeedling,
      description: "Beans, Tuwo Rice, and other grains",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      link: "/shop?category=Grains",
    },
    {
      name: "Oils",
      icon: FaOilCan,
      description: "Pure Nigerian palm oil",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      link: "/shop?category=Oils",
    },
    {
      name: "Other Foodstuff",
      icon: FaBox,
      description: "Kpomo and other food items",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      link: "/shop?category=Other Foodstuff",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Browse Categories"
          subtitle="Find exactly what you need from our wide range of quality food products"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={category.link}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-6 text-center border border-border hover:-translate-y-1"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${category.bgColor} flex items-center justify-center text-2xl text-brand-primary group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon />
                </div>

                {/* Name */}
                <h3 className="font-semibold text-text mt-3 mb-1 group-hover:text-brand-primary transition-colors">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-text-muted line-clamp-2">
                  {category.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-3 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Browse →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
