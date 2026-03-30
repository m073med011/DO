"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: 1, label: "Information We Collect", anchor: "info-collect" },
  { id: 2, label: "How We Use the Information", anchor: "info-use" },
  { id: 3, label: "Information Protection", anchor: "info-protection" },
  { id: 4, label: "Information Sharing", anchor: "info-sharing" },
  { id: 5, label: "Cookies", anchor: "cookies" },
  { id: 6, label: "Your Rights", anchor: "your-rights" },
  { id: 7, label: "Changes to This Policy", anchor: "policy-changes" },
  { id: 8, label: "Contact Us", anchor: "contact-us" },
];

export default function PrivacyTOC() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sectionIds = tocItems.map((item) => item.anchor);

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost intersecting entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="hidden lg:block lg:w-[280px] xl:w-[320px]"
      data-aos="fade-left"
      data-aos-duration="600"
      data-aos-delay="200"
    >
      <div className="sticky top-28">
        <h3 className="mb-5 text-base font-semibold text-white">
          Table Of Content
        </h3>
        <nav>
          <ol className="space-y-3 border-l border-white/10 pl-4">
            {tocItems.map((item) => {
              const isActive = activeId === item.anchor;
              return (
                <li key={item.id}>
                  <Link
                    href={`#${item.anchor}`}
                    className={`group flex items-start gap-2 text-sm transition-colors duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-white/40 hover:text-primary"
                    }`}
                  >
                    <span
                      className={`font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-primary"
                          : "text-white/30 group-hover:text-primary"
                      }`}
                    >
                      {item.id}.
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </aside>
  );
}
