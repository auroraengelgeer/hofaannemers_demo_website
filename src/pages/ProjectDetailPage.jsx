import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/content/Breadcrumbs";
import { CTASection } from "../components/content/CTASection";
import { Gallery } from "../components/content/Gallery";
import { projects } from "../data/projects";
import "../styles/pages/projects.css";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="detail-page">
        <div className="detail-card">
          <p className="eyebrow">Project niet gevonden</p>
          <h2>Deze dummy detailpagina bestaat nog niet.</h2>
          <Link className="back-link" to="/">
            Terug naar projecten
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="page-stack">
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Projecten", to: "/projecten" },
          { label: project.title }
        ]}
      />

      <section className="detail-page">
        <div className="detail-hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 18, 24, 0.15), rgba(12, 18, 24, 0.72)), url(${project.cover})` }}>
          <div className="detail-hero__content">
            <p className="eyebrow">{project.category}</p>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
          </div>
        </div>

        <div className="detail-layout">
          <aside className="detail-sidebar">
            <div className="detail-card">
              <h3>Projectinformatie</h3>
              <p>
                <strong>Locatie:</strong> {project.location}
              </p>
              <p>
                <strong>Jaar:</strong> {project.year}
              </p>
              <ul className="detail-stats">
                {project.stats.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="back-link" to="/projecten">
                Terug naar projecten
              </Link>
            </div>
          </aside>

          <div className="detail-content">
            <article className="detail-card">
              <h3>De uitdaging</h3>
              <p>{project.challenge}</p>
            </article>

            <article className="detail-card">
              <h3>Onze aanpak</h3>
              <p>{project.solution}</p>
            </article>

            <article className="detail-card">
              <h3>Het resultaat</h3>
              <p>{project.result}</p>
            </article>

            <article className="detail-card">
              <h3>Projectgalerij</h3>
              <Gallery images={project.gallery} title={`Galerij van ${project.title}`} />
            </article>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Volgende stap"
        title="Gebruik de detailpagina voor vertrouwen en verdieping"
        copy="In de live versie kun je hier extra beelden, een voor-en-na verhaal of een offerte-CTA toevoegen."
      />
    </div>
  );
}
