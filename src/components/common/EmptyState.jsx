import React from "react";
import { FaBoxOpen } from "react-icons/fa";

const EmptyState = ({
  title = "No products found",
  message = "Try adjusting your search or filter criteria",
  actionText = "Clear Filters",
  onAction,
  icon = FaBoxOpen,
  className = "",
}) => {
  const Icon = icon;

  return (
    <div className={`text-center py-12 ${className}`}>
      <Icon className="text-5xl text-text-muted/30 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-text mb-2">{title}</h3>
      <p className="text-text-muted mb-6">{message}</p>
      {onAction && (
        <button onClick={onAction} className="btn-primary text-sm">
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
