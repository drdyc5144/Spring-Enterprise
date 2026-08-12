import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTruck,
  FaClock,
  FaFacebook,
} from "react-icons/fa";
import CONTACT_INFO from "../../constants/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;
  const phoneUrl = `tel:${CONTACT_INFO.phone}`;

  const quickLinks = [
    { to: "/shop", label: "Shop All Products" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQ" },
  ];

  const productCategories = [
    "Stock Fish",
    "Soup Ingredients",
    "Grains",
    "Oils",
    "Other Foodstuff",
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      url: whatsappUrl,
      label: "WhatsApp",
      color: "hover:text-[#25D366]",
    },
    {
      icon: FaFacebook,
      url: "https://web.facebook.com/naanswat.namang",
      label: "Facebook",
      color: "hover:text-[#1877F2]",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="https://i.postimg.cc/mgj4Lr2V/Naans-Springs.png"
                alt="Naans Spring Enterprise Logo"
                className="h-16 w-auto md:h-20"
              />
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted source for quality foodstuff in Jos, Plateau State.
              We deliver premium products nationwide with care and reliability.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-200 ${social.color} hover:bg-gray-700`}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/shop?category=${encodeURIComponent(category)}`}
                    className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm group"
              >
                <FaWhatsapp className="text-lg text-[#25D366] mt-0.5 flex-shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Phone */}
              <a
                href={phoneUrl}
                className="flex items-start gap-3 text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm group"
              >
                <FaPhone className="text-lg mt-0.5 flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start gap-3 text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm group"
              >
                <FaEnvelope className="text-lg mt-0.5 flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <FaMapMarkerAlt className="text-lg mt-0.5 flex-shrink-0 text-brand-accent" />
                <span>{CONTACT_INFO.address}</span>
              </div>

              {/* Delivery Info */}
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <FaTruck className="text-lg mt-0.5 flex-shrink-0 text-brand-secondary" />
                <div>
                  <span className="font-medium text-white">
                    Nationwide Delivery
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5">
                    We deliver to all states in Nigeria
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <FaClock className="text-lg mt-0.5 flex-shrink-0" />
                <span>{CONTACT_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
            <p className="text-gray-500">
              &copy; {currentYear}{" "}
              <span className="text-white font-medium">
                Naans Spring Enterprise
              </span>
              . All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-gray-500 text-xs">
              <Link
                to="/privacy"
                className="hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                to="/terms"
                className="hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
