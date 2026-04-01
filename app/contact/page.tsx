import type { Metadata } from "next";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Contact | Pixie Dust Family",
  description: "Get in touch with the Pixie Dust Family team.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

        <h1
          className="text-4xl font-bold text-[#0D1B2A] mb-4"
          style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
        >
          Get in Touch
        </h1>
        <p className="text-[#4A5568] mb-8">
          Have a question about a resort we&apos;ve reviewed? Want to suggest a topic? Drop us a note.
        </p>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#0D1B2A] mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-[#D1E3F5] rounded-xl px-4 py-3 text-[#0D1B2A] focus:outline-none focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#0D1B2A] mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-[#D1E3F5] rounded-xl px-4 py-3 text-[#0D1B2A] focus:outline-none focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE]"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#0D1B2A] mb-1">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full border border-[#D1E3F5] rounded-xl px-4 py-3 text-[#0D1B2A] focus:outline-none focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE]"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#0D1B2A] mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full border border-[#D1E3F5] rounded-xl px-4 py-3 text-[#0D1B2A] focus:outline-none focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0072CE] hover:bg-[#005fa3] text-white font-semibold py-3 rounded-full transition-colors"
          >
            Send Message
          </button>
        </form>

        <p className="text-[#4A5568] text-sm mt-6 text-center">
          We read every message and respond to most within a few days.
        </p>
      </div>
    </div>
  );
}
