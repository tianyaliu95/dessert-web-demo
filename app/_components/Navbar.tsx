"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-8 py-4 sticky top-0 z-40 border-b border-gray-100">
      <div className="flex items-center gap-2 select-none">
        <Link href="/">
          <span className="font-extrabold text-2xl tracking-tight text-yellow-500 uppercase">Fluffy Fluffy</span>
        </Link>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex gap-8 text-gray-700 font-semibold text-lg">
        <Link href="/menu" className="relative group transition">
          <span>Menu</span>
          <span className="block h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
        </Link>
        <Link href="/our-story" className="relative group transition">
          <span>Our Story</span>
          <span className="block h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
        </Link>
        <Link href="/locations" className="relative group transition">
          <span>Locations</span>
          <span className="block h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
        </Link>
        <Link href="/franchise" className="relative group transition">
          <span>Franchise</span>
          <span className="block h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
        </Link>
      </div>
      {/* Mobile hamburger */}
      <button className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-500">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setMenuOpen(false)}>
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col py-8 px-6 gap-6 animate-slide-in">
            <button className="self-end mb-4" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link href="/menu" className="text-lg font-semibold text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Menu</Link>
            <Link href="/our-story" className="text-lg font-semibold text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Our Story</Link>
            <Link href="/locations" className="text-lg font-semibold text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Locations</Link>
            <Link href="/franchise" className="text-lg font-semibold text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Franchise</Link>
          </div>
        </div>
      )}
    </nav>
  );
} 