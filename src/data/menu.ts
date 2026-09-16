import type { MenuItem, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'starters',
    label: 'Starters',
    description: 'Small plates designed to awaken the palate and set the tone for the evening.',
  },
  {
    id: 'main-course',
    label: 'Main Course',
    description: 'Bold, fire-kissed dishes that showcase our commitment to seasonal ingredients.',
  },
  {
    id: 'vegetarian',
    label: 'Vegetarian',
    description: 'Garden-forward creations that prove vegetables deserve the spotlight.',
  },
  {
    id: 'desserts',
    label: 'Desserts',
    description: 'House-made finishes that balance sweetness with a touch of smoke.',
  },
  {
    id: 'beverages',
    label: 'Beverages',
    description: 'Craft cocktails, curated wines, and non-alcoholic pairings.',
  },
];

export const menuItems: MenuItem[] = [
  // --- Starters ---
  {
    id: 's1',
    name: 'Ember-Charred Octopus',
    description: 'Spanish octopus with smoked paprika oil, fingerling potatoes, and charred lemon.',
    price: 18,
    image: 'https://images.pexels.com/photos/15671371/pexels-photo-15671371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'starters',
    tags: ['Signature'],
  },
  {
    id: 's2',
    name: 'Saffron Arancini',
    description: 'Crispy risotto spheres infused with saffron, served with saffron aioli.',
    price: 14,
    image: 'https://images.pexels.com/photos/12775025/pexels-photo-12775025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'starters',
  },
  {
    id: 's3',
    name: 'Heirloom Tomato Bruschetta',
    description: 'Toasted sourdough, heirloom tomatoes, basil oil, and aged balsamic.',
    price: 12,
    image: 'https://images.pexels.com/photos/6660186/pexels-photo-6660186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'starters',
  },
  {
    id: 's4',
    name: 'Seared Scallops',
    description: 'Pan-seared diver scallops with cauliflower purée and brown butter caper sauce.',
    price: 22,
    image: 'https://images.pexels.com/photos/12107010/pexels-photo-12107010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'starters',
    tags: ['Chef\'s Pick'],
  },
  {
    id: 's5',
    name: 'Tuna Tartare',
    description: 'Hand-cut yellowfin tuna, avocado, crisp wonton, and yuzu-soy dressing.',
    price: 20,
    image: 'https://images.pexels.com/photos/34759402/pexels-photo-34759402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'starters',
  },
  {
    id: 's6',
    name: 'Antipasto Platter',
    description: 'Cured meats, artisanal cheeses, marinated olives, and house-made focaccia.',
    price: 24,
    image: 'https://images.pexels.com/photos/28992220/pexels-photo-28992220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'starters',
  },

  // --- Main Course ---
  {
    id: 'm1',
    name: 'Fire-Grilled Ribeye',
    description: '14oz grass-fed ribeye, flame-grilled over oak, with truffle butter and rosemary salt.',
    price: 48,
    image: 'https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'main-course',
    tags: ['Signature'],
  },
  {
    id: 'm2',
    name: 'Smoked Lamb Chops',
    description: 'Australian lamb rack with smoked eggplant purée, mint jus, and pomegranate seeds.',
    price: 42,
    image: 'https://images.pexels.com/photos/8840896/pexels-photo-8840896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'main-course',
  },
  {
    id: 'm3',
    name: 'Seared Tuna Steak',
    description: 'Sesame-crusted tuna with wasabi mashed potatoes, pickled ginger, and soy reduction.',
    price: 38,
    image: 'https://images.pexels.com/photos/4869427/pexels-photo-4869427.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'main-course',
  },
  {
    id: 'm4',
    name: 'Oak-Grilled Sirloin',
    description: '10oz dry-aged sirloin with roasted bone marrow and red wine jus.',
    price: 44,
    image: 'https://images.pexels.com/photos/26150616/pexels-photo-26150616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'main-course',
    tags: ['Chef\'s Pick'],
  },
  {
    id: 'm5',
    name: 'Braised Short Rib',
    description: '48-hour braised beef short rib, creamy polenta, gremolata, and barolo reduction.',
    price: 40,
    image: 'https://images.pexels.com/photos/5395180/pexels-photo-5395180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'main-course',
  },
  {
    id: 'm6',
    name: 'Herb-Crusted Steak',
    description: 'New York strip with roasted potatoes, cherry tomatoes, and herb butter.',
    price: 46,
    image: 'https://images.pexels.com/photos/5638543/pexels-photo-5638543.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'main-course',
  },

  // --- Vegetarian ---
  {
    id: 'v1',
    name: 'Garden Vegetable Tartare',
    description: 'Diced seasonal vegetables, mustard vinaigrette, crisp bread, and microgreens.',
    price: 16,
    image: 'https://images.pexels.com/photos/7627437/pexels-photo-7627437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'vegetarian',
    tags: ['Vegan'],
  },
  {
    id: 'v2',
    name: 'Charred Paneer Skewers',
    description: 'Grilled paneer and vegetables with saffron-yogurt marinade and mint chutney.',
    price: 18,
    image: 'https://images.pexels.com/photos/8414639/pexels-photo-8414639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'vegetarian',
  },
  {
    id: 'v3',
    name: 'Zucchini Carpaccio',
    description: 'Shaved zucchini, pine nuts, basil, lemon zest, and aged parmesan.',
    price: 15,
    image: 'https://images.pexels.com/photos/8696526/pexels-photo-8696526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'vegetarian',
  },
  {
    id: 'v4',
    name: 'Avocado & Greens',
    description: 'Grilled avocado, arugula, heirloom radish, and citrus-herb dressing.',
    price: 14,
    image: 'https://images.pexels.com/photos/24770161/pexels-photo-24770161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'vegetarian',
    tags: ['Vegan'],
  },
  {
    id: 'v5',
    name: 'Smoked Tofu Plate',
    description: 'Grilled tofu, arugula, roasted peppers, and smoked paprika oil.',
    price: 16,
    image: 'https://images.pexels.com/photos/33474056/pexels-photo-33474056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'vegetarian',
    tags: ['Vegan'],
  },
  {
    id: 'v6',
    name: 'Seasonal Vegetable Bowl',
    description: 'Roasted vegetables, saffron rice, and herb-infused olive oil.',
    price: 18,
    image: 'https://images.pexels.com/photos/33776459/pexels-photo-33776459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'vegetarian',
  },

  // --- Desserts ---
  {
    id: 'd1',
    name: 'Crème Brûlée',
    description: 'Tahitian vanilla custard with a caramelized sugar crust and fresh berries.',
    price: 12,
    image: 'https://images.pexels.com/photos/5471996/pexels-photo-5471996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'desserts',
    tags: ['Signature'],
  },
  {
    id: 'd2',
    name: 'Cherry Cheesecake',
    description: 'New York-style cheesecake with warm cherry compote and mint.',
    price: 11,
    image: 'https://images.pexels.com/photos/38495630/pexels-photo-38495630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'desserts',
  },
  {
    id: 'd3',
    name: 'Chocolate & Strawberry',
    description: 'Dark chocolate ganache, fresh strawberries, and edible flowers.',
    price: 13,
    image: 'https://images.pexels.com/photos/33731580/pexels-photo-33731580.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'desserts',
  },
  {
    id: 'd4',
    name: 'Mint Chocolate Plate',
    description: 'Mint ice cream, chocolate crumble, and cherry sauce.',
    price: 10,
    image: 'https://images.pexels.com/photos/39332801/pexels-photo-39332801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'desserts',
  },
  {
    id: 'd5',
    name: 'Berry Pastry Trio',
    description: 'Three mini pastries with mascarpone, seasonal berries, and powdered sugar.',
    price: 12,
    image: 'https://images.pexels.com/photos/15671425/pexels-photo-15671425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'desserts',
  },
  {
    id: 'd6',
    name: 'Panna Cotta',
    description: 'Vanilla bean panna cotta with fresh fruit and berry coulis.',
    price: 10,
    image: 'https://images.pexels.com/photos/5640039/pexels-photo-5640039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'desserts',
  },

  // --- Beverages ---
  {
    id: 'b1',
    name: 'Ember Old Fashioned',
    description: 'Smoked bourbon, demerara, orange bitters, and a charred oak cube.',
    price: 16,
    image: 'https://images.pexels.com/photos/36189461/pexels-photo-36189461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'beverages',
    tags: ['Signature'],
  },
  {
    id: 'b2',
    name: 'Saffron Citrus Spritz',
    description: 'Saffron-infused gin, blood orange, prosecco, and soda.',
    price: 14,
    image: 'https://images.pexels.com/photos/36189465/pexels-photo-36189465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'beverages',
  },
  {
    id: 'b3',
    name: 'Classic Martini',
    description: 'Botanical gin, dry vermouth, and castelvetrano olives.',
    price: 15,
    image: 'https://images.pexels.com/photos/36189464/pexels-photo-36189464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'beverages',
  },
  {
    id: 'b4',
    name: 'Garden Collins',
    description: 'Vodka, cucumber, basil, lime, and elderflower tonic.',
    price: 13,
    image: 'https://images.pexels.com/photos/10499359/pexels-photo-10499359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'beverages',
  },
  {
    id: 'b5',
    name: 'Craft Cocktail Flight',
    description: 'Three seasonal cocktails curated by our bar team.',
    price: 22,
    image: 'https://images.pexels.com/photos/21176018/pexels-photo-21176018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'beverages',
    tags: ['Chef\'s Pick'],
  },
  {
    id: 'b6',
    name: 'Saffron Sunset Mocktail',
    description: 'Saffron syrup, orange, ginger, and sparkling water.',
    price: 9,
    image: 'https://images.pexels.com/photos/31251025/pexels-photo-31251025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'beverages',
    tags: ['Non-Alcoholic'],
  },
];

export const featuredItems: MenuItem[] = [
  menuItems[0], // Ember-Charred Octopus
  menuItems[6], // Fire-Grilled Ribeye
  menuItems[12], // Garden Vegetable Tartare
  menuItems[18], // Crème Brûlée
  menuItems[24], // Ember Old Fashioned
  menuItems[8], // Smoked Lamb Chops
];
