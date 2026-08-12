import { Link } from "react-router-dom";
import { FaWhatsapp, FaEye } from "react-icons/fa";
import { formatPrice } from "../../utils/formatters";
import { WHATSAPP_NUMBER } from "../../constants/contact";
import AvailabilityBadge from "../common/AvailabilityBadge";

const ProductCard = ({ product, onWhatsAppOrder }) => {
  const {
    id,
    name,
    slug,
    description,
    price,
    image,
    available,
    category,
    featured,
  } = product;

  // Truncate description for card view
  const truncatedDescription =
    description.length > 60
      ? description.substring(0, 60) + "..."
      : description;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Naans Spring Enterprise,\n\nI am interested in ordering:\n\nProduct: ${name}\nPrice: ₦${price.toLocaleString()}\n\nPlease provide information about availability and delivery.\n\nThank you.`,
  )}`;

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    if (onWhatsAppOrder) {
      onWhatsAppOrder(product);
    }
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="card group flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      role="article"
      aria-label={`${name} - ${category}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        {image ? (
          <img
            src={image}
            alt={`${name} - ${category}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
            <span className="text-sm">No image</span>
          </div>
        )}

        {/* Featured Badge */}
        {featured && (
          <span className="absolute top-3 left-3 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Featured
          </span>
        )}

        {/* Availability Badge */}
        <div className="absolute top-3 right-3">
          <AvailabilityBadge available={available} />
        </div>

        {/* Category Label */}
        <span className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        {/* Name */}
        <h3 className="text-lg font-semibold text-text mb-1 line-clamp-1">
          <Link
            to={`/product/${slug}`}
            className="hover:text-brand-primary transition-colors"
          >
            {name}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-text-muted mb-3 line-clamp-2 flex-grow">
          {truncatedDescription}
        </p>

        {/* Price and Actions */}
        <div className="mt-auto">
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl font-bold text-brand-primary">
              ₦{price.toLocaleString()}
            </span>
            {product.sizes && product.sizes.length > 0 && (
              <span className="text-xs text-text-muted">
                / {product.sizes[0]}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {/* View Details Button */}
            <Link
              to={`/product/${slug}`}
              className="flex-1 btn-secondary text-sm px-3 py-2"
              aria-label={`View details for ${name}`}
            >
              <FaEye className="text-sm" />
              <span>View</span>
            </Link>

            {/* WhatsApp Order Button */}
            <button
              onClick={handleWhatsAppClick}
              disabled={!available}
              className={`flex-1 btn-whatsapp text-sm px-3 py-2 ${
                !available ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label={`Order ${name} on WhatsApp`}
            >
              <FaWhatsapp className="text-sm" />
              <span>Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
