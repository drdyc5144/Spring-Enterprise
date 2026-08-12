import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import ProductGrid from "../../components/product/ProductGrid";
import SectionHeader from "../../components/common/SectionHeader";
import AvailabilityBadge from "../../components/common/AvailabilityBadge";
import { useProducts } from "../../hooks/useProducts";
import CONTACT_INFO from "../../constants/contact";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const {
    products,
    loading,
    categories,
    activeCategory,
    searchQuery,
    showAvailableOnly,
    handleSearch,
    handleCategoryChange,
    handleAvailabilityToggle,
    clearFilters,
  } = useProducts();

  // Initialize from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && categories.includes(categoryParam)) {
      handleCategoryChange(categoryParam);
    }
  }, []);

  // Update URL when filters change
  useEffect(() => {
    const params = {};
    if (activeCategory !== "All") {
      params.category = activeCategory;
    }
    if (searchQuery) {
      params.search = searchQuery;
    }
    setSearchParams(params);
  }, [activeCategory, searchQuery, setSearchParams]);

  const handleWhatsAppOrder = (product) => {
    const message = `Hello Naans Spring Enterprise,

I am interested in ordering:

Product: ${product.name}
Price: ₦${product.price.toLocaleString()}

Please provide information about availability and delivery.

Thank you.`;

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container-custom">
        {/* Page Header */}
        <SectionHeader
          title="Our Products"
          subtitle="Browse our complete range of quality foodstuff"
          alignment="center"
        />

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-200 outline-none"
                aria-label="Search products"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted" />
              {searchQuery && (
                <button
                  onClick={() => handleSearch("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-text transition-colors"
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={toggleFilters}
              className="sm:hidden btn-secondary flex items-center justify-center gap-2 px-4 py-3"
            >
              <FaFilter />
              Filters
              {(activeCategory !== "All" || showAvailableOnly) && (
                <span className="w-2 h-2 bg-brand-primary rounded-full" />
              )}
            </button>

            {/* Desktop Filter Toggle */}
            <button
              onClick={toggleFilters}
              className="hidden sm:flex btn-secondary items-center gap-2 px-4 py-3"
              aria-label="Toggle filters"
            >
              <FaFilter />
              Filters
              {(activeCategory !== "All" || showAvailableOnly) && (
                <span className="w-2 h-2 bg-brand-primary rounded-full" />
              )}
            </button>
          </div>

          {/* Filters Panel */}
          {(showFilters || window.innerWidth >= 640) && (
            <div className="bg-white rounded-lg border border-border p-4 md:p-6 animate-fade-in">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  {/* Category Filters */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          activeCategory === category
                            ? "bg-brand-primary text-white shadow-md"
                            : "bg-gray-100 text-text hover:bg-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Availability Filter */}
                  <label className="flex items-center gap-2 text-sm text-text cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showAvailableOnly}
                      onChange={handleAvailabilityToggle}
                      className="w-4 h-4 rounded border-border text-brand-primary focus:ring-brand-primary focus:ring-2"
                    />
                    <span>Available only</span>
                  </label>

                  {/* Clear Filters */}
                  {(activeCategory !== "All" ||
                    searchQuery ||
                    showAvailableOnly) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-text-muted hover:text-brand-primary transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-text-muted">
            Showing{" "}
            <span className="font-semibold text-text">{products.length}</span>{" "}
            products
            {activeCategory !== "All" && (
              <span>
                {" "}
                in{" "}
                <span className="font-semibold text-text">
                  {activeCategory}
                </span>
              </span>
            )}
          </p>
          {products.length > 0 && (
            <AvailabilityBadge
              available={products.some((p) => p.available)}
              className="text-xs"
            />
          )}
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={products}
          loading={loading}
          onWhatsAppOrder={handleWhatsAppOrder}
          emptyMessage={
            <div className="py-12">
              <p className="text-lg text-text-muted mb-2">No products found</p>
              <p className="text-sm text-text-muted">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 btn-primary text-sm"
              >
                Clear Filters
              </button>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Shop;
