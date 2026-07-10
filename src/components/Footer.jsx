import { FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { salon } from '@/data/salonData';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">{salon.name}</p>
          <p className="text-paper/60 text-sm mt-1">{salon.category}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-paper/80">
          <span className="flex items-start gap-2">
            <FiMapPin className="w-4 h-4 mt-0.5 shrink-0 text-brass-light" aria-hidden="true" />
            {salon.address}
          </span>
          <a href={salon.phoneHref} className="flex items-center gap-2 hover:text-brass-light">
            <FiPhone className="w-4 h-4 shrink-0 text-brass-light" aria-hidden="true" />
            {salon.phone}
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm text-paper/80">
          <span className="flex items-center gap-2">
            <FiClock className="w-4 h-4 shrink-0 text-brass-light" aria-hidden="true" />
            Open daily
          </span>
          <span className="font-mono">{salon.hours[0].time}</span>
        </div>
      </div>
      <div className="border-t border-paper/10 py-4 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} {salon.name}. All rights reserved.
      </div>
    </footer>
  );
}
