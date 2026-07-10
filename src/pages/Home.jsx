import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiUsers, FiHome } from 'react-icons/fi';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import TokenTicket from '@/components/TokenTicket';
import RatingStars from '@/components/RatingStars';
import Skeleton from '@/components/Skeleton';
import ArchFrame from '@/components/ArchFrame';
import { salon, services, testimonials, stats, packages } from '@/data/salonData';

const ServiceCard = lazy(() => import('@/components/ServiceCard'));
const TestimonialCard = lazy(() => import('@/components/TestimonialCard'));
const PackageCard = lazy(() => import('@/components/PackageCard'));

const highlights = [
  'Certified stylists for men, women & kids',
  'Hygienic tools, sanitised between every guest',
  'Token-based queue \u2014 no waiting around',
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-maroon">
            {salon.category} · Nangloi, New Delhi
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
            Your next haircut, <span className="text-maroon">already has a number.</span>
          </h1>
          <p className="text-lg text-ink-soft max-w-md">
            Book a real appointment slot at {salon.name} and skip the walk-in queue. Pick a service, pick a time, get your token.
          </p>
          <div className="flex items-center gap-3">
            <RatingStars rating={salon.rating} />
            <span className="text-sm text-ink-soft">{salon.rating.toFixed(1)} · {salon.reviewCount} reviews</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button as={Link} to="/booking" size="lg">
              Book an appointment <FiArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button as={Link} to="/about" size="lg" variant="outline">
              See services
            </Button>
          </div>
          <ul className="flex flex-col gap-2 pt-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                <FiCheckCircle className="w-4 h-4 text-sage shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <TokenTicket token="118" service="Men's Haircut" time="04:15 PM" />
        </div>
      </section>

      {/* Trust stats */}
      <section className="border-y border-ink/10 bg-white/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 grid grid-cols-3 gap-4 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-mono text-2xl sm:text-3xl font-semibold text-maroon">{stat.value}</p>
              <p className="text-xs sm:text-sm text-ink-soft mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <SectionHeading
          eyebrow="Menu"
          title="Services, priced upfront"
          description="A quick look at what's on offer. Every slot below reserves real chair time."
        />
        <Suspense
          fallback={
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-48" />
              ))}
            </div>
          }
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} onBook={() => {}} />
            ))}
          </div>
        </Suspense>
        <div className="mt-8">
          <Button as={Link} to="/booking" variant="outline">
            View full menu &amp; book
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sage/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <SectionHeading
            align="center"
            eyebrow="Reviews"
            title="What guests are saying"
            description={`${salon.rating.toFixed(1)} out of 5, from ${salon.reviewCount} Google reviews.`}
          />
          <Suspense
            fallback={
              <div className="grid sm:grid-cols-3 gap-5 mt-10">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-56" />
                ))}
              </div>
            }
          >
            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* Arch preview — meet the team / inside the salon */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid sm:grid-cols-2 gap-10">
        <Link to="/about" className="group flex flex-col items-center gap-4 text-center">
          <ArchFrame icon={FiUsers} label="Our stylists" tone="maroon" className="w-full h-64" />
          <span className="flex items-center gap-1 font-medium group-hover:text-maroon transition-colors">
            Meet the team <FiArrowRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </Link>
        <a
          href={salon.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center gap-4 text-center"
        >
          <ArchFrame icon={FiHome} label="Inside the salon" tone="sage" className="w-full h-64" />
          <span className="flex items-center gap-1 font-medium group-hover:text-maroon transition-colors">
            See it on the map <FiArrowRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </a>
      </section>

      {/* Packages */}
      <section className="bg-ink/[0.03]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <SectionHeading
            align="center"
            eyebrow="Passes"
            title="Visit more, pay less per cut"
            description="Bundle your regular visits into a pass and skip paying per service."
          />
          <Suspense
            fallback={
              <div className="grid sm:grid-cols-3 gap-6 mt-10">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-72" />
                ))}
              </div>
            }
          >
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl sm:text-4xl font-semibold max-w-xl">
          Grab your token before the chairs fill up.
        </h2>
        <Button as={Link} to="/booking" size="lg">
          Book an appointment <FiArrowRight className="w-4 h-4" aria-hidden="true" />
        </Button>
      </section>
    </div>
  );
}
