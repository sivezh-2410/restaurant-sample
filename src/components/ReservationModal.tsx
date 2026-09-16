import { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, CheckCircle2 } from 'lucide-react';
import Modal from '@/components/ui/Modal';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

const timeSlots = [
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM', '10:00 PM',
];

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (form.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!form.date) newErrors.date = 'Please select a date';
    if (!form.time) newErrors.time = 'Please select a time';
    if (!form.guests) newErrors.guests = 'Please select party size';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' });
      setErrors({});
    }, 300);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Reserve a Table">
      {submitted ? (
        <div className="text-center py-6">
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />
          <h3 className="mt-4 text-2xl font-semibold text-charcoal-900">Reservation Requested!</h3>
          <p className="mt-3 text-charcoal-500">
            Thank you, {form.name}. We&apos;ve received your request for {form.guests} guests on{' '}
            {new Date(form.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}{' '}
            at {form.time}. We&apos;ll confirm by phone or email shortly.
          </p>
          <button onClick={handleClose} className="btn-primary mt-6">
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="res-name" className="mb-1.5 block text-sm font-medium text-charcoal-700">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
              <input
                id="res-name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`w-full rounded-lg border bg-white py-2.5 pl-10 pr-3 text-sm text-charcoal-800 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500 ${
                  errors.name ? 'border-red-400' : 'border-charcoal-200'
                }`}
                placeholder="Jane Doe"
              />
            </div>
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          {/* Email + Phone */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="res-email" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
                <input
                  id="res-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full rounded-lg border bg-white py-2.5 pl-10 pr-3 text-sm text-charcoal-800 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500 ${
                    errors.email ? 'border-red-400' : 'border-charcoal-200'
                  }`}
                  placeholder="jane@email.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="res-phone" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
                <input
                  id="res-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`w-full rounded-lg border bg-white py-2.5 pl-10 pr-3 text-sm text-charcoal-800 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500 ${
                    errors.phone ? 'border-red-400' : 'border-charcoal-200'
                  }`}
                  placeholder="(503) 555-0192"
                />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>
          </div>

          {/* Date + Time */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="res-date" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
                <input
                  id="res-date"
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className={`w-full rounded-lg border bg-white py-2.5 pl-10 pr-3 text-sm text-charcoal-800 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500 ${
                    errors.date ? 'border-red-400' : 'border-charcoal-200'
                  }`}
                />
              </div>
              {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
            </div>
            <div>
              <label htmlFor="res-time" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
                <select
                  id="res-time"
                  value={form.time}
                  onChange={(e) => handleChange('time', e.target.value)}
                  className={`w-full appearance-none rounded-lg border bg-white py-2.5 pl-10 pr-3 text-sm text-charcoal-800 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500 ${
                    errors.time ? 'border-red-400' : 'border-charcoal-200'
                  }`}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              {errors.time && <p className="mt-1 text-xs text-red-500">{errors.time}</p>}
            </div>
          </div>

          {/* Guests */}
          <div>
            <label htmlFor="res-guests" className="mb-1.5 block text-sm font-medium text-charcoal-700">
              Party Size
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
              <select
                id="res-guests"
                value={form.guests}
                onChange={(e) => handleChange('guests', e.target.value)}
                className={`w-full appearance-none rounded-lg border bg-white py-2.5 pl-10 pr-3 text-sm text-charcoal-800 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500 ${
                  errors.guests ? 'border-red-400' : 'border-charcoal-200'
                }`}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                ))}
                <option value="8+">8+ guests</option>
              </select>
            </div>
            {errors.guests && <p className="mt-1 text-xs text-red-500">{errors.guests}</p>}
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="res-notes" className="mb-1.5 block text-sm font-medium text-charcoal-700">
              Special Requests <span className="text-charcoal-400">(optional)</span>
            </label>
            <textarea
              id="res-notes"
              value={form.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              rows={2}
              className="w-full rounded-lg border border-charcoal-200 bg-white px-3 py-2.5 text-sm text-charcoal-800 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500"
              placeholder="Dietary restrictions, seating preferences, celebrations..."
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Request Reservation
          </button>
          <p className="text-center text-xs text-charcoal-400">
            We&apos;ll confirm your reservation within 24 hours.
          </p>
        </form>
      )}
    </Modal>
  );
}
