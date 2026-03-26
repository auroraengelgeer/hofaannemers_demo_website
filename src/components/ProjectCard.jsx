import { Link } from "react-router-dom";

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div
        className="project-card__image"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 18, 24, 0.08), rgba(12, 18, 24, 0.62)), url(${project.cover})` }}
      />

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.location}</span>
        </div>

        <h2>{project.title}</h2>
        <p>{project.summary}</p>

        <ul className="project-card__stats" aria-label={`Projectdetails van ${project.title}`}>
          {project.stats.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Link className="project-card__link" to={`/projecten/${project.slug}`}>
          Bekijk project
        </Link>
      </div>
    </article>
  );
}
