import React from "react";

const socialIcons = [
  { name: "Facebook", icon: "M18 2.01C9.72 2.01 2.99 8.74 2.99 17.01c0 7.18 5.82 13 13 13s13-5.82 13-13c0-8.27-6.73-14.99-13-14.99zm0 24.98c-6.62 0-12-5.38-12-12s5.38-12 12-12 12 5.38 12 12-5.38 12-12 12zm1-17h-2v2h2v-2zm0 4h-2v8h2v-8z", href: "#" },
  { name: "X", icon: "M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 12 8.09c0 .34.04.67.1.99C8.09 8.9 4.84 7.13 2.73 4.36c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.28 4.28 0 0 1-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.65 0-1.28-.04-1.9-.12A12.13 12.13 0 0 0 7.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z", href: "#" },
  { name: "Instagram", icon: "M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.46.93.45.45.71.87.93 1.46.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.93 1.46-.45.45-.87.71-1.46.93-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.46-.93-.45-.45-.71-.87-.93-1.46-.17-.46-.354-1.26-.41-2.43C2.172 15.634 2.16 15.25 2.16 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.93-1.46.45-.45.87-.71 1.46-.93.46-.17 1.26-.354 2.43-.41C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.332.012 7.052.07c-1.28.058-2.16.24-2.91.51-.8.29-1.47.67-2.13 1.33-.66.66-1.04 1.33-1.33 2.13-.27.75-.45 1.63-.51 2.91C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.058 1.28.24 2.16.51 2.91.29.8.67 1.47 1.33 2.13.66.66 1.33 1.04 2.13 1.33.75.27 1.63.45 2.91.51C8.332 23.988 8.74 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.16-.24 2.91-.51.8-.29 1.47-.67 2.13-1.33.66-.66 1.04-1.33 1.33-2.13.27-.75.45-1.63.51-2.91.058-1.28.07-1.688.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.24-2.16-.51-2.91-.29-.8-.67-1.47-1.33-2.13-.66-.66-1.33-1.04-2.13-1.33-.75-.27-1.63-.45-2.91-.51C15.668.012 15.26 0 12 0z", href: "#" },
  { name: "TikTok", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z", href: "#" },
  { name: "LinkedIn", icon: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-yellow-200 pt-12 pb-4 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
        {/* Logo & Social */}
        <div className="flex flex-col items-center md:items-start gap-6 md:w-1/3">
          <div className="flex items-center gap-3">
            <span className="inline-block w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
              {/* Pancake icon placeholder */}
              <span className="text-2xl font-bold text-yellow-600">🥞</span>
            </span>
            <div>
              <div className="text-2xl font-fluffy font-bold tracking-widest text-yellow-100">FLUFFY FLUFFY</div>
              <div className="text-xs text-yellow-300 tracking-widest mt-1">DESSERT CAFE</div>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            {socialIcons.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-yellow-200 hover:text-yellow-400">
                  <path d={s.icon} fill="currentColor" />
                </svg>
              </a>
            ))}
          </div>
        </div>
        {/* Links */}
        <div className="flex-1 flex flex-col md:flex-row justify-center items-center md:items-start gap-10 mt-8 md:mt-0">
          <div>
            <div className="text-lg font-bold text-yellow-400 mb-2">LINKS</div>
            <div className="flex flex-col gap-1">
              <a href="/" className="hover:text-yellow-400 transition">HOME</a>
              <a href="/menu" className="hover:text-yellow-400 transition">MENU</a>
              <a href="/locations" className="hover:text-yellow-400 transition">LOCATIONS</a>
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-yellow-400 mb-2">FRANCHISE</div>
            <div className="flex flex-col gap-1">
              <a href="#" className="hover:text-yellow-400 transition">REWARDS</a>
              <a href="#" className="hover:text-yellow-400 transition">GIFT CARDS</a>
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-yellow-400 mb-2">COMPANY</div>
            <div className="flex flex-col gap-1">
              <a href="/our-story" className="hover:text-yellow-400 transition">OUR STORY</a>
              <a href="#" className="hover:text-yellow-400 transition">CONTACT</a>
              <a href="#" className="hover:text-yellow-400 transition">PRIVACY POLICY</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-yellow-700 mt-10 mb-2" />
      <div className="text-center text-yellow-300 text-xs mt-2">
        2024 © Copyright Fluffy Fluffy Dessert Cafés by Fuwa Fuwa Pancakes. All rights reserved. Developed by Seven Eight Six Media group.
      </div>
    </footer>
  );
} 