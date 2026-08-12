import { useState, useMemo, useEffect } from "react";
import {
  products,
  getProductBySlug,
  getFeaturedProducts,
  getProductsByCategory,
  searchProducts,
  getAvailableProducts,
  categories,
} from "../data/products";

export const useProducts = () => {
  const [allProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [loading, setLoading] = useState(false);

  // Filter products based on category, search, and availability
  useEffect(() => {
    setLoading(true);

    let result = [...allProducts];

    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Filter by availability
    if (showAvailableOnly) {
      result = result.filter((p) => p.available);
    }

    setFilteredProducts(result);
    setLoading(false);
  }, [allProducts, activeCategory, searchQuery, showAvailableOnly]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleAvailabilityToggle = () => {
    setShowAvailableOnly((prev) => !prev);
  };

  const clearFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
    setShowAvailableOnly(false);
  };

  return {
    products: filteredProducts,
    allProducts,
    loading,
    activeCategory,
    searchQuery,
    showAvailableOnly,
    categories,
    handleSearch,
    handleCategoryChange,
    handleAvailabilityToggle,
    clearFilters,
    // Helper functions
    getProductBySlug: (slug) => getProductBySlug(slug),
    getFeaturedProducts: () => getFeaturedProducts(),
    getProductsByCategory: (category) => getProductsByCategory(category),
    searchProducts: (query) => searchProducts(query),
    getAvailableProducts: () => getAvailableProducts(),
  };
};

export default useProducts;
