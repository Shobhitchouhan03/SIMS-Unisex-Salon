export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-maroon">{eyebrow}</span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-ink">{title}</h2>
      {description && <p className="text-ink-soft text-base sm:text-lg">{description}</p>}
    </div>
  );
}
