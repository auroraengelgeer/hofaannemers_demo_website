import { NavLink } from "react-router-dom";

export function CTASection({ eyebrow, title, copy, buttonLabel = "Neem contact op", buttonTo = "/contact" }) {
  return (
    <section className="contact-strip">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
      <NavLink to={buttonTo} className="contact-strip__button">
        {buttonLabel}
      </NavLink>
    </section>
  );
}
