import { FaqItem } from "../FaqItem";

export function FaqList({ items }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <FaqItem key={item.question} item={item} defaultOpen={index === 0} />
      ))}
    </div>
  );
}
