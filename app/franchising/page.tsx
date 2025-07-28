import React from "react";
import Image from "next/image";
import ContactForm from "../_components/ContactForm";

export default function FranchisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-[#2e3f3a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Franchising
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Join the Teapresso family and be part of the premium milk tea revolution.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-24">
        <div className="space-y-12">
          {/* Opportunity Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-6">
              Your Next Opportunity
            </h2>

            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                Do you have an entrepreneurial spirit and a passion for redefining how people experience tea and coffee?
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Or are you an experienced operator looking to bring a fresh, modern beverage concept into your growing portfolio?
              </p>

              <p className="text-lg leading-relaxed font-semibold text-[#2e3f3a]">
                If so, your next opportunity starts here...
              </p>
            </div>
          </div>

          {/* About Us Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-6">
              About Teapresso
            </h2>

            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                We're a fast-growing premium tea and coffee brand, delighting guests with freshly brewed milk teas, specialty coffees, and handcrafted drinks — paired with light bites and seasonal treats — now proudly serving customers across the UK and beyond.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                No matter how far we expand, we remain that "great little spot" where quality, comfort, and culture blend seamlessly — the kind of place people return to, cup after cup.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-[#2e3f3a]">
                Just one reason why franchising with Teapresso might be your next great move.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-6">
              How We Support You
            </h2>

            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                As you gear up for your grand opening, our Operations and Marketing teams will be by your side to make sure everything is ready.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                From final in-store training to tailored local marketing plans, we'll support you through every detail — ensuring you launch with confidence and make a strong first impression in your community.
              </p>
            </div>
          </div>

          <section className="w-full h-[400px] md:h-[600px] relative">
            <Image
              src="/franchise.png"
              alt="Teapresso Hero Banner"
              fill
              className="object-cover"
              priority
            />
          </section>

        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form" className="bg-gray-50">
        <ContactForm
          title="Contact Us to Find Out More"
          className="bg-gray-50"
        />
      </div>
    </div>
  );
} 