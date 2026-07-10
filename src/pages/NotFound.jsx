import { Link } from 'react-router-dom';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 text-center flex flex-col items-center gap-6">
      <span className="font-mono text-8xl font-semibold text-brass">404</span>
      <h1 className="text-3xl font-semibold">This chair's empty.</h1>
      <p className="text-ink-soft">
        The page you're looking for doesn't exist. Head back home or go straight to booking.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button as={Link} to="/">Back to home</Button>
        <Button as={Link} to="/booking" variant="outline">Book an appointment</Button>
      </div>
    </div>
  );
}
