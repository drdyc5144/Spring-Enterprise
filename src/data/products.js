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
    price: 10000,
    image: "https://i.postimg.cc/PJm32MXj/head.jpg",
    images: ["https://i.postimg.cc/PJm32MXj/head.jpg"],
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
    price: 10000,
    image: "https://i.postimg.cc/PrWzcx1B/ear.jpg",
    images: ["https://i.postimg.cc/PrWzcx1B/ear.jpg"],
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
    price: 8000,
    image: "https://i.postimg.cc/3Jfpzvdt/flesh.jpg",
    images: ["https://i.postimg.cc/3Jfpzvdt/flesh.jpg"],
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
    price: 18000,
    image: "https://i.postimg.cc/1thk9XYj/Egono.jpg",
    images: ["https://i.postimg.cc/1thk9XYj/Egono.jpg"],
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
    price: 2000,
    image: "https://i.postimg.cc/FsCshbb8/egusii.jpg",
    images: ["https://i.postimg.cc/FsCshbb8/egusii.jpg"],
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
    price: 10000,
    image: "https://i.postimg.cc/7PXWRKDJ/crafish.jpg",
    images: ["https://i.postimg.cc/7PXWRKDJ/crafish.jpg"],
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
    price: 1000,
    image: "https://i.postimg.cc/7ZLGVY9J/Kpomo.jpg",
    images: ["https://i.postimg.cc/7ZLGVY9J/Kpomo.jpg"],
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
    image: "https://i.postimg.cc/Fs05BjW1/beans.jpg",
    images: ["https://i.postimg.cc/Fs05BjW1/beans.jpg"],
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
    price: 60000,
    image: "https://i.postimg.cc/qRBvk1Fw/oil.jpg",
    images: ["https://i.postimg.cc/qRBvk1Fw/oil.jpg"],
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
    price: 1500,
    image: "https://i.postimg.cc/PfcmNDMJ/towu-riice.jpg",
    images: ["https://i.postimg.cc/PfcmNDMJ/towu-riice.jpg"],
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
