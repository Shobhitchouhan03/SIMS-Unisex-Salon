import { useState } from 'react';
import { FiMapPin, FiPhone, FiClock, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from '@/components/SectionHeading';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { salon } from '@/data/salonData';

const initialForm = { name: '', email: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.email.trim()) {
    errors.email = 'Please enter an email address.';
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'That email address looks incomplete.';
  }
  if (!form.message.trim()) errors.message = 'Let us know what you need.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | sent

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    // Frontend-only demo: simulate a request instead of calling a real API.
    window.setTimeout(() => {
      setStatus('sent');
      setForm(initialForm);
    }, 900);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12">
      <div className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Contact"
          title="Come find us in Nangloi"
          description="Have a question before you book? Send a message or call the salon directly."
        />

        <div className="flex flex-col gap-5 text-ink-soft">
          <a href={salon.mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-maroon">
            <FiMapPin className="w-5 h-5 mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
            <span>{salon.address}</span>
          </a>
          <a href={salon.phoneHref} className="flex items-center gap-3 hover:text-maroon">
            <FiPhone className="w-5 h-5 shrink-0 text-maroon" aria-hidden="true" />
            <span>{salon.phone}</span>
          </a>
          <div className="flex items-start gap-3">
            <FiClock className="w-5 h-5 mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-sm">
              {salon.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day.slice(0, 3)}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-card border border-ink/10 bg-white/40 p-6 sm:p-8">
        {status === 'sent' ? (
          <div className="flex flex-col items-center text-center gap-3 py-10">
            <FiCheckCircle className="w-10 h-10 text-sage" aria-hidden="true" />
            <h3 className="text-xl font-semibold">Message sent</h3>
            <p className="text-ink-soft">We'll get back to you shortly. For anything urgent, call the salon directly.</p>
            <Button variant="outline" onClick={() => setStatus('idle')}>
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <Input
              id="name"
              label="Your name"
              placeholder="Priya Sharma"
              value={form.name}
              onChange={handleChange('name')}
              error={errors.name}
            />
            <Input
              id="email"
              type="email"
              label="Email address"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange('email')}
              error={errors.email}
            />
            <Input
              id="message"
              as="textarea"
              rows={5}
              label="Message"
              placeholder="Tell us what you're looking for..."
              value={form.message}
              onChange={handleChange('message')}
              error={errors.message}
            />
            <Button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
