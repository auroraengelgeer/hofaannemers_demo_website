import { NavLink } from "react-router-dom";
import { PageHero } from "../components/content/PageHero";
import { Section } from "../components/ui/Section";

export function ThankYouPage() {
  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Bedankt"
        title="Uw aanvraag is ontvangen"
        copy="Deze optionele pagina kan later worden gebruikt na het verzenden van een formulier."
      />

      <Section title="We nemen zo snel mogelijk contact met u op.">
        <NavLink to="/" className="back-link">
          Terug naar home
        </NavLink>
      </Section>
    </div>
  );
}
