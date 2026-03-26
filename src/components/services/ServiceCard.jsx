import { NavLink } from "react-router-dom";

export function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div
        className="service-card__image"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 18, 24, 0.08), rgba(12, 18, 24, 0.6)), url(${service.image})` }}
      />
      <div className="service-card__body">
        <h3>{service.title}</h3>
        <p>{service.shortDescription}</p>
        <ul className="project-card__stats">
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <NavLink to={`/diensten/${service.slug}`} className="project-card__link">
          Meer over deze dienst
        </NavLink>
      </div>
    </article>
  );
}
