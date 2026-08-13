const SkeletonLoader = ({ type = "product", count = 8 }) => {
  if (type === "product") {
    return (
      <div className="product-grid">
        {[...Array(count)].map((_, index) => (
          <div key={index} className="card animate-pulse">
            <div className="bg-gray-200 aspect-square rounded-t-xl" />
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

  if (type === "hero") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-pulse">
        <div className="space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/3" />
          <div className="h-16 bg-gray-200 rounded w-3/4" />
          <div className="h-24 bg-gray-200 rounded w-full" />
          <div className="flex gap-4">
            <div className="h-12 bg-gray-200 rounded w-32" />
            <div className="h-12 bg-gray-200 rounded w-32" />
          </div>
        </div>
        <div className="h-[500px] bg-gray-200 rounded-2xl" />
      </div>
    );
  }

  return null;
};

export default SkeletonLoader;
