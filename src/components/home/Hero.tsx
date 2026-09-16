import { useEffect, useState } from 'react';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import type { PageId } from '@/components/layout/Navbar';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onReserve: () => void;
}

export default function Hero({ onNavigate, onReserve }: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Elegant restaurant interior with candlelight"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/50 to-charcoal-950/80" />
      </div>

      {/* Content */}
      <div className={`relative z-10 container-custom mx-auto px-4 text-center sm:px-6 lg:px-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className={`mb-4 text-sm font-medium uppercase tracking-[0.3em] text-saffron-300 transition-all delay-200 duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          Portland&apos;s Fire-First Kitchen
        </p>
        <h1 className={`text-5xl font-semibold leading-tight text-white text-balance sm:text-6xl lg:text-7xl transition-all delay-300 duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Where Fire Meets
          <span className="block italic text-ember-400">Flavor</span>
        </h1>
        <p className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed text-charcoal-200 transition-all delay-500 duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          A modern fine-dining experience built around an open-flame hearth. Seasonal ingredients, bold flavors, and a warm, unforgettable atmosphere.
        </p>
        <div className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all delay-700 duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => onNavigate('menu')}
            className="btn-primary group"
          >
            View Menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={onReserve}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3 text-sm font-medium uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            <UtensilsCrossed className="h-4 w-4" />
            Reserve a Table
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all delay-1000 duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
