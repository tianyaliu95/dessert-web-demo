"use client";
import React, { useState, useEffect } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 bg-[#2e3f3a] hover:bg-[#2e3f3a]/80 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-all border-4 border-white cursor-pointer"
      aria-label="Back to top"
      style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)" }}
    >
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
} 