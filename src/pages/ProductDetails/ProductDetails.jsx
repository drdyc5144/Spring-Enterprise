import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaWhatsapp,
  FaArrowLeft,
  FaCheck,
  FaTruck,
  FaStore,
  FaWeight,
  FaBox,
} from "react-icons/fa";
import { useProducts } from "../../hooks/useProducts";
import AvailabilityBadge from "../../components/common/AvailabilityBadge";
import ProductGallery from "../../components/product/ProductGallery";
import CONTACT_INFO from "../../constants/contact";
import Breadcrumb from "../../components/common/Breadcrumb";

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getProductBySlug, products } = useProducts();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the product immediately
    const foundProduct = getProductBySlug(slug);
    setProduct(foundProduct || null);

    // Turn off loading immediately
    setLoading(false);
  }, [slug, getProductBySlug]);

  // Scroll to top on product change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const handleWhatsAppOrder = () => {
    if (!product) return;

    const message = `Hello Naans Spring Enterprise,

I am interested in ordering:

Product: ${product.name}
Price: ₦${product.price.toLocaleString()}

Please provide information about availability and delivery.

Thank you.`;

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (loading) {
    return (
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Skeleton */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-200 rounded-2xl animate-pulse" />
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
          
          {/* Content Skeleton */}
          <div className="space-y-6">
            <div className="flex gap-3">
              <div className="h-8 bg-gray-200 rounded-full w-24 animate-pulse" />
              <div className="h-8 bg-gray-200 rounded-full w-24 animate-pulse" />
            </div>
            <div className="h-12 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-10 bg-gray-200 rounded w-1/3 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse" />
            </div>
            <div className="h-14 bg-gray-200 rounded w-full animate-pulse" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-12 bg-gray-200 rounded animate-pulse" />
              <div className="h-12 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container-custom py-12 text-center">
        <h2 className="text-2xl font-bold text-text mb-4">Product Not Found</h2>
        <p className="text-text-muted mb-6">
          The product you're looking for doesn't exist.
        </p>
        <Link to="/shop" className="btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="py-8 md:py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Shop", path: "/shop" },
            {
              label: product.category,
              path: `/shop?category=${encodeURIComponent(product.category)}`,
            },
            { label: product.name, path: `/product/${product.slug}` },
          ]}
        />

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-6">
          {/* Left Column - Gallery */}
          <div>
            <ProductGallery
              images={product.images || [product.image]}
              productName={product.name}
              availability={product.available}
            />
          </div>

          {/* Right Column - Info */}
          <div className="space-y-6">
            {/* Category & Availability */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-brand-primary font-medium bg-brand-primary/10 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <AvailabilityBadge available={product.available} />
              {product.featured && (
                <span className="text-xs font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
                  ★ Featured
                </span>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-text">
              {product.name}
            </h1>

            {/* Price */}
            <div>
              <p className="text-3xl font-bold text-brand-primary">
                ₦{product.price.toLocaleString()}
              </p>
              {product.weight && (
                <p className="text-sm text-text-muted mt-1">
                  {product.weight} per unit
                </p>
              )}
            </div>

            {/* Description */}
            <div className="prose prose-sm max-w-none text-text-muted">
              <p className="leading-relaxed">{product.description}</p>
            </div>

            {/* Product Details */}
            <div className="space-y-3 border-t border-border pt-6">
              {product.storage && (
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium text-text">Storage:</span>
                  <span className="text-text-muted">{product.storage}</span>
                </div>
              )}
              {product.preparation && (
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium text-text">Preparation:</span>
                  <span className="text-text-muted">{product.preparation}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-4">
              <button
                onClick={handleWhatsAppOrder}
                disabled={!product.available}
                className={`w-full btn-whatsapp text-lg py-4 ${
                  !product.available ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FaWhatsapp className="text-2xl" />
                Order on WhatsApp
              </button>

              <div className="grid grid-cols-2 gap-3">
                <Link to="/shop" className="btn-secondary text-center">
                  <FaArrowLeft className="mr-2" />
                  Back to Shop
                </Link>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/${CONTACT_INFO.whatsapp}`,
                      "_blank",
                    )
                  }
                  className="btn-accent text-center flex items-center justify-center"
                >
                  <FaWhatsapp className="mr-2" />
                  Chat Now
                </button>
              </div>
            </div>

            {/* Delivery & Store Info */}
            <div className="bg-background-light rounded-lg p-4 space-y-3 border border-border">
              <div className="flex items-start gap-3">
                <FaTruck className="text-brand-secondary text-xl mt-0.5" />
                <div>
                  <h5 className="font-semibold text-text text-sm">
                    Nationwide Delivery
                  </h5>
                  <p className="text-xs text-text-muted">
                    We deliver to all states in Nigeria. Delivery fees apply
                    based on location.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaStore className="text-brand-primary text-xl mt-0.5" />
                <div>
                  <h5 className="font-semibold text-text text-sm">
                    Physical Shop
                  </h5>
                  <p className="text-xs text-text-muted">
                    {CONTACT_INFO.address.split(",")[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-border pt-12">
            <h3 className="text-2xl font-bold text-text mb-6">
              You Might Also Like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.slug}`}
                  className="group card hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-text group-hover:text-brand-primary transition-colors">
                      {relatedProduct.name}
                    </h4>
                    <p className="text-brand-primary font-bold mt-1">
                      ₦{relatedProduct.price.toLocaleString()}
                    </p>
                    <AvailabilityBadge
                      available={relatedProduct.available}
                      className="text-xs mt-2"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;