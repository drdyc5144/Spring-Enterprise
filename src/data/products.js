// Product data for Naans Spring Enterprise
// This data can be easily replaced with an API in future versions

export const products = [
  {
    id: 1,
    name: "Stock Fish Head",
    slug: "stock-fish-head",
    description:
      "Premium quality stock fish head, perfect for preparing rich fish soups and stews. Carefully selected and dried to preserve natural flavor.",
    category: "Stock Fish",
    price: 3500,
    image: "/images/products/stock-fish-head.jpg",
    images: [
      "/images/products/stock-fish-head-1.jpg",
      "/images/products/stock-fish-head-2.jpg",
    ],
    available: true,
    sizes: ["Small", "Medium", "Large"],
    weight: "500g - 2kg",
    featured: true,
    origin: "Imported",
    storage: "Store in cool dry place",
    preparation: "Soak in warm water for 2-3 hours before cooking",
  },
  {
    id: 2,
    name: "Stock Fish Ear",
    slug: "stock-fish-ear",
    description:
      "High-quality stock fish ear, known for its rich flavor and texture. Ideal for traditional Nigerian soups and stews.",
    category: "Stock Fish",
    price: 3000,
    image: "/images/products/stock-fish-ear.jpg",
    images: ["/images/products/stock-fish-ear-1.jpg"],
    available: true,
    sizes: ["Small", "Medium", "Large"],
    weight: "300g - 1.5kg",
    featured: false,
    origin: "Imported",
    storage: "Store in cool dry place",
  },
  {
    id: 3,
    name: "Stock Fish Flesh",
    slug: "stock-fish-flesh",
    description:
      "Premium stock fish flesh (body pieces), perfect for soups and stews. Rich in protein and natural flavor.",
    category: "Stock Fish",
    price: 4000,
    image: "/images/products/stock-fish-flesh.jpg",
    images: ["/images/products/stock-fish-flesh-1.jpg"],
    available: true,
    sizes: ["500g", "1kg", "2kg"],
    weight: "500g - 2kg",
    featured: true,
    origin: "Imported",
    storage: "Store in cool dry place",
  },
  {
    id: 4,
    name: "Ogbono",
    slug: "ogbono",
    description:
      "Premium quality dried ogbono seeds. Perfect for preparing traditional Nigerian ogbono soup. Rich in nutrients and flavor.",
    category: "Soup Ingredients",
    price: 2500,
    image: "/images/products/ogbono.jpg",
    images: ["/images/products/ogbono-1.jpg"],
    available: true,
    sizes: ["250g", "500g", "1kg"],
    weight: "250g - 1kg",
    featured: true,
    origin: "Local",
    storage: "Store in airtight container",
  },
  {
    id: 5,
    name: "Egusi",
    slug: "egusi",
    description:
      "High-quality melon seeds, ground and dried. Essential for preparing delicious Nigerian egusi soup. Rich in protein and healthy oils.",
    category: "Soup Ingredients",
    price: 3000,
    image: "/images/products/egusi.jpg",
    images: ["/images/products/egusi-1.jpg", "/images/products/egusi-2.jpg"],
    available: true,
    sizes: ["500g", "1kg", "2kg"],
    weight: "500g - 2kg",
    featured: true,
    origin: "Local",
    storage: "Store in cool dry place",
  },
  {
    id: 6,
    name: "Crawfish",
    slug: "crawfish",
    description:
      "Premium dried crayfish, finely ground. Adds rich flavor and nutrients to soups, stews, and sauces.",
    category: "Soup Ingredients",
    price: 4000,
    image: "/images/products/crawfish.jpg",
    images: ["/images/products/crawfish-1.jpg"],
    available: true,
    sizes: ["100g", "250g", "500g"],
    weight: "100g - 500g",
    featured: false,
    origin: "Local",
    storage: "Store in airtight container in refrigerator",
  },
  {
    id: 7,
    name: "Kpomo",
    slug: "kpomo",
    description:
      "Premium quality cow skin (kpomo). Perfect for adding texture and flavor to soups and stews. Cleaned and prepared for cooking.",
    category: "Other Foodstuff",
    price: 2500,
    image: "/images/products/kpomo.jpg",
    images: ["/images/products/kpomo-1.jpg"],
    available: true,
    sizes: ["500g", "1kg", "2kg"],
    weight: "500g - 2kg",
    featured: false,
    origin: "Local",
    storage: "Store in freezer",
  },
  {
    id: 8,
    name: "Beans",
    slug: "beans",
    description:
      "Premium quality Nigerian brown beans. Rich in protein and essential nutrients. Ideal for preparing beans porridge and other dishes.",
    category: "Grains",
    price: 2000,
    image: "/images/products/beans.jpg",
    images: ["/images/products/beans-1.jpg"],
    available: true,
    sizes: ["1kg", "2kg", "5kg"],
    weight: "1kg - 5kg",
    featured: false,
    origin: "Local",
    storage: "Store in cool dry place",
  },
  {
    id: 9,
    name: "Palm Oil",
    slug: "palm-oil",
    description:
      "Pure, unadulterated Nigerian palm oil. Rich in vitamin A and antioxidants. Perfect for cooking and food preparation.",
    category: "Oils",
    price: 3000,
    image: "/images/products/palm-oil.jpg",
    images: [
      "/images/products/palm-oil-1.jpg",
      "/images/products/palm-oil-2.jpg",
    ],
    available: true,
    sizes: ["750ml", "1.5L", "3L"],
    weight: "750ml - 3L",
    featured: true,
    origin: "Local",
    storage: "Store at room temperature away from sunlight",
  },
  {
    id: 10,
    name: "Tuwo Rice",
    slug: "tuwo-rice",
    description:
      "Premium rice flour specially processed for making tuwo (rice pudding). Perfect for traditional Nigerian dishes.",
    category: "Grains",
    price: 3500,
    image: "/images/products/tuwo-rice.jpg",
    images: ["/images/products/tuwo-rice-1.jpg"],
    available: true,
    sizes: ["1kg", "2kg", "5kg"],
    weight: "1kg - 5kg",
    featured: false,
    origin: "Local",
    storage: "Store in cool dry place",
  },
];

// Categories
export const categories = [
  "All",
  "Stock Fish",
  "Soup Ingredients",
  "Grains",
  "Oils",
  "Other Foodstuff",
];

// Helper functions
export const getProductBySlug = (slug) => {
  return products.find((product) => product.slug === slug);
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured);
};

export const getProductsByCategory = (category) => {
  if (category === "All" || !category) return products;
  return products.filter((product) => product.category === category);
};

export const getAvailableProducts = () => {
  return products.filter((product) => product.available);
};

export const searchProducts = (query) => {
  if (!query) return products;
  const searchTerm = query.toLowerCase().trim();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm),
  );
};

export const getProductCategories = () => {
  const uniqueCategories = [...new Set(products.map((p) => p.category))];
  return ["All", ...uniqueCategories];
};

export default products;
