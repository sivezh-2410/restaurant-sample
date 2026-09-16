import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/restaurant';
import type { GalleryImage } from '@/types';
import Reveal from '@/components/ui/Reveal';

type FilterCategory = 'all' | GalleryImage['category'];

const filterOptions: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food' },
  { id: 'interior', label: 'Interior' },
  { id: 'kitchen', label: 'Kitchen' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + filteredImages.length) % filteredImages.length;
    });
  }, [filteredImages.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % filteredImages.length;
    });
  }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal-950 py-20 text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6327536/pexels-photo-6327536.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600"
            alt="Gourmet dish on marble table"
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 to-charcoal-950" />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-saffron-300 animate-fade-down">
            Visual Feast
          </p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl animate-fade-up">
            Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-charcoal-300 animate-fade-up animation-delay-200">
            A glimpse into our kitchen, our dining room, and the dishes that define us.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-charcoal-100 bg-cream py-6">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === opt.id
                    ? 'bg-ember-600 text-white shadow-md'
                    : 'bg-white text-charcoal-600 hover:bg-ember-50 hover:text-ember-600'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((img, i) => (
              <Reveal key={img.id} delay={(i % 6) * 80}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl"
                  aria-label={`View larger image: ${img.alt}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-charcoal-950/0 transition-colors duration-300 group-hover:bg-charcoal-950/40">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-charcoal-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View
                    </span>
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-charcoal-950/70 px-3 py-1 text-xs font-medium capitalize text-white">
                    {img.category}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/90 backdrop-blur-sm animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure
            className="max-w-4xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-h-[80vh] w-full rounded-xl object-contain animate-scale-in"
            />
            <figcaption className="mt-4 text-center text-sm text-charcoal-300">
              {filteredImages[lightboxIndex].alt}
              <span className="mt-1 block text-xs text-charcoal-500">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
