# SIMS Unisex Salon — Landing + Appointment Booking

Frontend-only React app (React 19 + Vite + Tailwind + React Router) for SIMS Unisex Salon,
Nangloi, New Delhi. Built content is based on the salon's public Google Maps listing name,
address, phone number, rating and reviews.

## ⚠️ Placeholder content to review before launch
The Maps listing didn't publish a service menu, prices, or full weekly hours (only
"opens 9:30 am" was visible), so these were filled in with reasonable placeholders:
- `src/data/salonData.js` — services, prices, durations, and the 9:30 AM–8:30 PM daily hours.
- Reviews are paraphrased (not verbatim) versions of the three visible Google reviews, credited by name.

Edit `src/data/salonData.js` to swap in the real menu, pricing and hours.

## Getting started
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## What's included
- **Home** — hero, services preview, testimonials, CTA.
- **About** — full service menu grouped by category.
- **Contact** — validated contact form (simulated submit, no backend) + address/hours/phone.
- **Booking** — appointment form (name, phone, service, date, time-slot) that generates a
  numbered "token" ticket on confirm, stored in memory via React Context (`BookingContext`).
  There is no backend — refreshing the page clears bookings, since this is frontend-only.
- **404** — custom not-found page for any unmatched route.

## Deployment
- **Vercel**: `vercel.json` rewrites all routes to `index.html`. Just import the repo.
- **Netlify**: `netlify.toml` + `public/_redirects` handle the SPA fallback.
- **GitHub Pages**: `public/404.html` + a small restore script in `index.html` implement the
  standard SPA-on-GitHub-Pages redirect trick so deep links and refreshes don't 404. Set
  `base` in `vite.config.js` to your repo name (e.g. `/sims-salon/`) if deploying to a
  project page rather than a custom domain.

## Design notes
Palette and type are original choices, not templated: an ink/charcoal-green + paper-ivory
base with a barber-chair maroon and brass accent, paired with a serif display face and a
monospace utility face. The signature element is the **token ticket** — a stylised queue
number card (a real detail from Indian salon culture) used in the hero and again as the
booking confirmation, tying the booking flow back to something guests already recognize
from visiting in person.

A few structural ideas were borrowed (not cloned) from reference salon sites the client
shared — arched photo frames, a trust-stats strip, and membership/pass pricing tiers —
reworked with this site's own palette and the token motif:
- `ArchFrame` (`src/components/ArchFrame.jsx`) — an arch-shaped placeholder panel for the
  "meet the team" / "inside the salon" spots on the homepage. It's a CSS shape with an icon,
  not a real photo (none was provided) — swap in an `<img>` once photography exists.
- The **trust stats strip** and **Passes** (membership pricing) section on the homepage —
  `stats` and `packages` in `src/data/salonData.js`. The pass pricing is a plausible addition,
  not from the source listing — edit or remove if the salon doesn't run passes.
