import Card from './Card';
import RatingStars from './RatingStars';

export default function TestimonialCard({ testimonial }) {
  if (!testimonial) return null;
  return (
    <Card className="p-6 flex flex-col gap-4 h-full">
      <RatingStars rating={testimonial.rating} />
      <p className="text-ink-soft leading-relaxed flex-1">&ldquo;{testimonial.text}&rdquo;</p>
      <div>
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-ink-soft">{testimonial.meta}</p>
      </div>
    </Card>
  );
}
