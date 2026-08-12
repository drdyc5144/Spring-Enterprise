import ProductCard from "./ProductCard";

const ProductGrid = ({
  products,
  loading = false,
  emptyMessage = "No products found",
  columns = null,
  onWhatsAppOrder,
}) => {
  if (loading) {
    return (
      <div className="product-grid">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="card animate-pulse"
            aria-label="Loading product"
          >
            <div className="bg-gray-200 aspect-square" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
              <div className="h-5 bg-gray-200 rounded w-1/4" />
              <div className="flex gap-2">
                <div className="h-9 bg-gray-200 rounded flex-1" />
                <div className="h-9 bg-gray-200 rounded flex-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-muted text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onWhatsAppOrder={onWhatsAppOrder}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
