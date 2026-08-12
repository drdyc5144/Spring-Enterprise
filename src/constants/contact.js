export const CONTACT_INFO = {
  businessName: "Naans Spring Enterprise",
  whatsapp: "1238031574601", // Remove the + sign
  phone: "1238031574601",
  email: "danielnaanswat@gmail.com",
  address:
    "Behind former Umah Bread Junction, along New Rayfield Road, Mun Chogopyang, Jos, Jos South Local Government Area, Plateau State, Nigeria.",
  mapsLink: "https://goo.gl/maps/placeholder",
  socialMedia: {
    instagram: null,
    facebook: null,
    twitter: null,
  },
  delivery: {
    nationwide: true,
    info: "We deliver nationwide to all states in Nigeria. Delivery fees apply based on your location.",
  },
  workingHours: "Mon - Sat: 8:00 AM - 6:00 PM",
  whatsappMessage: (product, size) => {
    const sizeText = size ? `\nSize: ${size}` : "";
    return `Hello Naans Spring Enterprise,

I am interested in ordering:

Product: ${product.name}${sizeText}
Price: ₦${product.price.toLocaleString()}

Please provide information about availability and delivery.

Thank you.`;
  },
};

export const WHATSAPP_NUMBER = CONTACT_INFO.whatsapp;
export const PHONE_NUMBER = CONTACT_INFO.phone;
export const EMAIL = CONTACT_INFO.email;
export const ADDRESS = CONTACT_INFO.address;

export default CONTACT_INFO;
