import { FaWhatsapp, FaBox, FaTruck } from "react-icons/fa";
import SectionHeader from "../../../components/common/SectionHeader";
import CONTACT_INFO from "../../../constants/contact";

const HowToOrder = () => {
  const steps = [
    {
      icon: FaBox,
      title: "Choose Your Product",
      description:
        "Browse our catalogue and select the food products you need.",
      number: "1",
      color: "bg-brand-primary",
    },
    {
      icon: FaWhatsapp,
      title: "Order Through WhatsApp",
      description:
        "Click the WhatsApp button to place your order directly with us.",
      number: "2",
      color: "bg-[#25D366]",
    },
    {
      icon: FaTruck,
      title: "Confirm Payment & Delivery",
      description:
        "We'll process your order and deliver to your location nationwide.",
      number: "3",
      color: "bg-brand-accent",
    },
  ];

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="How To Order"
          subtitle="Getting your foodstuff is quick and easy with these simple steps"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connection line (hidden on mobile) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gray-200" />
          <div className="hidden md:block absolute top-16 left-1/2 right-1/6 h-0.5 bg-gray-200" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center group">
                {/* Step Number */}
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${step.color} flex items-center justify-center text-white text-xl font-bold shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.number}
                </div>

                {/* Icon inside number circle (alternative) */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon className="text-white text-2xl" />
                </div>

                <h3 className="font-semibold text-text mt-6 mb-2 text-lg">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg px-8 py-4"
          >
            <FaWhatsapp className="text-2xl" />
            Start Your Order Now
          </a>
          <p className="text-sm text-text-muted mt-3">
            🚚 Nationwide delivery available
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
