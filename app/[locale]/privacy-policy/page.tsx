"use client";

import ClosedFooter from "@/components/company/ClosedFooter";
import PrivacyTOC from "@/components/shared/PrivacyTOC";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("Privacy");
  const tFooter = useTranslations("Privacy.footer");

  const policySections = t.raw("sections") as any[];

  const contacts = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      label: "info@do.com.sa",
      href: "https://mail.google.com/mail/?view=cm&to=info@do.com.sa",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: "0502765770",
      href: "tel:+966502765770",
    },
  ];

  return (
    <main className="">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden my-48">
        {/* Background blob */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-[0.03] blur-[150px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-[1384px] px-5">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <h1
              className="mb-4 font-bold text-white"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)" }}
            >
              {t("title")}
            </h1>
            <p className="mx-auto max-w-[700px] text-sm leading-relaxed text-white/50 md:text-base">
              {t("description")}
            </p>
            <p
              className="mt-4 text-xs text-white/30"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              {t("lastUpdated")}
            </p>
          </div>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="container mx-auto max-w-[1384px] px-5 pb-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* ── Left: Policy Content ── */}
          <div className="flex-1">
            <div className="space-y-12 md:space-y-16">
              {policySections.map((section, sectionIndex) => (
                <div
                  key={section.id}
                  id={section.anchor}
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={sectionIndex * 50}
                >
                  {/* Section Title */}
                  <h2 className="mb-4 text-lg font-semibold text-white md:text-xl">
                    <span className="mr-2 text-white/40 rtl:mr-0 rtl:ml-2">{section.id}.</span>
                    {section.title}
                  </h2>

                  {/* Section Intro */}
                  {section.intro && (
                    <p className="mb-4 text-sm leading-relaxed text-white/50 md:text-base">
                      {section.intro}
                    </p>
                  )}

                  {/* Section Description (for sections without list items) */}
                  {section.description && (
                    <p className="text-sm leading-relaxed text-white/50 md:text-base">
                      {section.description}
                    </p>
                  )}

                  {/* Bullet List */}
                  {section.items && section.items.length > 0 && (
                    <ul className="mt-2 space-y-2 pl-1 rtl:pl-0 rtl:pr-1">
                      {section.items.map((item: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-white/50 md:text-base"
                        >
                          <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Contact Links (Section 8) */}
                  {section.id === 8 && (
                    <div className="mt-4 space-y-3">
                      {contacts.map((contact, i) => (
                        <a
                          key={i}
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-sm text-white/50 transition-colors duration-200 hover:text-primary md:text-base"
                        >
                          <span className="text-white/40">{contact.icon}</span>
                          {contact.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Table of Contents (sticky sidebar) ── */}
          <PrivacyTOC />
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="container mx-auto max-w-[1384px] px-5">
        <hr className="border-white/5" />
      </div>

      {/* ── CTA / Closed Footer ── */}
      <section className="container mx-auto max-w-[1384px] px-5 py-16 md:py-24">
        <ClosedFooter
          title={tFooter("title")}
          description={tFooter("description")}
          bottomOneTitle={tFooter("cta1")}
          bottomTwoTitle={tFooter("cta2")}
          link="/solutions"
        />
      </section>
    </main>
  );
}
