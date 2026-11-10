/**
 * Photo Gallery Data for My Diwali Website
 * 
 * Instructions to replace or add your own photos:
 * 1. Place your photo inside the `public/images/personal/` folder (or `public/images/`).
 * 2. Update the `image` path below with `/images/personal/your-file-name.jpg`.
 * 3. Update the title, category, and caption as needed.
 */

export const galleryCategories = [
  { id: 'all', label: 'All Memories' },
  { id: 'family', label: 'Family & Native Place' },
  { id: 'sweets', label: 'Festive Sweets' },
  { id: 'diyas', label: 'Diyas & Rangoli' },
  { id: 'crackers', label: 'Crackers & Fireworks' }
];

export const galleryItems = [
  {
    id: 1,
    title: "Diya Decorations",
    category: "diyas",
    tag: "Diyas & Lights",
    image: "/images/personal/sparkling-diyas-rangoli.jpg",
    placeholderType: "Diya decorations",
    caption: "A sparkling row of ornate golden diyas illuminating our home with warmth and peace.",
    isPersonal: true
  },
  {
    id: 2,
    title: "Vibrant Lotus Rangoli",
    category: "diyas",
    tag: "Rangoli & Diyas",
    image: "/images/personal/diwali-lotus-rangoli.jpg",
    placeholderType: "Rangoli",
    caption: "An intricate lotus floral rangoli beautifully illuminated with warm glowing clay diyas and marigolds.",
    isPersonal: true
  },
  {
    id: 3,
    title: "Mom's Homemade Sweets",
    category: "sweets",
    tag: "Homemade Delicacies",
    image: "/images/personal/coconut-rava-laddoo.png",
    placeholderType: "Homemade sweets",
    caption: "Delicious handmade laddoos lovingly prepared at home by Mom, the true taste of Diwali.",
    isPersonal: true
  },
  {
    id: 4,
    title: "Our Favourite Purchased Sweets",
    category: "sweets",
    tag: "Purchased Sweets",
    image: "/images/personal/motichoor-laddoo.jpg",
    placeholderType: "Purchased sweets",
    caption: "Mouth-watering golden motichoor laddoos bought from our favourite traditional sweet shop.",
    isPersonal: true
  },
  {
    id: 5,
    title: "Gulab Jamun Indulgence",
    category: "sweets",
    tag: "Sweet Moments",
    image: "/images/personal/gulab-jamun.jpg",
    placeholderType: "Purchased sweets",
    caption: "Soft, syrup-soaked gulab jamuns adorned with delicate silver leaf and pistachio garnish.",
    isPersonal: true
  },
  {
    id: 6,
    title: "Festive Sparklers & Phuljhadi",
    category: "crackers",
    tag: "Crackers & Fireworks",
    image: "/images/sparklers-celebration.jpg",
    placeholderType: "Crackers and fireworks",
    caption: "Radiant golden sparklers illuminating the festive night with glowing trails of light and joy.",
    isPersonal: false
  },
  {
    id: 7,
    title: "Family Celebration Moments",
    category: "family",
    tag: "Family Celebration",
    image: "/images/personal/family-rangoli-celebration.jpg",
    placeholderType: "Family celebration",
    caption: "The sheer joy of being together with family celebrating this festival of togetherness.",
    isPersonal: true
  },
  {
    id: 8,
    title: "Native Place Evening Puja",
    category: "family",
    tag: "Native Place Celebration",
    image: "/images/personal/festive-thali-diyas.jpg",
    placeholderType: "Native place celebration",
    caption: "Traditional brass thali illuminated with sacred diyas and fresh marigolds at our ancestral home.",
    isPersonal: true
  },
  {
    id: 9,
    title: "Crackers Burning in the Night Sky",
    category: "crackers",
    tag: "Crackers in Sky",
    image: "/images/crackers-burning-sky.jpg",
    placeholderType: "Crackers and fireworks",
    caption: "The night sky brilliantly captured while rockets and colorful crackers burst into vibrant cascades of golden sparks and celebration lights.",
    isPersonal: false
  },
  {
    id: 10,
    title: "Grand Sky Fireworks Display",
    category: "crackers",
    tag: "Sky Crackers",
    image: "/images/sky-crackers-burst.jpg",
    placeholderType: "Crackers and fireworks",
    caption: "Dazzling fireworks and burning crackers lighting up the city skyline during Diwali night.",
    isPersonal: false
  }
];
