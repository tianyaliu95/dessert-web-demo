"use client"
import React, { useRef } from "react";

const PLACEHOLDER = "/pancakes1.jpg";

const MENU = [
  {
    category: "Pancakes",
    anchor: "pancakes",
    items: [
      { name: "Blueberry Cheese", desc: "Delicious pancakes with homemade blueberry sauce and fruit.", img: PLACEHOLDER },
      { name: "Classic Tiramisu", desc: "Coffee-flavored pancakes for a special weekend.", img: PLACEHOLDER },
      { name: "Cookies and Cream", desc: "Oreo pancakes with whipped cream and vanilla ice cream.", img: PLACEHOLDER },
      { name: "Crème Brulee", desc: "Fluffy pancakes topped with crystallized sugar, torched to perfection.", img: PLACEHOLDER },
      { name: "Matcha Tiramisu", desc: "Fluffy pancakes layered with matcha-infused mascarpone cream.", img: PLACEHOLDER },
      { name: "Nutella Banana Pancake", desc: "Chocolate pancakes with Nutella and banana.", img: PLACEHOLDER },
      { name: "Raspberry Caramelized", desc: "Japanese fluffy pancakes, whipped cream, raspberry sauce and caramelized bananas.", img: PLACEHOLDER },
      { name: "Signature Pancake", desc: "Fresh cream and fruits on top. Simple yet delicious!", img: PLACEHOLDER },
      { name: "Strawberry", desc: "Juicy strawberries, light syrup and powdered sugar.", img: PLACEHOLDER },
    ],
    tabImg: PLACEHOLDER,
  },
  {
    category: "Cheesecakes",
    anchor: "cheesecakes",
    items: [
      { name: "Burnt Cheesecake", desc: "Rich, creamy, and caramelized on top.", img: PLACEHOLDER },
      { name: "Matcha Cheesecake", desc: "Japanese matcha flavor, creamy and light.", img: PLACEHOLDER },
    ],
    tabImg: PLACEHOLDER,
  },
  {
    category: "Croffles",
    anchor: "croffles",
    items: [
      { name: "Croffles", desc: "Fusion of croissant and waffle, crispy and flaky.", img: PLACEHOLDER },
      { name: "Avocado", desc: "Creamy avocado atop our signature croffle.", img: PLACEHOLDER },
      { name: "Ham & Cheese", desc: "Savory ham and melted cheese on our flaky croffle.", img: PLACEHOLDER },
      { name: "Smoke Salmon", desc: "Flaky croffle and rich smoked salmon.", img: PLACEHOLDER },
    ],
    tabImg: PLACEHOLDER,
  },
  {
    category: "Beverages",
    anchor: "beverages",
    items: [
      { name: "Caramel Frappe", desc: "Creamy blend of caramel and ice, topped with whipped cream.", img: PLACEHOLDER },
      { name: "Fuwa Fuwa Latte", desc: "Smooth, rich, and comforting signature latte.", img: PLACEHOLDER },
      { name: "Hazelnut Espresso", desc: "Bold espresso with nutty hazelnut.", img: PLACEHOLDER },
      { name: "Mango Soda", desc: "Bubbly delight with tropical mango.", img: PLACEHOLDER },
      { name: "Yuzu Soda", desc: "Zesty, refreshing soda with citrusy yuzu.", img: PLACEHOLDER },
      { name: "Fluffy Blend Specialty Coffee", desc: "Premium beans, robust flavor, smooth finish.", img: PLACEHOLDER },
    ],
    tabImg: PLACEHOLDER,
  },
];

export default function MenuPage() {
  // refs for scroll
  const sectionRefs = MENU.reduce((acc, cat) => {
    acc[cat.anchor] = useRef<HTMLDivElement>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement | null>>);

  const handleTabClick = (anchor: string) => {
    const ref = sectionRefs[anchor];
    if (ref && ref.current) {
      const navHeight = 80; // px, adjust if your navbar height changes
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const top = rect.top + scrollTop - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-[320px] md:h-[420px] flex flex-col justify-end">
        <img src={PLACEHOLDER} alt="Menu Banner" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full pt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-widest uppercase drop-shadow-lg">MENU</h1>
          <div className="text-lg md:text-2xl text-white tracking-widest mb-8 font-light drop-shadow">TASTE THE FUSION</div>
        </div>
        {/* Category Tabs */}
        <div className="relative z-30 w-full flex justify-center bg-blue-300 py-4 gap-2 md:gap-8">
          {MENU.map((cat) => (
            <button
              key={cat.category}
              className="flex flex-col items-center px-2 md:px-6 focus:outline-none group cursor-pointer"
              onClick={() => handleTabClick(cat.anchor)}
              style={{ background: "none", border: "none" }}
            >
              <img src={PLACEHOLDER} alt={cat.category} className="w-16 h-16 md:w-24 md:h-24 object-contain mb-1 group-hover:scale-105 transition-transform" />
              <span className="text-base md:text-lg font-semibold text-black tracking-wide mt-1 uppercase" style={{ letterSpacing: 1 }}>{cat.category}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Menu Sections */}
      <div className="max-w-5xl mx-auto py-10 md:py-16 px-2 md:px-4">
        {MENU.map((cat) => (
          <section
            key={cat.category}
            ref={sectionRefs[cat.anchor]}
            id={cat.anchor}
            className="mb-10 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-6 md:mb-8 pl-1 uppercase tracking-wide">{cat.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {cat.items.map((item, idx) => (
                <div key={item.name} className="bg-white rounded-2xl shadow-lg p-5 md:p-7 flex flex-col gap-4 border border-gray-50 hover:shadow-xl transition">
                  <img
                    src={PLACEHOLDER}
                    alt={item.name}
                    className="w-full aspect-[4/3] object-cover rounded-xl shadow mb-2 bg-gray-100"
                    loading="lazy"
                  />
                  <div className="font-bold text-lg md:text-xl text-neutral-900 mb-1">{item.name}</div>
                  <div className="text-neutral-600 text-base mb-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
} 