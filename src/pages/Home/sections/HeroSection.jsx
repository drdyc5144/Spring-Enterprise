import { Link } from "react-router-dom";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import CONTACT_INFO from "../../../constants/contact";
import Button from "../../../components/common/Button";

const HeroSection = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;

  return (
    <section className="relative bg-gradient-to-br from-brand-primary/10 via-white to-brand-secondary/5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-secondary rounded-full blur-3xl" />
      </div>

      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
              Welcome to Naans Spring Enterprise
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Quality Foodstuff,
              <span className="text-brand-primary block">
                {" "}
                Delivered With Care
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-text-muted max-w-lg leading-relaxed">
              Your trusted source for premium stock fish, soup ingredients,
              grains, and more. We bring the best of Nigerian foodstuff right to
              your doorstep with nationwide delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/shop">
                <Button variant="primary" size="lg" icon={<FaArrowRight />}>
                  Shop Products
                </Button>
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" icon={<FaWhatsapp />}>
                  Order on WhatsApp
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-brand-primary">10+</div>
                <div className="text-sm text-text-muted">Quality Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-primary">5</div>
                <div className="text-sm text-text-muted">Categories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-primary">📍</div>
                <div className="text-sm text-text-muted">
                  Nationwide Delivery
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-up lg:animate-none">
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center">
              {/* Fallback content if image doesn't load */}
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-2xl font-bold text-brand-primary mb-2">Quality Foodstuff</h3>
                <p className="text-text-muted">Stock Fish • Ogbono • Egusi • Crawfish • Kpomo • Beans • Palm Oil • Tuwo Rice</p>
              </div>
              <img
                src="https://i.postimg.cc/L570NrDF/hero-section.png"
                alt="Naans Spring Enterprise - Quality Foodstuff Products including Stock Fish, Ogbono, Egusi, Crawfish, Kpomo, Beans, Palm Oil and Tuwo Rice"
                className="w-full h-full object-cover absolute inset-0"
                loading="eager"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-[200px] z-10">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.postimg.cc/mgj4Lr2V/Naans-Springs.png"
                    alt="Naans Spring Enterprise Logo"
                    className="h-10 w-auto"
                  />
                  <div>
                    <p className="text-xs font-semibold text-text">
                      Trusted Since
                    </p>
                    <p className="text-sm font-bold text-brand-primary">2024</p>
                  </div>
                </div>
              </div>
              {/* Delivery badge */}
              <div className="absolute top-4 right-4 bg-brand-accent/95 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                🚚 Nationwide Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;