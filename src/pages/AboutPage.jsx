import { PageHero } from "../components/content/PageHero";
import { Section } from "../components/ui/Section";
import "../styles/pages/services.css";

export function AboutPage() {
  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Over ons"
        title="HOF AANNEMERS"
        copy="Hof Aannemers is een van de toonaangevende bouwbedrijven in de Randstad."
      />

      <Section
        eyebrow="Wie wij zijn"
        title="Persoonlijk, zorgvuldig en gericht op kwaliteit"
        copy="Wij zijn gespecialiseerd in luxe nieuwbouw, renovaties, uitbreidingen, badkamers, keukens en slimme huissystemen."
      >
        <ul className="feature-list">
          <li>Met onze turnkey Design en Build-service helpen wij klanten hun woningdromen te realiseren, van het eerste ontwerp tot de voltooiing van het project.</li>
          <li>Ons ervaren team begeleidt het hele planningsproces en zorgt voor een zorgeloze uitvoering.</li>
          <li>Onze vakmensen werken netjes en discreet, zodat klanten tijdens de werkzaamheden zo min mogelijk hinder ervaren.</li>
          <li>Hof Aannemers is uitgegroeid tot een van de belangrijkste design- en bouwbedrijven in de Randstad.</li>
        </ul>
      </Section>
    </div>
  );
}
