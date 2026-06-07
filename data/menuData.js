// data/menuData.js

export const categories = [
  { id: 'pizza', label: 'Pizza', emoji: '🍕' },
  { id: 'burger', label: 'Burger', emoji: '🍔' },
  { id: 'drinks', label: 'Drinks', emoji: '🥤' },
  { id: 'meals', label: 'Value Meals', emoji: '🔥' },
];

// ---------- PIZZA (4 items) ----------
const pizzas = [
  {
    slug: 'margherita-pizza',
    name: 'Margherita Pizza',
    category: 'pizza',
    price: 199,
    originalPrice: null,
    description: 'Classic cheese and tomato sauce on a thin crust.',
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Fresh basil', 'Olive oil'],
    nutrition: { calories: 620, protein: '22g', fat: '18g', carbs: '85g' },
    protein: '22g',
    badge: 'Best Seller',
    image: '/margherita.png',            // fixed path & extension
    emoji: '🍕',
    color: '#FEF3C7',
  },
 
  {
    slug: 'bbq-chicken-pizza',
    name: 'BBQ Chicken Pizza',
    category: 'pizza',
    price: 329,
    originalPrice: 359,
    description: 'Grilled chicken, BBQ sauce, red onions and coriander.',
    ingredients: ['Pizza dough', 'BBQ sauce', 'Grilled chicken', 'Red onions', 'Coriander', 'Mozzarella'],
    nutrition: { calories: 720, protein: '32g', fat: '24g', carbs: '90g' },
    protein: '32g',
    badge: 'Spicy',
    image: '/bbq-chicken.png',           // fixed
    emoji: '🍗',
    color: '#FEE2E2',
  },
  {
    slug: 'chicken-supreme-pizza',
    name: 'Chicken Supreme Pizza',
    category: 'pizza',
    price: 379,
    originalPrice: 399,
    description: 'Loaded with chicken sausage, grilled chicken, bell peppers and onions.',
    ingredients: ['Pizza dough', 'Tomato sauce', 'Chicken sausage', 'Grilled chicken', 'Bell peppers', 'Onions', 'Mozzarella'],
    nutrition: { calories: 790, protein: '38g', fat: '28g', carbs: '92g' },
    protein: '38g',
    badge: 'Ultimate',
    image: '/chicken-supreme.png',       // fixed
    emoji: '🐔',
    color: '#FEF9C3',
  },
];

// ---------- BURGERS (2 items) ----------
const burgers = [
  {
    slug: 'veg-burger',
    name: 'Veg Burger',
    category: 'burger',
    price: 129,
    originalPrice: 149,
    description: 'Crispy veg patty, lettuce, tomato, onion and special sauce.',
    ingredients: ['Veg patty', 'Lettuce', 'Tomato', 'Onion', 'Special sauce', 'Brioche bun'],
    nutrition: { calories: 450, protein: '12g', fat: '16g', carbs: '62g' },
    protein: '12g',
    badge: 'Popular',
    image: '/veg-burger.png',            // fixed
    emoji: '🍔',
    color: '#E0F2FE',
  },
  {
    slug: 'chicken-burger',
    name: 'Chicken Burger',
    category: 'burger',
    price: 179,
    originalPrice: 199,
    description: 'Crispy fried chicken patty, lettuce, mayo and pickles.',
    ingredients: ['Chicken patty', 'Lettuce', 'Mayonnaise', 'Pickles', 'Sesame bun'],
    nutrition: { calories: 520, protein: '22g', fat: '20g', carbs: '58g' },
    protein: '22g',
    badge: 'Hot Seller',
    image: '/chicken-burger.png',        // fixed
    emoji: '🍔',
    color: '#FEE2E2',
  },
];

// ---------- DRINKS (2 items) – Catch Cola ----------
const drinks = [
  {
    slug: 'catch-cola-small',
    name: 'Catch Cola (Small)',
    category: 'drinks',
    price: 49,
    originalPrice: 59,
    description: '250ml classic Catch Cola – crisp and refreshing.',
    ingredients: ['Carbonated water', 'Sugar', 'Caffeine', 'Natural flavors'],
    nutrition: { calories: 105, protein: '0g', fat: '0g', carbs: '27g' },
    protein: '0g',
    badge: 'Chilled',
    image: '/catch-cola-small.png',      // fixed
    emoji: '🥤',
    color: '#D1FAE5',
  },
  {
    slug: 'catch-cola-large',
    name: 'Catch Cola (Large)',
    category: 'drinks',
    price: 79,
    originalPrice: 99,
    description: '500ml Catch Cola – extra fizz, extra chill.',
    ingredients: ['Carbonated water', 'Sugar', 'Caffeine', 'Natural flavors'],
    nutrition: { calories: 210, protein: '0g', fat: '0g', carbs: '54g' },
    protein: '0g',
    badge: 'Best Value',
    image: '/catch-cola-large.png',      // fixed
    emoji: '🥤',
    color: '#D1FAE5',
  },
];

// ---------- VALUE MEALS (combo meals) ----------
const meals = [
  {
    slug: 'burger-cola',
    name: 'Burger + Cola',
    category: 'meals',
    price: 169,
    originalPrice: 199,
    description: 'Any burger + Small Catch Cola. Save ₹30!',
    ingredients: ['Burger of your choice', 'Small Catch Cola'],
    nutrition: { calories: '~550', protein: '~12g', fat: '~16g', carbs: '~89g' },
    protein: 'Combo',
    badge: 'Save ₹30',
    image: '/burger-cola.png',           // fixed
    emoji: '🍔🥤',
    color: '#F3E8FF',
  },
  {
    slug: 'burger-2-cola',
    name: 'Burger + 2 Cola',
    category: 'meals',
    price: 219,
    originalPrice: 259,
    description: 'Any burger + Two Small Catch Colas. Perfect for two.',
    ingredients: ['Burger of your choice', '2 Small Catch Colas'],
    nutrition: { calories: '~655', protein: '~12g', fat: '~16g', carbs: '~143g' },
    protein: 'Combo',
    badge: 'Share & Save',
    image: '/burger-2cola.png',          // fixed
    emoji: '🍔🥤🥤',
    color: '#F3E8FF',
  },
  {
    slug: 'pizza-cola',
    name: 'Pizza + Cola',
    category: 'meals',
    price: 249,
    originalPrice: 289,
    description: 'Any regular pizza + Small Catch Cola.',
    ingredients: ['Pizza of your choice', 'Small Catch Cola'],
    nutrition: { calories: '~725', protein: '~22g', fat: '~18g', carbs: '~112g' },
    protein: 'Combo',
    badge: 'Best Deal',
    image: '/pizza-cola.png',            // fixed
    emoji: '🍕🥤',
    color: '#F3E8FF',
  },
  {
    slug: 'pizza-2-cola',
    name: 'Pizza + 2 Cola',
    category: 'meals',
    price: 299,
    originalPrice: 349,
    description: 'Any regular pizza + Two Small Catch Colas.',
    ingredients: ['Pizza of your choice', '2 Small Catch Colas'],
    nutrition: { calories: '~830', protein: '~22g', fat: '~18g', carbs: '~166g' },
    protein: 'Combo',
    badge: 'Party Pack',
    image: '/pizza-2cola.png',           // fixed
    emoji: '🍕🥤🥤',
    color: '#F3E8FF',
  },
  {
    slug: 'burger-pizza-cola',
    name: 'Burger + Pizza + Cola',
    category: 'meals',
    price: 399,
    originalPrice: 459,
    description: 'Any burger + Any regular pizza + Small Catch Cola.',
    ingredients: ['Burger of your choice', 'Pizza of your choice', 'Small Catch Cola'],
    nutrition: { calories: '~1170', protein: '~34g', fat: '~34g', carbs: '~150g' },
    protein: 'Combo',
    badge: 'Feast for One',
    image: '/burger-pizza-1cola.png',    // fixed (matches your file name)
    emoji: '🍔🍕🥤',
    color: '#F3E8FF',
  },
  {
    slug: 'burger-pizza-2-cola',
    name: 'Burger + Pizza + 2 Cola',
    category: 'meals',
    price: 459,
    originalPrice: 529,
    description: 'Any burger + Any regular pizza + Two Catch Colas. Great for sharing!',
    ingredients: ['Burger of your choice', 'Pizza of your choice', '2 Small Catch Colas'],
    nutrition: { calories: '~1275', protein: '~34g', fat: '~34g', carbs: '~204g' },
    protein: 'Combo',
    badge: 'Share & Enjoy',
    image: '/burger-pizza-2cola.png',    // fixed
    emoji: '🍔🍕🥤🥤',
    color: '#F3E8FF',
  },
];

const allItems = [...pizzas, ...burgers, ...drinks, ...meals];

export function getItemsByCategory(categoryId) {
  if (categoryId === 'featured') return getFeaturedItems();
  return allItems.filter(item => item.category === categoryId);
}

export function getFeaturedItems(limit = 6) {
  return allItems.slice(0, limit);
}

export function getItemBySlug(slug) {
  return allItems.find(item => item.slug === slug);
}

export { allItems, pizzas, burgers, drinks, meals };