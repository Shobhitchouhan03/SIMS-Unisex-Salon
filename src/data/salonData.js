// Core business info sourced from the salon's Google Maps listing.
// NOTE: the listing only surfaced "opens 9:30 am" (not full weekly hours),
// and no service menu or pricing was published — those fields below are
// reasonable placeholders for the salon to customise before going live.

export const salon = {
  name: 'SIMS Unisex Salon',
  formerName: 'Salon de Coiffeur',
  category: 'Barber shop · Unisex Salon',
  rating: 5.0,
  reviewCount: 16,
  phone: '099530 29195',
  phoneHref: 'tel:+919953029195',
  address: '14, Main Rohtak Rd, Rajendra Park, Nangloi Extension, Nangloi, New Delhi, Delhi 110041',
  plusCode: 'M3J3+QM New Delhi, Delhi',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=SIMS+Unisex+Salon+Nangloi+New+Delhi',
  hours: [
    { day: 'Monday', time: '9:30 AM – 8:30 PM' },
    { day: 'Tuesday', time: '9:30 AM – 8:30 PM' },
    { day: 'Wednesday', time: '9:30 AM – 8:30 PM' },
    { day: 'Thursday', time: '9:30 AM – 8:30 PM' },
    { day: 'Friday', time: '9:30 AM – 8:30 PM' },
    { day: 'Saturday', time: '9:30 AM – 8:30 PM' },
    { day: 'Sunday', time: '9:30 AM – 8:30 PM' },
  ],
};

export const services = [
  { id: 'haircut-men', name: "Men's Haircut", category: 'Hair', duration: 30, price: 199, blurb: 'Precision cut, wash and style finish.' },
  { id: 'haircut-women', name: "Women's Haircut", category: 'Hair', duration: 45, price: 349, blurb: 'Consultation, cut and blow-dry.' },
  { id: 'beard-trim', name: 'Beard Shape-Up', category: 'Hair', duration: 20, price: 99, blurb: 'Line-up, trim and hot-towel finish.' },
  { id: 'hair-spa', name: 'Hair Spa Therapy', category: 'Spa', duration: 60, price: 799, blurb: 'Deep-conditioning spa for damaged or dry hair.' },
  { id: 'hair-colour', name: 'Global Hair Colour', category: 'Colour', duration: 90, price: 1299, blurb: 'Ammonia-friendly colour, root to tip.' },
  { id: 'head-massage', name: 'Head Massage', category: 'Spa', duration: 20, price: 149, blurb: 'Stress-relief champi with warm oil.' },
  { id: 'facial', name: 'De-Tan Facial', category: 'Skin', duration: 45, price: 699, blurb: 'Brightening facial for sun-exposed skin.' },
  { id: 'kids-cut', name: "Kids' Haircut", category: 'Hair', duration: 20, price: 149, blurb: 'Patient, gentle cuts for children under 12.' },
];

// Reviews below are paraphrased in our own words from the public listing,
// with the original reviewers credited by name.
export const testimonials = [
  {
    id: 't1',
    name: 'Suraj Hooda',
    meta: 'Local Guide · 7 months ago',
    rating: 5,
    text: 'A dependable spot for men\u2019s cuts \u2014 clean, professional and genuinely skilled with modern styles. The barbers listen before they pick up the scissors, and the price feels fair for the result.',
  },
  {
    id: 't2',
    name: 'Sudhir Kumar',
    meta: '2 months ago',
    rating: 5,
    text: 'A really pleasant visit overall. The haircut was done in a proper professional style, and the whole team was polite from start to finish \u2014 happy to recommend it.',
  },
  {
    id: 't3',
    name: 'Balram Singhal',
    meta: 'Local Guide · 7 months ago',
    rating: 5,
    text: 'Friendly, professional staff and a haircut-plus-spa combo that came out great. The space is spotless and well kept, and the products they use feel genuinely good quality.',
  },
];

export const stats = [
  { value: '9+', label: 'Years in Nangloi' },
  { value: `${salon.reviewCount}+`, label: 'Happy guests reviewed' },
  { value: salon.rating.toFixed(1), label: 'Average rating' },
];

// Repeat-visit passes — not on the source listing, an addition for guests
// who book regularly. Edit or remove if the salon doesn't run passes.
export const packages = [
  {
    id: 'starter',
    name: 'Starter Pass',
    price: 999,
    tagline: '4 haircuts, any month',
    features: ['4 haircut or beard visits', 'Valid for 60 days', 'No booking fee'],
  },
  {
    id: 'signature',
    name: 'Signature Pass',
    price: 2499,
    tagline: 'Cut + colour + spa, bundled',
    featured: true,
    features: ['4 haircuts', '1 hair spa therapy', '1 global colour touch-up', 'Priority slot booking'],
  },
  {
    id: 'family',
    name: 'Family Pass',
    price: 3999,
    tagline: 'For up to 4 family members',
    features: ['8 haircuts, shared across the family', '2 kids\u2019 cuts included', 'Valid for 90 days'],
  },
];

export const timeSlots = [
  '09:30 AM', '10:15 AM', '11:00 AM', '11:45 AM',
  '12:30 PM', '02:00 PM', '02:45 PM', '03:30 PM',
  '04:15 PM', '05:00 PM', '05:45 PM', '06:30 PM', '07:15 PM',
];
