import { PageHero } from "../components/content/PageHero";
import { FaqList } from "../components/faq/FaqList";
import { Section } from "../components/ui/Section";
import { faqItems } from "../data/faq";
import "../styles/pages/faq.css";

export function FaqPage() {
  return (
    <div className="page-stack">
      <PageHero
        eyebrow="FAQ"
        title="FAQ"
        copy="Veelgestelde vragen over Hof Aannemers, projecten en werkwijze."
      />

      <Section>
        <FaqList items={faqItems} />
        <div className="inline-note">
          De live FAQ-pagina bevat op dit moment nauwelijks zichtbare toelichtende copy, daarom is deze React-versie compact gehouden.
        </div>
      </Section>
    </div>
  );
}
