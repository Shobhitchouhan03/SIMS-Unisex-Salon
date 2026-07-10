import { FiStar } from 'react-icons/fi';

export default function RatingStars({ rating = 5, className = '' }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} role="img" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar
          key={i}
          className={`w-4 h-4 ${i < Math.round(rating) ? 'fill-brass text-brass' : 'text-ink/20'}`}
        />
      ))}
    </div>
  );
}
