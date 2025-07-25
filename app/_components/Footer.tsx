import React from "react";

const socialIcons = [
  { name: "Instagram", icon: "M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.46.93.45.45.71.87.93 1.46.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.93 1.46-.45.45-.87.71-1.46.93-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.46-.93-.45-.45-.71-.87-.93-1.46-.17-.46-.354-1.26-.41-2.43C2.172 15.634 2.16 15.25 2.16 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.93-1.46.45-.45.87-.71 1.46-.93.46-.17 1.26-.354 2.43-.41C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.332.012 7.052.07c-1.28.058-2.16.24-2.91.51-.8.29-1.47.67-2.13 1.33-.66.66-1.04 1.33-1.33 2.13-.27.75-.45 1.63-.51 2.91C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.058 1.28.24 2.16.51 2.91.29.8.67 1.47 1.33 2.13.66.66 1.33 1.04 2.13 1.33.75.27 1.63.45 2.91.51C8.332 23.988 8.74 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.16-.24 2.91-.51.8-.29 1.47-.67 2.13-1.33.66-.66 1.04-1.33 1.33-2.13.27-.75.45-1.63.51-2.91.058-1.28.07-1.688.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.24-2.16-.51-2.91-.29-.8-.67-1.47-1.33-2.13-.66-.66-1.33-1.04-2.13-1.33-.75-.27-1.63-.45-2.91-.51C15.668.012 15.26 0 12 0z", href: "#" },
  { name: "TikTok", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-12 pb-4 px-4 mt-10 pl-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
        {/* Logo & Social */}
        <div className="flex flex-col items-center md:items-start gap-6 md:w-1/3">
          <div className="flex items-center gap-3">
            <span className="inline-block w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center">
              {/* Pancake icon placeholder */}
              <span className="text-2xl font-bold text-zinc-600">🥞</span>
            </span>
            <div>
              <div className="text-2xl font-fluffy font-bold tracking-widest text-grey-100">FLUFFY FLUFFY</div>
              <div className="text-xs text-grey-300 tracking-widest mt-1">DESSERT CAFE</div>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            {socialIcons.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-zinc-200 hover:text-zinc-400">
                  <path d={s.icon} fill="currentColor" />
                </svg>
              </a>
            ))}
          </div>
        </div>
        {/* Links */}
        <div className="flex-1 flex flex-col items-start gap-y-8 md:flex-row md:justify-center md:items-start md:gap-10 mt-2">
          <div>
            <div className="text-lg font-bold text-zinc-300 mb-6">QUICK LINKS</div>
            <div className="flex flex-col text-zinc-300 gap-1">
              <a href="/" className="text-zinc-400 mb-2">HOME</a>
              <a href="/locations" className="text-zinc-400 mb-2">OUR LOCATIONS</a>
              <a href="/click-collect" className="text-zinc-400 mb-2">CLICK & COLLECT</a>
              <a href="/franchising" className="text-zinc-400 mb-2">FRANCHISING</a>
              <a href="/offers" className="text-zinc-400 mb-8">OFFERS & PROMOTIONS</a>
            </div>
          </div>

          <div>
            <div className="text-lg font-bold text-zinc-300 mb-6">COMPANY</div>
            <div className="flex flex-col gap-1">
              <a href="/about" className="text-zinc-400 mb-2">ABOUT US</a>
              <a href="/contact" className="text-zinc-400 mb-2">CONTACT US</a>
              <a href="/privacy" className="text-zinc-400 mb-2">PRIVACY POLICY</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-600 mt-10 mb-2" />
      <div className="text-center text-zinc-300 text-xs mt-2">
        Copyright © 2025 Teapresso - All Rights Reserved.
      </div>
    </footer>
  );
} 