import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaTruck } from "react-icons/fa";
import CONTACT_INFO from "../../../constants/contact";

const LocationCTA = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;
  const phoneUrl = `tel:${CONTACT_INFO.phone}`;

  return (
    <section className="section-padding bg-gradient-to-br from-brand-primary/5 via-background-light to-brand-secondary/5 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Location Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-2">
                Visit Our Shop
              </h2>
              <p className="text-text-muted">
                Come see us at our physical location in Jos, Plateau State.
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-sm border border-border p-6 space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brand-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-text">Our Location</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaTruck className="text-brand-secondary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-text">
                    Nationwide Delivery
                  </h4>
                  <p className="text-sm text-text-muted">
                    We deliver to all states in Nigeria.
                    {CONTACT_INFO.delivery.info}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex-1 min-w-[140px] justify-center"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
              <a
                href={phoneUrl}
                className="btn-secondary flex-1 min-w-[140px] justify-center"
              >
                <FaPhone />
                Call Us
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Behind+former+Umah+Bread+Junction,+Jos,+Plateau+State,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent flex-1 min-w-[140px] justify-center"
              >
                <FaMapMarkerAlt />
                Get Directions
              </a>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-md border border-border overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCw7EAvWXUiHPni682j_Wlfme4-qsEjbrM&q=Behind+former+Umah+Bread+Junction,+along+New+Rayfield+Road,+Jos,+Plateau+State,+Nigeria`}
                  title="Naans Spring Enterprise Location"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* Floating info card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg border border-border p-4 max-w-[200px] hidden sm:block">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.postimg.cc/mgj4Lr2V/Naans-Springs.png"
                  alt="Naans Spring Enterprise Logo"
                  className="h-10 w-auto"
                />
                <div>
                  <p className="text-xs font-semibold text-text">
                    Visit Us Today
                  </p>
                  <p className="text-xs text-text-muted">
                    {CONTACT_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationCTA;
