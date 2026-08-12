import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AvailabilityBadge from "../common/AvailabilityBadge";

const ProductGallery = ({ images, productName, availability }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Ensure we have at least one image
  const galleryImages =
    images && images.length > 0 ? images : ["/images/placeholder.jpg"];
  const hasMultiple = galleryImages.length > 1;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-square">
        <img
          src={galleryImages[currentImage]}
          alt={`${productName} - Image ${currentImage + 1}`}
          className="w-full h-full object-cover"
          loading="eager"
        />

        {/* Availability Overlay */}
        <div className="absolute top-4 right-4">
          <AvailabilityBadge available={availability} />
        </div>

        {/* Navigation Arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <FaArrowLeft className="text-text" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <FaArrowRight className="text-text" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
              {currentImage + 1} / {galleryImages.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {hasMultiple && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                currentImage === index
                  ? "border-brand-primary ring-2 ring-brand-primary/20"
                  : "border-transparent hover:border-brand-primary/50"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {currentImage === index && (
                <div className="absolute inset-0 bg-brand-primary/10" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
