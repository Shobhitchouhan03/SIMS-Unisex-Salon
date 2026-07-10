// A designed stand-in for a salon photo, shaped like the arched crops in
// the salon's brand references. Swap the children for a real <img> once
// photography is available — the arch shape and shadow will still apply.
export default function ArchFrame({ icon: Icon, label, tone = 'sage', className = '' }) {
  const tones = {
    sage: 'from-sage/25 via-sage/10 to-transparent text-sage',
    maroon: 'from-maroon/20 via-maroon/8 to-transparent text-maroon',
    brass: 'from-brass/30 via-brass/10 to-transparent text-brass',
  };
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b ${tones[tone]} bg-ink/5 flex flex-col items-center justify-center gap-3 shadow-card ${className}`}
      style={{ borderRadius: '999px 999px 24px 24px' }}
    >
      {Icon && <Icon className="w-10 h-10" aria-hidden="true" />}
      {label && <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">{label}</span>}
    </div>
  );
}
