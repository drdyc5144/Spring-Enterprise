import {
  FaStar,
  FaTruck,
  FaWhatsapp,
  FaShieldAlt,
  FaHands,
} from "react-icons/fa";
import SectionHeader from "../../../components/common/SectionHeader";

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaStar,
      title: "Quality Products",
      description:
        "We source only the best food products, ensuring premium quality for our customers.",
      color: "text-brand-accent",
      bgColor: "bg-brand-accent/10",
    },
    {
      icon: FaTruck,
      title: "Nationwide Delivery",
      description:
        "We deliver to all states in Nigeria. Get your foodstuff delivered to your doorstep.",
      color: "text-brand-secondary",
      bgColor: "bg-brand-secondary/10",
    },
    {
      icon: FaWhatsapp,
      title: "Easy Ordering",
      description:
        "Order through WhatsApp with just a few taps. Simple, fast, and convenient.",
      color: "text-[#25D366]",
      bgColor: "bg-[#25D366]/10",
    },
    {
      icon: FaShieldAlt,
      title: "Trusted Service",
      description:
        "We are committed to providing reliable service and building lasting trust.",
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10",
    },
    {
      icon: FaHands,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We value every customer and their needs.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="section-padding bg-background-light">
      <div className="container-custom">
        <SectionHeader
          title="Why Choose Naans Spring Enterprise"
          subtitle="We are committed to providing quality foodstuff with exceptional service"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center group">
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${feature.bgColor} ${feature.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon />
                </div>
                <h3 className="font-semibold text-text mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
