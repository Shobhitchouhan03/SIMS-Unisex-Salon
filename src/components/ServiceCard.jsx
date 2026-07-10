import Card from './Card';
import Button from './Button';

export default function ServiceCard({ service, onBook }) {
  if (!service) return null;
  return (
    <Card className="p-6 flex flex-col gap-4 hover:shadow-ticket">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="font-mono text-xs uppercase tracking-wide text-sage">{service.category}</span>
          <h3 className="text-lg font-semibold mt-1">{service.name}</h3>
        </div>
        <span className="font-mono text-lg font-semibold whitespace-nowrap">₹{service.price}</span>
      </div>
      <p className="text-sm text-ink-soft flex-1">{service.blurb}</p>
      <div className="flex items-center justify-between pt-2 border-t border-dashed border-ink/15">
        <span className="text-sm text-ink-soft font-mono">{service.duration} min</span>
        <Button size="sm" variant="outline" onClick={() => onBook?.(service)}>
          Book this
        </Button>
      </div>
    </Card>
  );
}
