import { useMemo, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import SectionHeading from '@/components/SectionHeading';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import TokenTicket from '@/components/TokenTicket';
import { services, timeSlots } from '@/data/salonData';
import { useBooking } from '@/hooks/useBooking';

const todayIso = new Date().toISOString().slice(0, 10);

const initialForm = { name: '', phone: '', serviceId: services[0].id, date: todayIso, time: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) {
    errors.phone = 'Enter a 10-digit phone number.';
  }
  if (!form.serviceId) errors.serviceId = 'Choose a service.';
  if (!form.date) errors.date = 'Choose a date.';
  if (!form.time) errors.time = 'Choose a time slot.';
  return errors;
}

export default function Booking() {
  const { addBooking } = useBooking();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const selectedService = useMemo(
    () => services.find((s) => s.id === form.serviceId),
    [form.serviceId]
  );

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    // Frontend-only demo: bookings are stored in memory via context,
    // not sent to a real backend.
    window.setTimeout(() => {
      const booking = addBooking({ ...form, serviceName: selectedService?.name });
      setConfirmed(booking);
      setSubmitting(false);
      setForm(initialForm);
    }, 700);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <SectionHeading
        eyebrow="Appointment"
        title="Book your slot"
        description="Pick a service, date and time. You'll get a token number to show at the counter — no waiting in line."
      />

      <form onSubmit={handleSubmit} noValidate className="mt-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5 content-start">
          <Input
            id="name"
            label="Full name"
            placeholder="Priya Sharma"
            value={form.name}
            onChange={handleChange('name')}
            error={errors.name}
          />
          <Input
            id="phone"
            type="tel"
            label="Phone number"
            placeholder="98XXXXXXXX"
            value={form.phone}
            onChange={handleChange('phone')}
            error={errors.phone}
          />

          <Input
            id="serviceId"
            as="select"
            label="Service"
            value={form.serviceId}
            onChange={handleChange('serviceId')}
            error={errors.serviceId}
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} · ₹{s.price} · {s.duration} min
              </option>
            ))}
          </Input>

          <Input
            id="date"
            type="date"
            label="Date"
            min={todayIso}
            value={form.date}
            onChange={handleChange('date')}
            error={errors.date}
          />

          <div className="sm:col-span-2 flex flex-col gap-2">
            <span className="text-sm font-medium text-ink/80">Time slot</span>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => {
                    setForm((prev) => ({ ...prev, time: slot }));
                    setErrors((prev) => ({ ...prev, time: undefined }));
                  }}
                  className={`font-mono text-sm rounded-full px-4 py-2 border transition-colors ${
                    form.time === slot
                      ? 'bg-maroon text-paper border-maroon'
                      : 'border-ink/15 text-ink hover:border-maroon/50'
                  }`}
                  aria-pressed={form.time === slot}
                >
                  {slot}
                </button>
              ))}
            </div>
            {errors.time && <p className="text-sm text-maroon">{errors.time}</p>}
          </div>

          <div className="sm:col-span-2">
            <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? 'Reserving…' : 'Confirm appointment'}
              {!submitting && <FiCheck className="w-4 h-4" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start lg:items-start">
          <TokenTicket
            token="—"
            name={form.name || 'Your name'}
            service={selectedService?.name}
            time={form.time || 'Pick a slot'}
            className="lg:sticky lg:top-24"
          />
        </div>
      </form>

      <Modal open={Boolean(confirmed)} onClose={() => setConfirmed(null)} title="You're booked!">
        {confirmed && (
          <div className="flex flex-col items-center gap-6 py-2">
            <TokenTicket
              token={confirmed.token}
              name={confirmed.name}
              service={confirmed.serviceName}
              time={confirmed.time}
            />
            <p className="text-ink-soft text-center">
              Save this token number. Show it at the counter on {confirmed.date}.
            </p>
            <Button onClick={() => setConfirmed(null)} className="w-full">
              Done
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
}
