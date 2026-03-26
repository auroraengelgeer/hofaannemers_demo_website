import { NavLink } from "react-router-dom";
import { siteSettings } from "../../data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <nav className="site-footer__nav" aria-label="Footer navigatie">
        {siteSettings.navItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label.toUpperCase()}
          </NavLink>
        ))}
      </nav>

      <div className="site-footer__info">
        <span>{siteSettings.phone}</span>
        <span>{siteSettings.email}</span>
        <span>{siteSettings.address}</span>
      </div>

      <div className="site-footer__socials">
        {siteSettings.socials.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
            {social.label}
          </a>
        ))}
      </div>

      <p className="site-footer__copy">Hof Aannemers demo-opzet - 2026</p>
    </footer>
  );
}
