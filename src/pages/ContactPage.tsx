import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { restaurantInfo, openingHours } from '@/data/restaurant';
import Reveal from '@/components/ui/Reveal';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: '', email: '', phone: '', subject: 'General Inquiry', message: '',
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
    if (!form.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      label: 'Address',
      value: restaurantInfo.address,
      href: `https://www.google.com/maps/search/?api=1&query=${restaurantInfo.mapQuery}`,
      action: 'Get Directions',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: restaurantInfo.phone,
      href: `tel:${restaurantInfo.phone}`,
      action: 'Call Us',
    },
    {
      icon: Mail,
      label: 'Email',
      value: restaurantInfo.email,
      href: `mailto:${restaurantInfo.email}`,
      action: 'Send Email',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal-950 py-20 text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/37968303/pexels-photo-37968303.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600"
            alt="Romantic restaurant setting with candlelight"
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 to-charcoal-950" />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-saffron-300 animate-fade-down">
            Get in Touch
          </p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl animate-fade-up">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-charcoal-300 animate-fade-up animation-delay-200">
            Questions, private events, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 100}>
                <a
                  href={card.href}
                  target={card.icon === MapPin ? '_blank' : undefined}
                  rel={card.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="group flex h-full flex-col items-center rounded-2xl border border-charcoal-100 bg-white p-8 text-center transition-all duration-300 hover:border-ember-200 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-ember-50 text-ember-600 transition-colors group-hover:bg-ember-600 group-hover:text-white">
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-400">{card.label}</h3>
                  <p className="mt-2 text-charcoal-700">{card.value}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ember-600 transition-colors group-hover:text-ember-700">
                    {card.action}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Form + Hours */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Form */}
            <Reveal>
              <div className="rounded-2xl border border-charcoal-100 bg-white p-8">
                <h2 className="text-2xl font-semibold text-charcoal-900">Send a Message</h2>
                <p className="mt-1 text-sm text-charcoal-500">We typically respond within 24 hours.</p>

                {submitted ? (
                  <div className="mt-6 flex flex-col items-center py-8 text-center">
                    <CheckCircle2 className="h-16 w-16 text-green-600" />
                    <h3 className="mt-4 text-xl font-semibold text-charcoal-900">Message Sent!</h3>
                    <p className="mt-2 text-sm text-charcoal-500">
                      Thank you for reaching out. We&apos;ll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary mt-6"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                          Name <span className="text-ember-600">*</span>
                        </label>
                        <input
                          id="c-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-charcoal-800 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500 ${
                            errors.name ? 'border-red-400' : 'border-charcoal-200'
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                          Email <span className="text-ember-600">*</span>
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-charcoal-800 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500 ${
                            errors.email ? 'border-red-400' : 'border-charcoal-200'
                          }`}
                          placeholder="you@email.com"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                          Phone <span className="text-charcoal-400">(optional)</span>
                        </label>
                        <input
                          id="c-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="w-full rounded-lg border border-charcoal-200 bg-white px-3 py-2.5 text-sm text-charcoal-800 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500"
                          placeholder="(503) 555-0192"
                        />
                      </div>
                      <div>
                        <label htmlFor="c-subject" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                          Subject
                        </label>
                        <select
                          id="c-subject"
                          value={form.subject}
                          onChange={(e) => handleChange('subject', e.target.value)}
                          className="w-full appearance-none rounded-lg border border-charcoal-200 bg-white px-3 py-2.5 text-sm text-charcoal-800 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500"
                        >
                          <option>General Inquiry</option>
                          <option>Reservation Question</option>
                          <option>Private Event</option>
                          <option>Feedback</option>
                          <option>Careers</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                        Message <span className="text-ember-600">*</span>
                      </label>
                      <textarea
                        id="c-message"
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={5}
                        className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-charcoal-800 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500 ${
                          errors.message ? 'border-red-400' : 'border-charcoal-200'
                        }`}
                        placeholder="How can we help you?"
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Hours + Map */}
            <Reveal delay={150}>
              <div className="flex h-full flex-col gap-6">
                {/* Hours */}
                <div className="rounded-2xl border border-charcoal-100 bg-white p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <Clock className="h-6 w-6 text-ember-600" />
                    <h3 className="text-xl font-semibold text-charcoal-900">Opening Hours</h3>
                  </div>
                  <ul className="space-y-2">
                    {openingHours.map((entry) => (
                      <li key={entry.day} className="flex items-center justify-between rounded-lg px-3 py-2 text-sm">
                        <span className="text-charcoal-600">{entry.day}</span>
                        <span className={entry.hours === 'Closed' ? 'text-red-400' : 'text-charcoal-700'}>
                          {entry.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Map */}
                <div className="flex-1 overflow-hidden rounded-2xl border border-charcoal-100 bg-white">
                  <iframe
                    title="Restaurant location map"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=-122.68,45.51,-122.66,45.53&layer=mapnik&marker=45.52,-122.67`}
                    className="h-full min-h-64 w-full"
                    loading="lazy"
                    style={{ border: 0 }}
                  />
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${restaurantInfo.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-green-600 p-4 text-white transition-colors hover:bg-green-700"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">Chat on WhatsApp</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
