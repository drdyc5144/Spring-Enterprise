const ProductSort = ({ onSort, currentSort }) => {
  const sortOptions = [
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "price-asc", label: "Price (Low to High)" },
    { value: "price-desc", label: "Price (High to Low)" },
    { value: "popular", label: "Most Popular" },
  ];

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-sm text-text-muted">
        Sort by:
      </label>
      <select
        id="sort"
        value={currentSort}
        onChange={(e) => onSort(e.target.value)}
        className="px-3 py-2 rounded-lg border border-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm bg-white"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductSort;
