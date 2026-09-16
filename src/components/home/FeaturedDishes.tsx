import { ArrowRight } from 'lucide-react';
import { featuredItems } from '@/data/menu';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import type { PageId } from '@/components/layout/Navbar';

interface FeaturedDishesProps {
  onNavigate: (page: PageId) => void;
}

export default function FeaturedDishes({ onNavigate }: FeaturedDishesProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="From Our Kitchen"
            title="Featured Dishes"
            description="A taste of what's on the menu this season, crafted by our chef and team."
            align="left"
          />
          <button
            onClick={() => onNavigate('menu')}
            className="group inline-flex items-center gap-2 text-sm font-medium text-ember-600 transition-colors hover:text-ember-700"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <article className="group overflow-hidden rounded-2xl bg-cream shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-charcoal-200/50">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.tags && item.tags[0] && (
                    <span className="absolute left-3 top-3 rounded-full bg-ember-600 px-3 py-1 text-xs font-medium text-white shadow-md">
                      {item.tags[0]}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-charcoal-900">{item.name}</h3>
                    <span className="flex-shrink-0 text-lg font-semibold text-ember-600">
                      ${item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
