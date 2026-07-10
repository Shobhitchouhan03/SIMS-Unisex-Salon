import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { salon, services } from '@/data/salonData';

const categories = [...new Set(services.map((s) => s.category))];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 flex flex-col gap-16">
      <SectionHeading
        eyebrow="About us"
        title={`${salon.name}${salon.formerName ? ` — formerly ${salon.formerName}` : ''}`}
        description="A neighbourhood unisex salon in Nangloi offering haircuts, colour, spa and grooming for the whole family, with real appointment slots instead of a first-come queue."
      />

      <div className="grid sm:grid-cols-3 gap-6">
        {[
          { label: 'Google rating', value: `${salon.rating.toFixed(1)} / 5` },
          { label: 'Reviews', value: `${salon.reviewCount}+` },
          { label: 'Category', value: salon.category },
        ].map((stat) => (
          <div key={stat.label} className="rounded-card border border-ink/10 p-6 bg-white/40">
            <p className="font-mono text-2xl font-semibold">{stat.value}</p>
            <p className="text-sm text-ink-soft mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {categories.map((category) => (
        <div key={category} className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">{category}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services
              .filter((s) => s.category === category)
              .map((service) => (
                <ServiceCard key={service.id} service={service} onBook={() => {}} />
              ))}
          </div>
        </div>
      ))}

      <div className="flex justify-center">
        <Button as={Link} to="/booking" size="lg">
          Book an appointment <FiArrowRight className="w-4 h-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
