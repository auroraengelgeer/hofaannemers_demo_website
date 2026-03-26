import { NavLink } from "react-router-dom";
import { siteSettings } from "../../data/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="topbar">
          <span className="brand-mark">{siteSettings.siteName}</span>
          <div className="topbar__actions">
            <span className="topbar__cta">{siteSettings.tagline}</span>
            <NavLink to="/contact" className="call-pill">
              Bel ons
            </NavLink>
          </div>
        </div>

        <nav className="main-nav" aria-label="Primaire navigatie">
          {siteSettings.navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
