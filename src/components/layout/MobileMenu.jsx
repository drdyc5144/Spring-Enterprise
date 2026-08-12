import { Link, NavLink, useLocation } from "react-router-dom";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { CONTACT_INFO } from "../../constants/contact";
import { useEffect } from "react";

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [location, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQ" },
  ];

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className="fixed top-0 right-0 h-full w-72 bg-white z-50 md:hidden shadow-xl animate-slide-up"
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close menu"
        >
          <FaTimes className="text-2xl" />
        </button>

        {/* Menu content */}
        <div className="pt-16 px-6">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">
                NS
              </div>
              <div>
                <span className="text-lg font-bold text-brand-primary">
                  Naans Spring
                </span>
                <span className="block text-xs text-text-muted -mt-1">
                  Enterprise
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-brand-primary/10 text-brand-primary"
                      : "text-text hover:bg-gray-50 hover:text-brand-primary"
                  }`
                }
                onClick={onClose}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Divider */}
          <hr className="my-6 border-border" />

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full text-center"
            onClick={onClose}
          >
            <FaWhatsapp className="text-xl" />
            Order on WhatsApp
          </a>

          {/* Contact Info */}
          <div className="mt-6 space-y-2 text-sm text-text-muted">
            <p className="font-medium text-text">Contact Us:</p>
            <p>📞 {CONTACT_INFO.phone}</p>
            <p>📍 {CONTACT_INFO.address.split(",")[0]}</p>
            <p className="text-xs">Nationwide Delivery Available</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
