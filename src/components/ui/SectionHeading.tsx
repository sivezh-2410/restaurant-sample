import { useEffect, useRef, useState } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      {eyebrow && (
        <p className={`mb-3 text-sm font-medium uppercase tracking-[0.2em] ${light ? 'text-saffron-300' : 'text-ember-600'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-charcoal-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-charcoal-200' : 'text-charcoal-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
