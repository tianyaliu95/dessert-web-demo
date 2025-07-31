"use client";
import ContactForm from "../_components/ContactForm";
import { FadeIn, SlideUp } from "../_components/ScrollAnimation";

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#2e3f3a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-200">
              Contact Us
            </h1>
          </FadeIn>
          <SlideUp delay={300}>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Get in touch with us. We'd love to hear from you and answer any questions you may have.
            </p>
          </SlideUp>
        </div>
      </div>

      <SlideUp>
        <ContactForm
          title="Send us a message"
          subtitle="Fill out the form below and we'll get back to you as soon as possible."
          className="py-12"
        />
      </SlideUp>
    </>

  );
} 