import React from "react";

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-[#2e3f3a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Offers & Promotions
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our latest deals and seasonal specials to enhance your Teapresso experience.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-12">
          {/* Introduction Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-6">
              Current Offers
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                Discover our latest offers and promotions! Whether you're celebrating a special occasion or just want to treat yourself, Teapresso has something for everyone. Check back often for new deals and seasonal specials.
              </p>
              
              <p className="text-lg leading-relaxed">
                Everyone needs cake on their birthday! Sign up for our loyalty program and enjoy exclusive rewards.
              </p>
            </div>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Birthday Offer */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2e3f3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">Birthday Special</h3>
                <p className="text-gray-600 mb-4">
                  Get a free drink of your choice on your birthday when you're a member of our loyalty program.
                </p>
                <button className="bg-[#2e3f3a] hover:bg-[#2e3f3a]/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                  Join Now
                </button>
              </div>
            </div>

            {/* Student Discount */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2e3f3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">Student Discount</h3>
                <p className="text-gray-600 mb-4">
                  15% off all drinks with valid student ID. Available at all locations.
                </p>
                <button className="bg-[#2e3f3a] hover:bg-[#2e3f3a]/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>

            {/* Loyalty Program */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2e3f3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">Loyalty Rewards</h3>
                <p className="text-gray-600 mb-4">
                  Earn points with every purchase and redeem them for free drinks and exclusive offers.
                </p>
                <button className="bg-[#2e3f3a] hover:bg-[#2e3f3a]/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Seasonal Specials */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2e3f3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">Seasonal Specials</h3>
                <p className="text-gray-600 mb-4">
                  Limited-time seasonal drinks and treats. Follow us for the latest updates.
                </p>
                <button className="bg-[#2e3f3a] hover:bg-[#2e3f3a]/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                  View Menu
                </button>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to be the first to know about new offers, seasonal specials, and exclusive promotions.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e3f3a] focus:border-[#2e3f3a] transition-colors"
                />
                <button className="bg-[#2e3f3a] hover:bg-[#2e3f3a]/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 