export type MenuCategory = 'starters' | 'main-course' | 'vegetarian' | 'desserts' | 'beverages';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  tags?: string[];
}

export interface Category {
  id: MenuCategory;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'food' | 'interior' | 'kitchen';
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface Speciality {
  icon: string;
  title: string;
  description: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
  isToday?: boolean;
}
