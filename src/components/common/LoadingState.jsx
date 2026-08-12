const LoadingState = ({ message = "Loading...", className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-12 ${className}`}
    >
      <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
      <p className="mt-4 text-text-muted">{message}</p>
    </div>
  );
};

export default LoadingState;
