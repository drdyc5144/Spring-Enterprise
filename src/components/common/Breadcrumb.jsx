import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Breadcrumb = ({ items, className = "" }) => {
  return (
    <nav
      className={`flex items-center gap-2 text-sm text-text-muted flex-wrap ${className}`}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={item.path} className="flex items-center gap-2">
            {index > 0 && (
              <FaChevronRight className="text-xs" aria-hidden="true" />
            )}

            {isLast ? (
              <span className="font-medium text-text" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-brand-primary transition-colors hover:underline"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
