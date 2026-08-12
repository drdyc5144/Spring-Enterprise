import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProductGrid from "../../../components/product/ProductGrid";
import SectionHeader from "../../../components/common/SectionHeader";
import { useProducts } from "../../../hooks/useProducts";

const FeaturedProducts = () => {
  const { getFeaturedProducts } = useProducts();
  const featuredProducts = getFeaturedProducts();

  // Only show first 4 featured products
  const displayProducts = featuredProducts.slice(0, 4);

  return (
    <section className="section-padding bg-background-light">
      <div className="container-custom">
        <SectionHeader
          title="Featured Products"
          subtitle="Discover our most popular foodstuff, carefully selected for quality and taste"
          alignment="center"
        />

        <ProductGrid
          products={displayProducts}
          onWhatsAppOrder={(product) => {
            // WhatsApp order handling
            const whatsappUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || "2348123456789"}?text=${encodeURIComponent(
              `Hello Naans Spring Enterprise,\n\nI am interested in ordering:\n\nProduct: ${product.name}\nPrice: ₦${product.price.toLocaleString()}\n\nPlease provide information about availability and delivery.\n\nThank you.`,
            )}`;
            window.open(whatsappUrl, "_blank");
          }}
        />

        <div className="text-center mt-10">
          <Link to="/shop">
            <button className="btn-secondary">
              View All Products
              <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
