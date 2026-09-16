import Hero from '@/components/home/Hero';
import Specialities from '@/components/home/Specialities';
import FeaturedDishes from '@/components/home/FeaturedDishes';
import AboutPreview from '@/components/home/AboutPreview';
import Testimonials from '@/components/home/Testimonials';
import HoursLocation from '@/components/home/HoursLocation';
import type { PageId } from '@/components/layout/Navbar';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onReserve: () => void;
}

export default function HomePage({ onNavigate, onReserve }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} onReserve={onReserve} />
      <Specialities />
      <FeaturedDishes onNavigate={onNavigate} />
      <AboutPreview onNavigate={onNavigate} />
      <Testimonials />
      <HoursLocation onNavigate={onNavigate} />
    </>
  );
}
