import { Quote } from 'lucide-react';
import { testimonials } from '@/data/restaurant';
import SectionHeading from '@/components/ui/SectionHeading';
import StarRating from '@/components/ui/StarRating';
import Reveal from '@/components/ui/Reveal';

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Kind Words"
          title="What Our Guests Say"
          description="We're honored to be part of so many memorable evenings. Here's what our guests have shared."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}>
              <figure className="relative h-full rounded-2xl border border-charcoal-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-ember-100" />
                <StarRating rating={t.rating} size="sm" />
                <blockquote className="mt-4 text-base italic leading-relaxed text-charcoal-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ember-100 font-serif text-lg font-semibold text-ember-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-charcoal-900">{t.name}</p>
                    <p className="text-sm text-charcoal-400">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
