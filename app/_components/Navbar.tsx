"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/locations", label: "Our Locations" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/click-collect", label: "Click & Collect" },
  { href: "https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4", label: "Menu", target: "_blank" },
  { href: "/franchising", label: "Franchising" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 400); // 动画时长
  };

  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-4 py-2 md:py-4 sticky top-0 z-60 border-b border-[#2e3f3a]">
      <div className="flex items-center gap-2 select-none pl-0 lg:pl-6 h-12 md:h-18 overflow-hidden">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Paris Baguette Logo"
            width={120}
            height={40}
            className="object-cover mb-0 w-20 md:w-[120px] h-auto" // 手机端更小的logo
            priority
          />
        </Link>
      </div>

      {/* Desktop menu */}
      <div
        className="hidden md:flex gap-8 text-[#2e3f3a] font-semibold text-base tracking-wider mr-10"
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          transform: 'scaleX(1.1)',
          letterSpacing: '0.5px'
        }}>
        {NAV_LINKS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="relative group transition-all duration-200 px-3 py-2 rounded-lg hover:bg-[#2e3f3a]/5 focus:bg-[#2e3f3a]/10 focus:outline-none"
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
          >
            <span>{item.label}</span>
            <span className="block h-0.5 bg-[#2e3f3a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>
        ))}
      </div>
      {/* Mobile hamburger */}
      <button className="md:hidden flex items-center hover:cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#253633]">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile menu drawer - 全屏覆盖，丝滑动画，大号菜单项 */}
      {(menuOpen || isClosing) && (
        <div className={`fixed inset-0 z-[9999] flex flex-col justify-center items-center h-full ${isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}>
          <div className="absolute inset-0 bg-[#2e3f3a]" />
          <div className="relative w-full sm:w-[400px] h-full flex flex-col justify-center items-center">

            <button className="absolute top-8 right-8 z-[10000]" onClick={handleCloseMenu} aria-label="Close menu">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:cursor-pointer" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col justify-center items-center w-full h-full gap-6">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="!text-zinc-100 text-xl font-semibold tracking-wider py-2 px-6 rounded-lg hover:cursor-pointer transition-all w-4/5 text-center focus:outline-none"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.4)', transform: 'scaleX(1.1)', letterSpacing: '0.8px' }}
                  onClick={handleCloseMenu}
                >
                  {item.label.toUpperCase()}
                </Link>
              ))}
            </nav>

          </div>
        </div>
      )}
    </nav>
  );
} 