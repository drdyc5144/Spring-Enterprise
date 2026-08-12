import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaWhatsapp } from "react-icons/fa";
import CONTACT_INFO from "../../constants/contact";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What products do you sell?",
      answer:
        "We sell a variety of quality foodstuff including Stock Fish (heads, ears, and flesh), Ogbono, Egusi, Crawfish, Kpomo, Beans, Palm Oil, and Tuwo Rice. We're constantly expanding our product range to serve you better.",
    },
    {
      question: "Do you deliver nationwide?",
      answer:
        "Yes! We deliver to all states in Nigeria. Our reliable delivery service ensures your foodstuff reaches you safely and on time, no matter where you are in the country.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Ordering is simple! Browse our products, select your items, and click the 'Order on WhatsApp' button. You'll be connected to us directly on WhatsApp where we'll confirm your order, provide pricing, and arrange delivery.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including bank transfers, mobile money, and cash on delivery (for local orders). Specific payment details will be provided when you place your order through WhatsApp.",
    },
    {
      question: "How much is delivery?",
      answer:
        "Delivery fees vary based on your location and the size of your order. We provide transparent pricing and will confirm delivery costs when you place your order. We aim to offer competitive and fair delivery rates.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery time depends on your location. For orders within Jos, we typically deliver within 24-48 hours. For other states, delivery usually takes 2-5 business days. We'll provide a specific timeframe when you place your order.",
    },
    {
      question: "Can I visit your physical shop?",
      answer:
        "Absolutely! We welcome customers at our physical shop located at: Behind former Umah Bread Junction, along New Rayfield Road, Mun Chogopyang, Jos, Jos South Local Government Area, Plateau State, Nigeria. We're open Monday to Saturday, 8:00 AM to 6:00 PM.",
    },
    {
      question: "Are your products fresh and quality guaranteed?",
      answer:
        "Yes! We take quality very seriously. All our products are carefully selected and sourced from trusted suppliers. We ensure proper storage and handling to maintain freshness and quality. Customer satisfaction is our top priority.",
    },
    {
      question: "Do you offer bulk purchasing or wholesale?",
      answer:
        "Yes, we accommodate bulk orders and wholesale purchases. Contact us through WhatsApp with your requirements, and we'll provide special pricing and arrangements for bulk orders.",
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer:
        "Customer satisfaction is important to us. If you're not satisfied with your order, please contact us immediately through WhatsApp. We'll work with you to resolve any issues and ensure you're happy with your purchase.",
    },
  ];

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;

  return (
    <div className="py-8 md:py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Frequently Asked{" "}
            <span className="text-brand-primary">Questions</span>
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Find answers to common questions about our products, ordering
            process, delivery, and more. Can't find what you're looking for?
            Contact us directly.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-border overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-semibold text-text text-sm md:text-base">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-brand-primary">
                      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 pb-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-text-muted text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl p-8 md:p-10 text-center border border-border">
            <h3 className="text-2xl font-bold text-text mb-3">
              Still Have Questions?
            </h3>
            <p className="text-text-muted mb-6 max-w-lg mx-auto">
              We're here to help! Reach out to us on WhatsApp and we'll respond
              as quickly as possible.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              <FaWhatsapp className="text-2xl" />
              Chat With Us
            </a>
            <p className="text-sm text-text-muted mt-3">
              We usually respond within minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
