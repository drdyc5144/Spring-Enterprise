import { Link, NavLink, useLocation } from "react-router-dom";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import CONTACT_INFO from "../../constants/contact";
import { useEffect, useRef } from "react";

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isInitialMount = useRef(true);

  // Close menu on route change - only when isOpen is true
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

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
        className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className="fixed top-0 right-0 h-full w-72 bg-white z-[9999] md:hidden shadow-2xl"
        style={{
          animation: "slideInRight 0.3s ease-out",
        }}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
          aria-label="Close menu"
        >
          <FaTimes className="text-2xl text-text" />
        </button>

        {/* Menu content */}
        <div className="pt-16 px-6 h-full overflow-y-auto">
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
            className="btn-whatsapp w-full text-center flex items-center justify-center gap-2"
            onClick={onClose}
          >
            <FaWhatsapp className="text-xl" />
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Add keyframe animation */}
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default MobileMenu;