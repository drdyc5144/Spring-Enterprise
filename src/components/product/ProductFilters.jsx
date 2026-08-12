import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const ProductFilters = ({
  categories,
  activeCategory,
  searchQuery,
  showAvailableOnly,
  onCategoryChange,
  onSearch,
  onAvailabilityToggle,
  onClearFilters,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-3 pl-12 rounded-lg border border-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-200 outline-none"
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted" />
        {searchQuery && (
          <button
            onClick={() => onSearch("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-text"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="md:hidden w-full btn-secondary text-sm"
      >
        {isExpanded ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Filters */}
      <div className={`${isExpanded ? "block" : "hidden md:block"}`}>
        <div className="bg-white rounded-lg border border-border p-4 space-y-4">
          {/* Categories */}
          <div>
            <h4 className="font-medium text-text mb-2">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-brand-primary text-white"
                      : "bg-gray-100 text-text hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <label className="flex items-center gap-2 text-sm text-text cursor-pointer">
              <input
                type="checkbox"
                checked={showAvailableOnly}
                onChange={onAvailabilityToggle}
                className="w-4 h-4 rounded border-border text-brand-primary focus:ring-brand-primary"
              />
              Show available only
            </label>

            {(activeCategory !== "All" || searchQuery || showAvailableOnly) && (
              <button
                onClick={onClearFilters}
                className="text-sm text-text-muted hover:text-brand-primary"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
