import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import type { PageId } from '@/components/layout/Navbar';

interface AboutPreviewProps {
  onNavigate: (page: PageId) => void;
}

export default function AboutPreview({ onNavigate }: AboutPreviewProps) {
  return (
    <section className="section-padding bg-charcoal-950 text-white">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/2977514/pexels-photo-2977514.jpeg?auto=compress&cs=tinysrgb&w=940&h=940"
                  alt="Chef preparing a gourmet dish"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-ember-600 p-6 text-center shadow-xl sm:block">
                <p className="text-3xl font-semibold text-white">11</p>
                <p className="text-xs uppercase tracking-wider text-ember-100">Years of Fire</p>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={150}>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="A Passion Born in Fire"
                description="What started as a series of pop-up dinners in a converted warehouse has grown into one of Portland's most beloved dining destinations."
                light
                align="left"
              />
              <p className="mt-6 leading-relaxed text-charcoal-300">
                Chef Aiden Rourke founded Saffron &amp; Ember in 2017 with a simple vision: to cook
                over real fire, source locally, and let the ingredients speak. Our custom oak-fired
                hearth remains the heart of the kitchen — every dish carries its warmth.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal-300">
                We&apos;ve been recognized by the Michelin Guide and named Best New Restaurant, but
                our greatest reward is the guests who return week after week.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all hover:border-ember-500 hover:bg-ember-600 focus:outline-none focus:ring-2 focus:ring-ember-500"
              >
                Read Our Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
