import { NavLink } from "react-router-dom";

export function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.label} className="breadcrumbs__item">
          {item.to ? <NavLink to={item.to}>{item.label}</NavLink> : <span>{item.label}</span>}
          {index < items.length - 1 ? <span className="breadcrumbs__divider">/</span> : null}
        </span>
      ))}
    </nav>
  );
}
