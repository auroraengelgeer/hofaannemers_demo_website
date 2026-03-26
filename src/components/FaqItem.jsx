import { useState } from "react";

export function FaqItem({ item, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className={`faq-item ${open ? "faq-item--open" : ""}`}>
      <button
        className="faq-item__question"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span>{item.question}</span>
        <span className="faq-item__icon" aria-hidden="true">
          {open ? "\u2212" : "+"}
        </span>
      </button>

      {open ? <p className="faq-item__answer">{item.answer}</p> : null}
    </article>
  );
}
