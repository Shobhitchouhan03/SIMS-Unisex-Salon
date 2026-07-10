import { Link } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import Card from './Card';
import Button from './Button';

export default function PackageCard({ pkg }) {
  if (!pkg) return null;
  return (
    <Card
      borderColor={pkg.featured ? 'border-maroon' : 'border-ink/10'}
      className={`p-7 flex flex-col gap-5 relative ${pkg.featured ? 'shadow-ticket scale-[1.02]' : ''}`}
    >
      {pkg.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-maroon text-paper text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full">
          Most booked
        </span>
      )}
      <div>
        <h3 className="text-xl font-semibold">{pkg.name}</h3>
        <p className="text-ink-soft text-sm mt-1">{pkg.tagline}</p>
      </div>
      <p className="font-mono text-3xl font-semibold">₹{pkg.price}</p>
      <ul className="flex flex-col gap-2 flex-1">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
            <FiCheck className="w-4 h-4 mt-0.5 text-sage shrink-0" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
      <Button as={Link} to="/booking" variant={pkg.featured ? 'primary' : 'outline'}>
        Choose {pkg.name}
      </Button>
    </Card>
  );
}
