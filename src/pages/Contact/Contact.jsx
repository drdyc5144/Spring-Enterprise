import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTruck,
  FaClock,
  FaFacebook,
} from "react-icons/fa";
import CONTACT_INFO from "../../constants/contact";

const Contact = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;
  const phoneUrl = `tel:${CONTACT_INFO.phone}`;
  const emailUrl = `mailto:${CONTACT_INFO.email}`;

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      description: "Chat with us directly",
      value: CONTACT_INFO.whatsapp,
      action: whatsappUrl,
      buttonText: "Chat on WhatsApp",
      buttonVariant: "whatsapp",
      color: "text-[#25D366]",
      bgColor: "bg-[#25D366]/10",
    },
    {
      icon: FaPhone,
      title: "Phone",
      description: "Give us a call",
      value: CONTACT_INFO.phone,
      action: phoneUrl,
      buttonText: "Call Us",
      buttonVariant: "secondary",
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      description: "Send us an email",
      value: CONTACT_INFO.email,
      action: emailUrl,
      buttonText: "Send Email",
      buttonVariant: "secondary",
      color: "text-brand-accent",
      bgColor: "bg-brand-accent/10",
    },
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      url: whatsappUrl,
      label: "WhatsApp",
      color: "text-[#25D366]",
    },
    {
      icon: FaFacebook,
      url: "https://web.facebook.com/naanswat.namang",
      label: "Facebook",
      color: "text-[#1877F2]",
    },
  ];

  return (
    <div className="py-8 md:py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Contact <span className="text-brand-primary">Us</span>
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            We're here to help! Reach out to us through any of our contact
            channels and we'll respond as quickly as possible.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.title}
                className="bg-white rounded-xl shadow-sm border border-border p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${method.bgColor} ${method.color} flex items-center justify-center text-3xl mb-4`}
                >
                  <Icon />
                </div>
                <h3 className="font-semibold text-text text-lg mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-text-muted mb-3">
                  {method.description}
                </p>
                <p className="text-sm font-medium text-text mb-4 break-all">
                  {method.value}
                </p>
                <a
                  href={method.action}
                  target={method.title === "Email" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`btn-${method.buttonVariant} w-full justify-center text-sm`}
                >
                  {method.buttonText}
                </a>
              </div>
            );
          })}
        </div>

        {/* Location & Delivery Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-brand-primary text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-text mb-3">
                    Visit Our Shop
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-text-muted">
                      <FaClock className="text-brand-primary" />
                      <span>{CONTACT_INFO.workingHours}</span>
                    </div>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Behind+former+Umah+Bread+Junction,+Jos,+Plateau+State,+Nigeria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-primary font-medium hover:underline mt-2"
                    >
                      <FaMapMarkerAlt />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Google Map */}
            <div className="h-48 bg-gray-200 relative">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=Behind+former+Umah+Bread+Junction,+along+New+Rayfield+Road,+Jos,+Plateau+State,+Nigeria`}
                title="Naans Spring Enterprise Location"
              />
            </div>
          </div>

          {/* Delivery Info Card */}
          <div className="bg-white rounded-xl shadow-sm border border-border p-6 md:p-8">
            <div className="flex items-start gap-4">
              <FaTruck className="text-brand-secondary text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-text mb-3">
                  Nationwide Delivery
                </h3>
                <div className="space-y-3 text-text-muted">
                  <p className="leading-relaxed">
                    {CONTACT_INFO.delivery.info}
                  </p>
                  <div className="bg-background-light rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Delivery to all 36 states + FCT</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Secure packaging for all orders</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Track your order status</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Flexible delivery options</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-brand-primary">
                    Place your order today and we'll deliver to your location!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl p-8 md:p-12 text-center border border-border">
          <h3 className="text-2xl font-bold text-text mb-2">Connect With Us</h3>
          <p className="text-text-muted mb-6">
            Follow us on social media for updates and promotions
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const isActive = social.url !== "#";
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-xl transition-all duration-200 ${
                    isActive
                      ? `${social.color} hover:scale-110 hover:shadow-md`
                      : "text-gray-300 cursor-not-allowed opacity-50"
                  }`}
                  aria-label={social.label}
                  onClick={(e) => !isActive && e.preventDefault()}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* Primary CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg px-8 py-4 inline-flex items-center gap-2"
          >
            <FaWhatsapp className="text-2xl" />
            Chat With Us on WhatsApp
          </a>
          <p className="text-sm text-text-muted mt-4">
            We usually respond within minutes on WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
