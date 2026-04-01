"use client";

import { useState } from "react";
import ClosedFooter from "@/components/company/ClosedFooter";
import { useTranslations } from "next-intl";

export default function FAQsPage() {
  const t = useTranslations("FAQs");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState<number | null>(1);

  const categories = [
    { id: "all", label: t("categories.all") },
    { id: "services", label: t("categories.services") },
    { id: "clients", label: t("categories.clients") },
    { id: "pricing", label: t("categories.pricing") },
    { id: "market", label: t("categories.market") },
    { id: "reach", label: t("categories.reach") },
  ];

  const faqs = t.raw("questions") as { id: number; category: string; question: string; answer: string }[];

  const filtered =
    activeCategory === "all"
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
            {t("title")}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="text-white/60 max-w-2xl"
            style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}
          >
            {t("description")}
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
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`snap-start whitespace-nowrap px-5 py-2 rounded-xl text-sm transition-all duration-300 shrink-0 ${
                activeCategory === cat.id
                  ? "bg-primary text-black font-semibold"
                  : "bg-[#13121d] border border-white/5 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.label}
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
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start"
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
        title={t("footer.title")}
        description={t("footer.description")}
        bottomOneTitle={t("footer.cta1")}
        bottomTwoTitle={t("footer.cta2")}
      />
    </main>
  );
}
