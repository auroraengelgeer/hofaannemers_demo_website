import { PageHero } from "../components/content/PageHero";
import { ServiceCard } from "../components/services/ServiceCard";
import { Section } from "../components/ui/Section";
import { services } from "../data/services";
import "../styles/pages/home.css";

export function HomePage() {
  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Home"
        title="Uw klus, onze verantwoordelijkheid!"
        copy="Ontdek de veelzijdige dienstverlening van Hof Aannemers. Of het nu gaat om uw woonwensen of zakelijke doelstellingen, wij zijn er dagelijks voor u. Ons toegewijde team staat paraat om uw wensen te verwezenlijken met expertise en zorg. Hieronder vindt u een overzicht van onze diverse diensten."
      />

      <Section
        eyebrow="Onze diensten"
        title="Ontdek de veelzijdige dienstverlening van Hof Aannemers"
        copy="Of het nu gaat om uw woonwensen of zakelijke doelstellingen, wij zijn er dagelijks voor u."
      >
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="inline-note">
          Bij Hof Aannemers streven wij naar bouwprojecten die verder gaan dan alleen fysieke structuren. Onze missie is om met vakmanschap en integriteit levenslange verbintenissen te creëren. Wij engageren ons voor kwaliteit en service, waarbij innovatie en duurzaamheid centraal staan.
        </div>
      </Section>
    </div>
  );
}
