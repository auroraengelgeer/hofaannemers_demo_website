export function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="page-hero section-panel">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </section>
  );
}
