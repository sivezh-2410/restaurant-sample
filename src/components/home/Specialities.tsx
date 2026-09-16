import { Flame, Leaf, Sparkles, UtensilsCrossed, Award, Wine } from 'lucide-react';
import { highlights, specialities } from '@/data/restaurant';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Leaf,
  Wine,
  Award,
  Sparkles,
  UtensilsCrossed,
};

export default function Specialities() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          eyebrow="What Sets Us Apart"
          title="Crafted Around Fire"
          description="Our kitchen is built on a simple belief: great food comes from great ingredients, treated with respect and cooked over real flame."
        />

        {/* Highlights */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Flame;
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-charcoal-100 bg-white p-6 transition-all duration-300 hover:border-ember-200 hover:shadow-lg hover:shadow-ember-100/50">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ember-50 text-ember-600 transition-colors group-hover:bg-ember-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Specialities */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {specialities.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Flame;
            return (
              <Reveal key={item.title} delay={i * 150}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-ember-500 to-ember-700 text-white shadow-lg shadow-ember-500/30">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-500">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
