import { PageHero } from "../components/content/PageHero";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import { Section } from "../components/ui/Section";
import { projects } from "../data/projects";
import "../styles/pages/projects.css";

export function ProjectsPage() {
  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Projecten"
        title="Projecten"
        copy="Een overzichtspagina van projecten die Hof Aannemers heeft uitgevoerd."
      />

      <Section>
        <ProjectGrid projects={projects} />
      </Section>
    </div>
  );
}
