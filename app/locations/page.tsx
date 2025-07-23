import React from "react";

const LOCATIONS = [
  {
    name: "London - Soho",
    address: "123 Soho St, London, W1D 3QF, UK",
    hours: "Mon-Sun: 10:00 - 21:00",
    phone: "+44 20 1234 5678",
  },
  {
    name: "Manchester - City Centre",
    address: "456 Deansgate, Manchester, M3 4EN, UK",
    hours: "Mon-Sun: 10:00 - 20:00",
    phone: "+44 161 234 5678",
  },
  {
    name: "Birmingham - Bullring",
    address: "789 Bullring, Birmingham, B5 4BU, UK",
    hours: "Mon-Sun: 10:00 - 20:00",
    phone: "+44 121 234 5678",
  },
];

export default function LocationsPage() {
  return (
    <div className="w-full flex flex-col items-center bg-white py-12 md:py-20 px-4 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-8 md:mb-10 text-center uppercase tracking-tight">Locations</h1>
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {LOCATIONS.map((loc) => (
          <div key={loc.name} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-3 border border-gray-50 hover:shadow-xl transition">
            <div className="font-bold text-xl md:text-2xl text-neutral-900 mb-1">{loc.name}</div>
            <div className="text-neutral-600 text-base mb-1">{loc.address}</div>
            <div className="text-neutral-500 text-sm">{loc.hours}</div>
            <div className="text-neutral-500 text-sm">{loc.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 