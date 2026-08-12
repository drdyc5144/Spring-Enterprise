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
              {CONTACT_INFO.mapsLink && (
                <a
                  href={CONTACT_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent flex-1 min-w-[140px] justify-center"
                >
                  <FaMapMarkerAlt />
                  Get Directions
                </a>
              )}
            </div>
          </div>

          {/* Right Column - Map/Image */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-md border border-border overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                {CONTACT_INFO.mapsLink ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    {/* Placeholder - Replace with actual map embed or image */}
                    <div className="text-center p-8">
                      <FaMapMarkerAlt className="text-brand-primary text-5xl mx-auto mb-3" />
                      <p className="text-text-muted text-sm">
                        Find us in Jos, Plateau State
                      </p>
                      <a
                        href={CONTACT_INFO.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-primary text-sm font-medium hover:underline"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10">
                    <div className="text-center">
                      <FaMapMarkerAlt className="text-brand-primary text-5xl mx-auto mb-2 opacity-50" />
                      <p className="text-text-muted text-sm">
                        Map location coming soon
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating info card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg border border-border p-4 max-w-[200px] hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                  NS
                </div>
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
