export function Section({ eyebrow, title, copy, children, className = "" }) {
  const classes = ["section-panel", className].filter(Boolean).join(" ");

  return (
    <section className={classes}>
      {(eyebrow || title || copy) ? (
        <div className="section-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {title ? <h2>{title}</h2> : null}
          {copy ? <p>{copy}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
