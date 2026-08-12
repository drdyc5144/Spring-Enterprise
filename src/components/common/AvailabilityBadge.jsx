const AvailabilityBadge = ({ available, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
        available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      } ${className}`}
      role="status"
      aria-label={available ? "In stock" : "Out of stock"}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          available ? "bg-green-500" : "bg-red-500"
        }`}
        aria-hidden="true"
      />
      {available ? "Available" : "Unavailable"}
    </span>
  );
};

export default AvailabilityBadge;
