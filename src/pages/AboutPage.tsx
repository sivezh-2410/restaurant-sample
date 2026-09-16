import { Flame, Leaf, Sparkles, UtensilsCrossed, Award, Wine, Target, Heart, Eye } from 'lucide-react';
import { timeline, highlights } from '@/data/restaurant';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame, Leaf, Wine, Award, Sparkles, UtensilsCrossed,
};

const philosophy = [
  { icon: Target, title: 'Intention', text: 'Every ingredient on the plate is there for a reason — flavor, texture, or story.' },
  { icon: Leaf, title: 'Sustainability', text: 'We work with farms that practice regenerative agriculture and never waste what we grow.' },
  { icon: Heart, title: 'Hospitality', text: 'A great meal is about more than food. It\'s about how you feel from the moment you walk in.' },
  { icon: Eye, title: 'Transparency', text: 'Our open kitchen means you see everything. No secrets, just craft.' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal-950 py-20 text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600"
            alt="Chefs cooking in a contemporary open kitchen"
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 to-charcoal-950" />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-saffron-300 animate-fade-down">
            Our Story
          </p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl animate-fade-up">
            Born from Fire
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/12193823/pexels-photo-12193823.jpeg?auto=compress&cs=tinysrgb&w=940&h=940"
                  alt="Chefs working in a modern stainless steel kitchen"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <SectionHeading
                  eyebrow="How It Began"
                  title="From Pop-Up to Portland Icon"
                  align="left"
                />
                <div className="mt-6 space-y-4 text-charcoal-600">
                  <p>
                    In 2015, Chef Aiden Rourke started cooking pop-up dinners in a converted warehouse
                    on weekends. Word spread quickly — the fire-cooked food, the intimate atmosphere,
                    the sense that something special was happening.
                  </p>
                  <p>
                    Two years later, Saffron &amp; Ember opened its permanent home on Maple Street with
                    a custom-built oak-fired hearth at the center of an open kitchen. The philosophy
                    was simple: source the best local ingredients, cook them over real fire, and let
                    the flavors speak for themselves.
                  </p>
                  <p>
                    Today, we&apos;re proud to be part of Portland&apos;s vibrant food community —
                    recognized by the Michelin Guide, but more importantly, loved by the guests who
                    keep coming back.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="https://images.pexels.com/photos/31566104/pexels-photo-31566104.jpeg?auto=compress&cs=tinysrgb&w=940&h=1100"
                    alt="Chef Aiden Rourke portrait"
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <SectionHeading
                  eyebrow="Meet the Chef"
                  title="Aiden Rourke"
                  align="left"
                />
                <p className="mt-2 text-lg font-medium text-ember-600">Executive Chef &amp; Founder</p>
                <div className="mt-6 space-y-4 text-charcoal-600">
                  <p>
                    Aiden&apos;s cooking career began in his grandmother&apos;s kitchen in County Cork,
                    Ireland, where he learned that food cooked over an open flame simply tastes better.
                    After training in Dublin and Copenhagen, he moved to Portland to pursue his vision
                    of a restaurant built entirely around fire.
                  </p>
                  <p>
                    His approach is rooted in respect — for the farmers who grow our food, for the
                    animals we cook, and for the guests who trust us with their evening. He still
                    works the hearth most nights.
                  </p>
                </div>
                <blockquote className="mt-6 border-l-4 border-ember-500 pl-4 text-lg italic text-charcoal-700">
                  &ldquo;Fire doesn&apos;t just cook food. It transforms it. That transformation is
                  what I&apos;m chasing every single night.&rdquo;
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-charcoal-950 text-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What We Believe"
            title="Our Philosophy"
            description="Four principles that guide every decision we make, from sourcing to plating."
            light
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-charcoal-800 bg-charcoal-900 p-6 transition-colors hover:border-ember-600">
                  <item.icon className="h-8 w-8 text-ember-500" />
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-400">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Restaurant Highlights"
            title="What Makes Us Different"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Flame;
              return (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="group h-full rounded-2xl border border-charcoal-100 bg-white p-6 transition-all duration-300 hover:border-ember-200 hover:shadow-lg">
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
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Journey"
            title="A Timeline"
            description="From a warehouse pop-up to a Portland institution."
          />
          <div className="mt-16">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-ember-200 sm:left-1/2 sm:-translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((entry, i) => (
                  <Reveal key={entry.year} delay={i * 80}>
                    <div className={`relative flex items-start gap-6 sm:w-1/2 ${
                      i % 2 === 0 ? 'sm:ml-auto sm:flex-row-reverse sm:pl-8' : 'sm:mr-auto sm:pr-8'
                    }`}>
                      {/* Dot */}
                      <div className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-ember-500 bg-cream sm:left-1/2 sm:-translate-x-1/2" />

                      {/* Content */}
                      <div className={`ml-12 sm:ml-0 ${i % 2 === 0 ? 'sm:text-left' : 'sm:text-right'}`}>
                        <span className="inline-block rounded-full bg-ember-600 px-4 py-1 text-sm font-semibold text-white">
                          {entry.year}
                        </span>
                        <h3 className="mt-3 text-xl font-semibold text-charcoal-900">{entry.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{entry.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
