import { NavLink, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/content/Breadcrumbs";
import { CTASection } from "../components/content/CTASection";
import { PageHero } from "../components/content/PageHero";
import { Section } from "../components/ui/Section";
import { services } from "../data/services";
import "../styles/pages/services.css";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="page-stack">
        <Section eyebrow="Niet gevonden" title="Deze dienst bestaat nog niet in de demo">
          <NavLink to="/diensten" className="back-link">
            Terug naar diensten
          </NavLink>
        </Section>
      </div>
    );
  }

  return (
    <div className="page-stack">
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Diensten", to: "/diensten" },
          { label: service.title }
        ]}
      />

      <PageHero eyebrow="Dienst detail" title={service.title} copy={service.longDescription} />

      <Section eyebrow="Kenmerken" title="Wat deze dienst omvat">
        <ul className="feature-list">
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </Section>

      <CTASection
        eyebrow="Contact"
        title="Bespreek deze dienst in de context van uw project"
        copy="Een dienstdetailpagina is ideaal voor uitleg, vertrouwen en het sturen naar een contactmoment."
      />
    </div>
  );
}
