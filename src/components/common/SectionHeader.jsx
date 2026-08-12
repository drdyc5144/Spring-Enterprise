import React from "react";

const SectionHeader = ({
  title,
  subtitle,
  alignment = "center",
  className = "",
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      className={`mb-8 md:mb-12 ${alignmentClasses[alignment]} ${className}`}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p
          className="section-subtitle mx-auto"
          style={{
            marginLeft: alignment === "center" ? "auto" : "0",
            marginRight: alignment === "center" ? "auto" : "0",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
