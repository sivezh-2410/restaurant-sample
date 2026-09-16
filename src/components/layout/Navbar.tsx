import { useEffect, useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';

export type PageId = 'home' | 'menu' | 'about' | 'gallery' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onReserve: () => void;
}

const navLinks: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ currentPage, onNavigate, onReserve }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setScrolled(false);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const isTransparent = currentPage === 'home' && !scrolled && !mobileOpen;
  const isSolid = !isTransparent;

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isSolid
          ? 'bg-cream/95 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-ember-500 rounded-lg"
          aria-label="Saffron & Ember home"
        >
          <Flame className={`h-7 w-7 ${isSolid ? 'text-ember-600' : 'text-ember-500'}`} />
          <span className={`font-serif text-xl font-semibold tracking-wide ${
            isSolid ? 'text-charcoal-900' : 'text-white'
          }`}>
            Saffron <span className="text-ember-500">&amp;</span> Ember
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-ember-600 focus:outline-none focus:ring-2 focus:ring-ember-500 rounded px-1 ${
                  isSolid
                    ? currentPage === link.id ? 'text-ember-600' : 'text-charcoal-700'
                    : currentPage === link.id ? 'text-saffron-300' : 'text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-ember-500 transition-all duration-300 ${
                    currentPage === link.id ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Reserve button (desktop) */}
        <button
          onClick={onReserve}
          className="hidden md:inline-flex btn-primary"
        >
          Reserve
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-lg p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-ember-500 md:hidden ${
            isSolid ? 'text-charcoal-800' : 'text-white'
          }`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-ember-50 text-ember-600'
                    : 'text-charcoal-700 hover:bg-charcoal-50'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                onReserve();
                setMobileOpen(false);
              }}
              className="btn-primary mt-2 w-full"
            >
              Reserve a Table
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
