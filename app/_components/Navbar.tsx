"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/locations", label: "Our Locations" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/click-collect", label: "Click & Collect" },
  { href: "/franchising", label: "Franchising" },
  { href: "/offers", label: "Offers" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-8 py-4 sticky top-0 z-40 border-b border-blue-900">
      <div className="flex items-center gap-2 select-none">
        <Link href="/">
          <span className="font-extrabold text-2xl tracking-tight text-blue-900 uppercase">TEAPRESSO</span>
        </Link>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex gap-8 text-blue-900 font-semibold text-lg">
        {NAV_LINKS.map((item) => (
          <Link key={item.href} href={item.href} className="relative group transition px-2 py-1 rounded focus:outline-none">
            <span>{item.label}</span>
            <span className="block h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
          </Link>
        ))}
      </div>
      {/* Mobile hamburger */}
      <button className="md:hidden flex items-center hover:cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-900">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile menu drawer - 全屏覆盖，丝滑动画，大号菜单项 */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center h-full animate-slide-in-right">
          <div className="absolute inset-0 bg-blue-900" />
          <div className="relative w-full sm:w-[400px] h-full flex flex-col justify-center items-center">
            <button className="absolute top-8 right-8 z-[10000]" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:cursor-pointer" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col justify-center items-center w-full h-full gap-8">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="!text-white text-3xl font-bold tracking-wide py-3 px-8 rounded-lg hover:cursor-pointer transition-all w-4/5 text-center focus:outline-none"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
} 