import { Flame, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import type { PageId } from './Navbar';
import { restaurantInfo } from '@/data/restaurant';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-charcoal-950 text-charcoal-300">
      <div className="container-custom mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Flame className="h-7 w-7 text-ember-500" />
              <span className="font-serif text-xl font-semibold text-white">
                Saffron <span className="text-ember-500">&amp;</span> Ember
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-400">
              Where fire meets flavor. A modern fine-dining experience in the heart of Portland, built around an open-flame kitchen.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-charcoal-800 p-2.5 text-charcoal-300 transition-colors hover:bg-ember-600 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-charcoal-800 p-2.5 text-charcoal-300 transition-colors hover:bg-ember-600 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={restaurantInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-charcoal-800 p-2.5 text-charcoal-300 transition-colors hover:bg-ember-600 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {([
                { id: 'home', label: 'Home' },
                { id: 'menu', label: 'Menu' },
                { id: 'about', label: 'About' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'contact', label: 'Contact' },
              ] as { id: PageId; label: string }[]).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-charcoal-400 transition-colors hover:text-ember-500"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-ember-500" />
                <span className="text-charcoal-400">{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-ember-500" />
                <a href={`tel:${restaurantInfo.phone}`} className="text-charcoal-400 transition-colors hover:text-ember-500">
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-ember-500" />
                <a href={`mailto:${restaurantInfo.email}`} className="text-charcoal-400 transition-colors hover:text-ember-500">
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-charcoal-400">
              <li><span className="text-charcoal-500">Mon</span> — Closed</li>
              <li><span className="text-charcoal-500">Tue – Wed</span> — 5pm–10pm</li>
              <li><span className="text-charcoal-500">Thu</span> — 5pm–10:30pm</li>
              <li><span className="text-charcoal-500">Fri – Sat</span> — 4pm–11:30pm</li>
              <li><span className="text-charcoal-500">Sun</span> — 4pm–9pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal-800 pt-6 text-center text-xs text-charcoal-500">
          <p>&copy; {new Date().getFullYear()} Saffron &amp; Ember. All rights reserved. Crafted with fire and care.</p>
        </div>
      </div>
    </footer>
  );
}
