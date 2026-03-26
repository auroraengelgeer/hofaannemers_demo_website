import { PageHero } from "../components/content/PageHero";
import { ServiceCard } from "../components/services/ServiceCard";
import { Section } from "../components/ui/Section";
import { services } from "../data/services";
import "../styles/pages/services.css";

export function ServicesPage() {
  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Diensten"
        title="Ontdek de veelzijdige dienstverlening van Hof Aannemers"
        copy="Of het nu gaat om uw woonwensen of zakelijke doelstellingen, wij zijn er dagelijks voor u. Ons toegewijde team staat paraat om uw wensen te verwezenlijken met expertise en zorg. Hieronder vindt u een overzicht van onze diverse diensten."
      />

      <Section
        eyebrow="Dienstenoverzicht"
        title="Onze diensten"
        copy="Hieronder vindt u een overzicht van onze diverse diensten."
      >
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
    </div>
  );
}
