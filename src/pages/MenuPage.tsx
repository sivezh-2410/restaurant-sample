import { useState, useMemo } from 'react';
import { categories, menuItems } from '@/data/menu';
import type { MenuCategory } from '@/types';
import Reveal from '@/components/ui/Reveal';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative overflow-hidden bg-charcoal-950 py-20 text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7627408/pexels-photo-7627408.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600"
            alt="Dishes on white plates in modern restaurant"
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 to-charcoal-950" />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-saffron-300 animate-fade-down">
            Our Menu
          </p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl animate-fade-up">
            A Seasonal Journey
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-charcoal-300 animate-fade-up animation-delay-200">
            Every dish is crafted to order over our oak-fired hearth. Explore by category below.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-16 z-30 border-b border-charcoal-100 bg-cream/95 backdrop-blur-md">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-ember-600 text-white shadow-md'
                  : 'bg-white text-charcoal-600 hover:bg-ember-50 hover:text-ember-600'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-ember-600 text-white shadow-md'
                    : 'bg-white text-charcoal-600 hover:bg-ember-50 hover:text-ember-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category description */}
      {activeCategoryData && (
        <div className="border-b border-charcoal-100 bg-white py-8 text-center">
          <div className="container-custom mx-auto px-4">
            <h2 className="text-2xl font-semibold text-charcoal-900">{activeCategoryData.label}</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-charcoal-500">{activeCategoryData.description}</p>
          </div>
        </div>
      )}

      {/* Menu items */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, i) => (
              <Reveal key={item.id} delay={(i % 6) * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-charcoal-200/40">
                  <div className="relative h-52 overflow-hidden">
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
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-charcoal-900">{item.name}</h3>
                      <span className="flex-shrink-0 text-lg font-semibold text-ember-600">
                        ${item.price}
                      </span>
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-500">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
