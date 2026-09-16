import { Clock, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { openingHours, restaurantInfo } from '@/data/restaurant';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import type { PageId } from '@/components/layout/Navbar';

interface HoursLocationProps {
  onNavigate: (page: PageId) => void;
}

export default function HoursLocation({ onNavigate }: HoursLocationProps) {
  const todayIndex = (new Date().getDay() + 6) % 7; // Monday = 0

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Visit Us"
          title="Hours & Location"
          description="We're in the heart of Portland's Riverside District. Walk-ins are welcome, but reservations are recommended."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Hours */}
          <Reveal>
            <div className="h-full rounded-2xl border border-charcoal-100 bg-cream p-8">
              <div className="mb-6 flex items-center gap-3">
                <Clock className="h-6 w-6 text-ember-600" />
                <h3 className="text-xl font-semibold text-charcoal-900">Opening Hours</h3>
              </div>
              <ul className="space-y-3">
                {openingHours.map((entry, i) => (
                  <li
                    key={entry.day}
                    className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-sm ${
                      i === todayIndex ? 'bg-ember-50 font-medium' : ''
                    }`}
                  >
                    <span className={i === todayIndex ? 'text-ember-700' : 'text-charcoal-600'}>
                      {entry.day}
                      {i === todayIndex && <span className="ml-2 text-xs uppercase text-ember-500">Today</span>}
                    </span>
                    <span className={i === todayIndex ? 'text-ember-700' : 'text-charcoal-500'}>
                      {entry.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Location */}
          <Reveal delay={150}>
            <div className="h-full rounded-2xl border border-charcoal-100 bg-cream p-8">
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-ember-600" />
                <h3 className="text-xl font-semibold text-charcoal-900">Find Us</h3>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-600">{restaurantInfo.address}</p>

              {/* Map placeholder */}
              <div className="mt-6 overflow-hidden rounded-xl border border-charcoal-200">
                <iframe
                  title="Restaurant location map"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=-122.68,45.51,-122.66,45.53&layer=mapnik&marker=45.52,-122.67`}
                  className="h-48 w-full"
                  loading="lazy"
                  style={{ border: 0 }}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${restaurantInfo.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1"
                >
                  <ArrowRight className="h-4 w-4" />
                  Get Directions
                </a>
                <a
                  href={`https://wa.me/${restaurantInfo.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={300}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-charcoal-900 to-charcoal-800 p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-2xl font-semibold text-white">Ready to join us?</h3>
              <p className="mt-2 text-charcoal-300">Book your table and experience fire-first dining tonight.</p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary flex-shrink-0"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
