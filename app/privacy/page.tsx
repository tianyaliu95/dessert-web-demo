import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Privacy",
  description: "Read Teapresso 野萃's privacy policy to understand how we collect, use, and protect your personal information. Learn about cookies, data security, and your rights.",
  keywords: ["privacy policy", "data protection", "cookies policy", "personal information", "GDPR compliance", "data security"],
  openGraph: {
    title: "Teapresso Privacy Policy - Data Protection & Privacy",
    description: "Learn how we protect your personal information and respect your privacy.",
    images: ["/home.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-[#2e3f3a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-24">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            

            {/* Section 1 */}
            <div className="mb-12">
              <h3 className="text-md md:text-2xl font-bold text-[#2e3f3a] mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#2e3f3a] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                What Do We Do With Your Information?
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  When you purchase something from Teapresso, as part of the buying and selling process, we collect the personal information you provide, such as your name, address, and email address.
                </p>
                <p>
                  When you browse our store, we also automatically receive your computer's Internet Protocol (IP) address to help us understand your browser and operating system for improved user experience.
                </p>
                <p>
                  With your permission, we may send you emails about our store, new products, or promotional updates.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h3 className="text-md md:text-2xl font-bold text-[#2e3f3a] mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#2e3f3a] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Consent
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-[#2e3f3a] mb-2">How do you give consent?</h4>
                  <p>
                    When you provide personal information to complete a transaction—such as placing an order or requesting a delivery—we assume you consent to us collecting and using it for that specific reason only.
                  </p>
                  <p>
                    If we ask for your information for a secondary reason (e.g., marketing), we will ask for your express consent or give you an opportunity to opt out.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2e3f3a] mb-2">How to withdraw consent:</h4>
                  <p>You may withdraw your consent at any time by contacting us at:</p>
                  <div className="bg-gray-50 rounded-lg p-4 mt-3">
                    <p className="text-[#2e3f3a] font-medium">📧 info@tea-presso.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h3 className="text-md md:text-2xl font-bold text-[#2e3f3a] mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#2e3f3a] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Disclosure
              </h3>
              <p className="text-gray-700">
                We may disclose your personal information if required by law or if you violate our Terms of Service.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h3 className="text-md md:text-2xl font-bold text-[#2e3f3a] mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#2e3f3a] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                E-Commerce Platform
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our online store is powered by Square, which provides the secure infrastructure to sell products and process transactions.
                </p>
                <p>
                  Your data is stored securely via Square's encrypted systems, which comply with industry-standard security protocols.
                </p>
                <p>
                  If you complete your transaction through a direct payment gateway, Square securely stores your payment details. All payment information is encrypted and processed in compliance with the Payment Card Industry Data Security Standard (PCI-DSS).
                </p>
                <p>
                  For more details, please refer to Square's Privacy Policy.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h3 className="text-md md:text-2xl font-bold text-[#2e3f3a] mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#2e3f3a] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Third-Party Services
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Third-party providers used by Teapresso will only collect, use, or disclose your personal information to the extent required for the services they provide to us (e.g., payment gateways or delivery platforms).
                </p>
                <p>
                  Some providers may operate in jurisdictions different from yours or ours, and your information may be subject to the laws of those regions.
                </p>
                <p>
                  Once you leave our website or are redirected to a third-party platform, this Privacy Policy no longer applies.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-[#2e3f3a] mb-2">Google Analytics:</h4>
                  <p>
                    We use Google Analytics to gain insights into who visits our site and which pages are viewed, helping us improve our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h3 className="text-md md:text-2xl font-bold text-[#2e3f3a] mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#2e3f3a] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Security
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  To protect your personal data, we take reasonable precautions and follow industry best practices to prevent it from being lost, misused, accessed, disclosed, altered, or destroyed.
                </p>
                <p>
                  When you provide credit card information, it is encrypted using SSL (Secure Socket Layer) and stored securely. Although no online system is 100% secure, we comply with PCI-DSS requirements and implement additional safeguards.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h3 className="text-md md:text-2xl font-bold text-[#2e3f3a] mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#2e3f3a] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Cookies
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>We use cookies to enhance your browsing experience. These may include:</p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p><strong>_session_id</strong> – stores session information</p>
                  <p><strong>_secure_session_id</strong> – ensures secure login</p>
                  <p><strong>Google cookies</strong> – track visitor behaviour and traffic sources</p>
                </div>
                <p>You may choose to opt out by adjusting your browser settings.</p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h3 className="text-md md:text-2xl font-bold text-[#2e3f3a] mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#2e3f3a] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                Age of Consent
              </h3>
              <p className="text-gray-700">
                By using this site, you confirm that you are at least the age of majority in your country or region, or that you have given us consent to allow any minor dependents to use this site under your supervision.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h3 className="text-md md:text-2xl font-bold text-[#2e3f3a] mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#2e3f3a] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                Changes to This Policy
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  We reserve the right to modify this Privacy Policy at any time. Changes will take immediate effect upon being posted. If we make significant changes, we will update this page to reflect them.
                </p>
                <p>
                  If Teapresso is acquired or merged with another business, your personal data may be transferred to the new owners so we can continue serving you.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-[#2e3f3a]/5 rounded-2xl p-8">
              <h3 className="text-md md:text-2xl font-bold text-[#2e3f3a] mb-6">
                Questions & Contact
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#2e3f3a] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>102, The Arthouse, 43 George St, Manchester M1 4AB</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#2e3f3a] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@tea-presso.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#2e3f3a] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Teapresso HQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 