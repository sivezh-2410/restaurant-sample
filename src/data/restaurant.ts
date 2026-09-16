import type { Testimonial, GalleryImage, TimelineEntry, Highlight, Speciality, OpeningHour } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Eleanor Whitfield',
    role: 'Food Critic, The Daily Plate',
    quote: 'Saffron & Ember is the most exciting restaurant to open in the city this decade. The fire-grilled ribeye is a masterclass in restraint and intensity.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Regular Guest',
    quote: 'Every visit feels like a celebration. The cocktails are inventive, the service is impeccable, and the food always exceeds expectations.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Priya Anand',
    role: 'Lifestyle Blogger',
    quote: 'The saffron-infused dishes transport you somewhere else entirely. A truly sensory dining experience from start to finish.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'James O\'Sullivan',
    role: 'Wine Enthusiast',
    quote: 'The pairing suggestions are spot on. The Ember Old Fashioned alone is worth the visit — smoky, balanced, and unforgettable.',
    rating: 4,
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.pexels.com/photos/6327536/pexels-photo-6327536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Gourmet dish on marble table with warm lighting',
    category: 'food',
  },
  {
    id: 'g2',
    src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant restaurant interior with candlelight',
    category: 'interior',
  },
  {
    id: 'g3',
    src: 'https://images.pexels.com/photos/5779781/pexels-photo-5779781.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Chef grilling meat with flames in kitchen',
    category: 'kitchen',
  },
  {
    id: 'g4',
    src: 'https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Luxurious gourmet meal with vegetables and sauce',
    category: 'food',
  },
  {
    id: 'g5',
    src: 'https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant indoor restaurant with warm lighting',
    category: 'interior',
  },
  {
    id: 'g6',
    src: 'https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Two chefs cooking in a contemporary open kitchen',
    category: 'kitchen',
  },
  {
    id: 'g7',
    src: 'https://images.pexels.com/photos/24289165/pexels-photo-24289165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Gourmet shrimp appetizer with colorful vegetables',
    category: 'food',
  },
  {
    id: 'g8',
    src: 'https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Romantic dinner table with wine glasses',
    category: 'interior',
  },
  {
    id: 'g9',
    src: 'https://images.pexels.com/photos/8629103/pexels-photo-8629103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Chef preparing food with frying pan in sleek kitchen',
    category: 'kitchen',
  },
  {
    id: 'g10',
    src: 'https://images.pexels.com/photos/8194817/pexels-photo-8194817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up of gourmet plated dish with rich sauce',
    category: 'food',
  },
  {
    id: 'g11',
    src: 'https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Sophisticated wine setting with warm lighting',
    category: 'interior',
  },
  {
    id: 'g12',
    src: 'https://images.pexels.com/photos/13971183/pexels-photo-13971183.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Chefs working in a busy kitchen with visible flames',
    category: 'kitchen',
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: '2015',
    title: 'The Spark',
    description: 'Chef Aiden Rourke begins pop-up dinners in a converted warehouse, earning a cult following for fire-cooked cuisine.',
  },
  {
    year: '2017',
    title: 'First Home',
    description: 'Saffron & Ember opens its doors on Maple Street with a 40-seat dining room and an open-flame kitchen.',
  },
  {
    year: '2019',
    title: 'Rising Star',
    description: 'Awarded "Best New Restaurant" by the City Food Guide. The tasting menu becomes a sought-after reservation.',
  },
  {
    year: '2021',
    title: 'Growing the Family',
    description: 'Expanded to include a private dining room and a dedicated cocktail bar with a curated spirits program.',
  },
  {
    year: '2023',
    title: 'A Michelin Nod',
    description: 'Received a Michelin Bib Gourmand distinction for delivering exceptional food at a remarkable value.',
  },
  {
    year: '2026',
    title: 'Today',
    description: 'Saffron & Ember continues to evolve its seasonal menu while staying true to its fire-first philosophy.',
  },
];

export const highlights: Highlight[] = [
  {
    icon: 'Flame',
    title: 'Fire-First Cooking',
    description: 'Every dish passes through our open-flame kitchen, built around a custom oak-fired hearth.',
  },
  {
    icon: 'Leaf',
    title: 'Seasonal & Local',
    description: 'We partner with regional farms and foragers to source ingredients at their absolute peak.',
  },
  {
    icon: 'Wine',
    title: 'Curated Cellar',
    description: 'A 200-label wine list and a cocktail program designed to complement every plate.',
  },
  {
    icon: 'Award',
    title: 'Award-Winning',
    description: 'Recognized by the Michelin Guide and named Best New Restaurant in 2019.',
  },
];

export const specialities: Speciality[] = [
  {
    icon: 'Flame',
    title: 'Open-Fire Grilling',
    description: 'Our oak-fired hearth is the heart of the kitchen, imparting a distinct smokiness to every dish.',
  },
  {
    icon: 'Sparkles',
    title: 'Saffron Infusions',
    description: 'We weave saffron through cocktails, starters, and desserts — a thread that ties the menu together.',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Seasonal Tasting Menu',
    description: 'A seven-course journey that changes monthly, reflecting the best of what our farms deliver.',
  },
];

export const openingHours: OpeningHour[] = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '5:00 PM – 10:00 PM' },
  { day: 'Wednesday', hours: '5:00 PM – 10:00 PM' },
  { day: 'Thursday', hours: '5:00 PM – 10:30 PM' },
  { day: 'Friday', hours: '5:00 PM – 11:30 PM' },
  { day: 'Saturday', hours: '4:00 PM – 11:30 PM' },
  { day: 'Sunday', hours: '4:00 PM – 9:00 PM' },
];

export const restaurantInfo = {
  name: 'Saffron & Ember',
  tagline: 'Where Fire Meets Flavor',
  address: '142 Maple Street, Riverside District, Portland, OR 97201',
  phone: '(503) 555-0192',
  email: 'hello@saffronandember.com',
  whatsapp: '+15035550192',
  mapQuery: '142+Maple+Street+Portland+OR+97201',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
  },
};
