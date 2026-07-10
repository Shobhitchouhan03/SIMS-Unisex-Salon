import { motion } from 'framer-motion';

// Signature element: the hero and confirmation both borrow the look of the
// paper queue token you're handed at the salon counter.
export default function TokenTicket({ token, name, service, time, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative bg-ink text-paper rounded-2xl shadow-ticket p-6 sm:p-8 w-full max-w-sm ticket-notch ${className}`}
    >
      <div className="flex items-center justify-between border-b border-dashed border-paper/25 pb-4 mb-4">
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-brass-light">Sims Salon</span>
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-paper/60">Token</span>
      </div>
      <p className="font-mono text-6xl font-semibold text-brass-light leading-none">
        #{token}
      </p>
      <div className="mt-6 space-y-1 font-mono text-sm text-paper/80">
        {name && <p>Guest: {name}</p>}
        {service && <p>Service: {service}</p>}
        {time && <p>Slot: {time}</p>}
      </div>
      <div className="mt-6 border-t border-dashed border-paper/25 pt-3 text-[11px] font-mono text-paper/50 uppercase tracking-wider">
        Please arrive 5 min early
      </div>
    </motion.div>
  );
}
