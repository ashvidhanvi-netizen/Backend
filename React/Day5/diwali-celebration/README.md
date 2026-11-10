# My Diwali – A Festival of Lights 🪔

A personal, responsive Diwali celebration website created with React.js by **Ashvi**.

## 🌟 Features

- **Festive Aesthetic**: Deep royal navy and purple palette, luminous gold highlights, warm amber glows, subtle floating embers, and traditional rangoli mandala accents.
- **8 Dedicated Sections**:
  1. **Home / Hero Section**: Centerpiece animated diya with flickering flame, golden typography, and smooth scroll exploration button.
  2. **About Diwali ("The Festival of Lights")**: Spiritual and cultural significance covering the victory of light over darkness, good over evil, happiness, prosperity, and family gatherings.
  3. **My Diwali Celebration**: Ashvi's personal first-person story travelling to the native place, enjoying homemade and purchased sweets, fireworks, and family warmth.
  4. **Diwali Moments – Photo Gallery**: Modern responsive gallery with filter tabs and designated placeholders for *Diya decorations, Rangoli, Homemade sweets, Purchased sweets, Crackers and fireworks, Family celebration, and Native place celebration*.
  5. **Beautiful Traditions of Diwali**: 5 cards detailing Lighting Diyas, Making Rangoli, Sharing Sweets, Celebrating with Family, and Fireworks.
  6. **Special Diwali Memories ("Memories That Make Me Smile")**: Warm reflective personal quote card and scrapbook photo frame.
  7. **Interactive Diwali Experience**: "Light a Diya" feature using React `useState` that ignites the flame and displays the blessing: *"May your life always shine with happiness and positivity!"*
  8. **Festive Footer**: Warm greetings, quick navigation, back-to-top button, and *"Made with ❤️ by Ashvi"*.
- **Interactive Lightbox Modal**: Click any photo across the website to view in full resolution with captions and keyboard navigation (Esc, Arrow keys).
- **Responsive Navigation**: Desktop sticky bar with active section indicator and mobile hamburger drawer.

## 📁 Project Structure

```text
diwali-celebration/
├── public/
│   └── images/
│       └── personal/              # Ashvi's personal celebration photographs
│           ├── family-rangoli-celebration.jpg
│           ├── festive-thali-diyas.jpg
│           ├── motichoor-laddoo.jpg
│           ├── coconut-rava-laddoo.png
│           ├── festive-sweets-platter.png
│           ├── gulab-jamun.jpg
│           ├── ornate-single-diya.png
│           └── sparkling-diyas-rangoli.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Responsive sticky navigation & mobile drawer
│   │   ├── Hero.jsx               # Landing hero with animated centerpiece diya
│   │   ├── About.jsx              # The Festival of Lights & 4 core pillars
│   │   ├── MyCelebration.jsx      # Ashvi's personal celebration diary
│   │   ├── PhotoGallery.jsx       # Category filter & responsive photo grid
│   │   ├── Traditions.jsx         # 5 tradition cards with photography & icons
│   │   ├── Memories.jsx           # Warm personal quote & keepsake frame
│   │   ├── InteractiveDiya.jsx    # React useState "Light a Diya" feature
│   │   ├── Footer.jsx             # Festive footer & Ashvi credit
│   │   ├── FloatingParticles.jsx  # Floating golden ember particles
│   │   └── LightboxModal.jsx      # Fullscreen image viewer
│   ├── data/
│   │   ├── galleryData.js         # Gallery items & placeholder definitions
│   │   └── traditionsData.js      # Traditions content & photography
│   ├── App.css                    # Complete festive styling & responsive queries
│   ├── index.css                  # Global variables, typography & base resets
│   ├── App.jsx                    # Root component coordinating state
│   └── main.jsx                   # React entry point
└── index.html                     # HTML head, Google Fonts, and title
```

## 📸 How to Replace or Add Photographs

To replace any placeholder image with your own photographs:
1. Place your new image file in `public/images/personal/` (or `public/images/`).
2. Open [src/data/galleryData.js](file:///C:/Users/acer/.gemini/antigravity/scratch/diwali-celebration/src/data/galleryData.js).
3. Update the `image` path for the corresponding placeholder slot:
   ```javascript
   {
     id: 1,
     title: "Diya Decorations",
     category: "diyas",
     image: "/images/personal/your-new-image.jpg",
     caption: "Your personal caption..."
   }
   ```
The website will immediately reflect the changes!

## 🚀 Running the Project

From the project root:
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build
```
