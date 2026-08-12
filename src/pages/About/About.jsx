import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaTruck,
  FaStar,
  FaHandshake,
  FaLeaf,
  FaStore,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SectionHeader from "../../components/common/SectionHeader";
import CONTACT_INFO from "../../constants/contact";

const About = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;

  const values = [
    {
      icon: FaStar,
      title: "Quality First",
      description:
        "We source only the best food products, ensuring premium quality for our customers.",
    },
    {
      icon: FaHandshake,
      title: "Trust & Integrity",
      description:
        "We build lasting relationships through honest business practices and reliable service.",
    },
    {
      icon: FaLeaf,
      title: "Fresh & Natural",
      description:
        "We prioritize fresh, natural products that maintain their authentic flavor and nutritional value.",
    },
    {
      icon: FaTruck,
      title: "Reliable Delivery",
      description:
        "We deliver nationwide with care, ensuring your orders arrive safely and on time.",
    },
  ];

  return (
    <div className="py-8 md:py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            About <span className="text-brand-primary">Naans Spring</span>{" "}
            Enterprise
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Your trusted partner for quality foodstuff in Jos, Plateau State,
            serving customers across Nigeria with excellence and care.
          </p>
        </div>

        {/* Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-text">
              Who We Are
            </h2>
            <div className="space-y-3 text-text-muted leading-relaxed">
              <p>
                Naans Spring Enterprise is a dedicated foodstuff business based
                in Jos, Plateau State. We specialize in providing high-quality
                food products to households, restaurants, and businesses across
                Nigeria.
              </p>
              <p>
                Founded with a vision to make quality foodstuff accessible to
                everyone, we carefully select our products to ensure they meet
                the highest standards of freshness and quality.
              </p>
              <p>
                Our commitment to excellence has made us a trusted name in the
                community, and we continue to expand our reach through
                nationwide delivery services.
              </p>
            </div>
            <Link to="/shop" className="btn-primary inline-flex">
              Explore Our Products
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/about/about-store.jpg"
                  alt="Naans Spring Enterprise - Quality Foodstuff Store"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg border border-border p-4 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                    NS
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text">
                      Established
                    </p>
                    <p className="text-sm font-bold text-brand-primary">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Sell */}
        <div className="bg-background-light rounded-2xl p-8 md:p-12 mb-16 border border-border">
          <SectionHeader
            title="What We Sell"
            subtitle="A diverse range of quality foodstuff for every need"
            alignment="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              "Stock Fish",
              "Ogbono",
              "Egusi",
              "Crawfish",
              "Kpomo",
              "Beans",
              "Palm Oil",
              "Tuwo Rice",
              "And More...",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-border p-4 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold mb-2">
                  {index + 1}
                </div>
                <p className="text-sm font-medium text-text">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do"
            alignment="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center group">
                  <div className="w-16 h-16 mx-auto rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-2xl group-hover:scale-110 transition-transform duration-300">
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-text mt-4 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Location & Delivery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-border p-6 md:p-8">
            <div className="flex items-start gap-4">
              <FaStore className="text-brand-primary text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-text mb-2">
                  Visit Our Shop
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
                <p className="text-sm text-text-muted mt-2">
                  <span className="font-medium text-text">Hours:</span>{" "}
                  {CONTACT_INFO.workingHours}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-border p-6 md:p-8">
            <div className="flex items-start gap-4">
              <FaTruck className="text-brand-secondary text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-text mb-2">
                  Nationwide Delivery
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  We deliver to all states in Nigeria. Our reliable delivery
                  service ensures your foodstuff reaches you safely and on time.
                </p>
                <p className="text-sm text-brand-primary font-medium mt-2">
                  ✓ Delivery available nationwide
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl p-8 md:p-12 text-center border border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
            Ready to Order?
          </h2>
          <p className="text-text-muted mb-6 max-w-lg mx-auto">
            Browse our products and place your order through WhatsApp. We're
            here to serve you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/shop" className="btn-primary">
              Browse Products
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <FaWhatsapp />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
