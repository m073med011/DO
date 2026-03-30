"use client";

import { useState } from "react";
import ClosedFooter from "@/components/company/ClosedFooter";

const categories = [
  "All",
  "Services",
  "Clients",
  "Pricing & Contracts",
  "Saudi Market",
  "Reach more",
];

const faqs = [
  {
    id: 1,
    category: "Services",
    question: "How Long Does It Take To Get A Response?",
    answer:
      "We typically respond to all inquiries within 24 hours on business days. For urgent matters, you can reach us directly through our contact channels and we'll do our best to get back to you as soon as possible.",
  },
  {
    id: 2,
    category: "Services",
    question: "Can I Contact You Without A Clear Idea?",
    answer:
      "You can come to us without a clear idea from the very first step — even if your idea is still taking shape. Our team will guide you through the process, help you define your vision, and craft a strategy tailored to your goals.",
  },
  {
    id: 3,
    category: "Clients",
    question: "Do You Work With Clients Outside Saudi Arabia?",
    answer:
      "Yes, we serve clients globally. While our core focus is on the Saudi and GCC markets, we have successfully partnered with businesses across the Middle East, North Africa, Europe, and beyond.",
  },
  {
    id: 4,
    category: "Pricing & Contracts",
    question: "How much does it cost to build a website in Saudi Arabia?",
    answer:
      "Website costs vary significantly based on complexity, features, and scope. A simple informational site may start from a few thousand SAR, while custom enterprise-grade solutions are priced based on a detailed discovery session. Contact us for a tailored quote.",
  },
  {
    id: 5,
    category: "Services",
    question: "Do you offer digital marketing for startups?",
    answer:
      "Absolutely. We have dedicated startup packages that cover branding, social media management, content creation, and performance marketing — all designed to help new businesses build their presence fast and efficiently.",
  },
  {
    id: 6,
    category: "Services",
    question: "What's the difference between custom development and templates?",
    answer:
      "Custom development means we build your project from scratch to match your exact requirements, giving you full flexibility and scalability. Templates are pre-designed layouts that are faster and more affordable, but may have design and functionality limitations.",
  },
  {
    id: 7,
    category: "Services",
    question: "Can the entire project be done remotely?",
    answer:
      "Yes. Our team is fully equipped to deliver complete projects remotely, from initial discovery and strategy sessions to design, development, and launch. We use structured communication tools and regular check-ins to keep everything on track.",
  },
  {
    id: 8,
    category: "Saudi Market",
    question: "What are the most requested services in Saudi Arabia?",
    answer:
      "In the Saudi market, the most in-demand services include website development, UI/UX design, social media management, SEO, and e-commerce solutions. Vision 2030 has also increased demand for digital transformation consulting.",
  },
  {
    id: 9,
    category: "Services",
    question: "Do you offer brand identity design?",
    answer:
      "Yes, we offer comprehensive brand identity packages including logo design, color palettes, typography systems, brand guidelines, and visual assets — everything you need to build a consistent and memorable brand.",
  },
  {
    id: 10,
    category: "Services",
    question: "Do you manage social media accounts?",
    answer:
      "Yes. Our social media management service includes content strategy, post creation, scheduling, community management, and monthly performance reporting across all major platforms including Instagram, LinkedIn, X (Twitter), and TikTok.",
  },
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<number | null>(2);

  const filtered =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <main className="relative flex flex-col overflow-hidden px-5 py-20 xl:py-32 xl:pt-40 min-h-dvh">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[20%] h-[50%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-primary opacity-[0.03] blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-[900px] relative z-20">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h1
            data-aos="fade-up"
            data-aos-duration="600"
            className="mb-5 font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)" }}
          >
            Frequently Asked Questions About Our Digital Services In Saudi Arabia
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="text-white/60 max-w-2xl"
            style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}
          >
            Here You Find Answers To Common Questions To Common Questions, Find
            Answers With Clients In Saudi Arabia And Beyond.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          className="flex flex-nowrap items-center justify-start lg:justify-center gap-2 lg:gap-3 mb-12 overflow-x-auto pb-3 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`snap-start whitespace-nowrap px-5 py-2 rounded-xl text-sm transition-all duration-300 shrink-0 ${
                activeCategory === cat
                  ? "bg-primary text-black font-semibold"
                  : "bg-[#13121d] border border-white/5 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-3">
          {filtered.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 60}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-white/10 bg-[#15141f]"
                    : "border-white/5 bg-[#13121d] hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-white/80"
                    }`}
                  >
                    {faq.question}
                  </span>
                  {/* Icon */}
                  <span
                    className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-primary bg-primary/10 text-primary rotate-0"
                        : "border-white/10 text-white/40 rotate-0"
                    }`}
                  >
                    {isOpen ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 7H12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 2V12M2 7H12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-white/50 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Closed Footer */}
      <ClosedFooter
        link="/contact"
        title="Still Have Questions?"
        description="Can't find the answer you're looking for? Our team is happy to help you with any questions about our digital services in Saudi Arabia."
        bottomOneTitle="Contact Us"
        bottomTwoTitle="See Our Services"
      />
    </main>
  );
}
