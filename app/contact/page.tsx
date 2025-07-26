"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [attachments, setAttachments] = useState<File[]>([]);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);
  const [cooldownError, setCooldownError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCooldownError("");
    const now = Date.now();
    if (lastSubmitTime && now - lastSubmitTime < 60000) {
      setCooldownError("Please wait a minute before submitting again.");
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setLastSubmitTime(now);
      } else setStatus("error");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center bg-white py-16 px-4 mb-22">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2e3f3a] lg:mb-26 mb-20 text-center uppercase tracking-tight">Contact Us</h1>
        <form className="flex flex-col gap-8 px-6 lg:px-0" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label className="block text-gray-800 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white border-b-2 border-gray-300 px-0 py-2 focus:outline-none focus:border-gray-600 transition-colors"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-800 font-medium mb-2" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white border-b-2 border-gray-300 px-0 py-2 focus:outline-none focus:border-gray-600 transition-colors"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-800 font-medium mb-2" htmlFor="message">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-gray-600 transition-colors resize-y"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          {/* Attachment Section */}
          {/* <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-gray-800 underline cursor-pointer hover:text-gray-600 transition-colors">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              Attach Files
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <span className="text-sm text-gray-600">
              Attachments ({attachments.length})
            </span>
          </div> */}

          {/* Send Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-300 hover:bg-gray-400 hover:cursor-pointer text-gray-800 font-bold py-3 px-8 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {/* Status Messages */}
          {cooldownError && (
            <div className="text-red-600 text-center font-medium">{cooldownError}</div>
          )}
          {status === "success" && (
            <div className="text-green-600 text-center font-medium">
              Thank you! Your message has been sent.
            </div>
          )}
          {status === "error" && (
            <div className="text-red-600 text-center font-medium">
              Sorry, something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 