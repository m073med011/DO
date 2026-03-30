"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const ICON_BASE = "/solutions/Creative%20solutions/";

const categoriesData = [
  {
    name: "Creative Solutions",
    tag: "Creative Solutions",
    title: "Creative Solutions Designed To Turn Your Ideas Into Reality.",
    cards: [
      { title: "Visual Identity", icon: "Group.svg" },
      { title: "Brand Guidelines", icon: "Group (1).svg" },
      { title: "Verbal Identity", icon: "Group (2).svg" },
      { title: "Naming & Taglines", icon: "Group (3).svg" },
      { title: "Writing", icon: "Group (4).svg" },
      { title: "Voice Over", icon: "Group (5).svg" },
      { title: "Animation Design", icon: "Icons.svg" },
      { title: "Media Production", icon: "Line.svg" },
    ],
  },
  {
    name: "Digital Engineering",
    tag: "Digital Engineering",
    title: "Digital Engineering Built to Power Your Business Forward.",
    cards: [
      { title: "Web Development", icon: "Group.svg" },
      { title: "Mobile Apps", icon: "Group (1).svg" },
      { title: "Cloud Solutions", icon: "Group (2).svg" },
      { title: "API Integration", icon: "Group (3).svg" },
      { title: "DevOps", icon: "Group (4).svg" },
      { title: "QA & Testing", icon: "Group (5).svg" },
      { title: "Microservices", icon: "Icons.svg" },
      { title: "Data Engineering", icon: "Line.svg" },
    ],
  },
  {
    name: "Customer Experience",
    tag: "Customer Experience",
    title: "Exceptional Experiences That Keep Customers Coming Back.",
    cards: [
      { title: "UX Research", icon: "Group.svg" },
      { title: "UI Design", icon: "Group (1).svg" },
      { title: "Usability Testing", icon: "Group (2).svg" },
      { title: "Journey Mapping", icon: "Group (3).svg" },
      { title: "Prototyping", icon: "Group (4).svg" },
      { title: "A/B Testing", icon: "Group (5).svg" },
      { title: "CX Strategy", icon: "Icons.svg" },
      { title: "Support Systems", icon: "Line.svg" },
    ],
  },
  {
    name: "Growth Solutions",
    tag: "Growth Solutions",
    title: "Data-Driven Growth Strategies That Deliver Results.",
    cards: [
      { title: "SEO & Content", icon: "Group.svg" },
      { title: "Paid Media", icon: "Group (1).svg" },
      { title: "Analytics", icon: "Group (2).svg" },
      { title: "Conversion Rate", icon: "Group (3).svg" },
      { title: "Email Marketing", icon: "Group (4).svg" },
      { title: "Social Media", icon: "Group (5).svg" },
      { title: "Influencer", icon: "Icons.svg" },
      { title: "Market Research", icon: "Line.svg" },
    ],
  },
  {
    name: "Work Space",
    tag: "Work Space",
    title: "Collaborative Workspaces Designed for High Performance.",
    cards: [
      { title: "Team Collaboration", icon: "Group.svg" },
      { title: "Project Management", icon: "Group (1).svg" },
      { title: "Remote Workflows", icon: "Group (2).svg" },
      { title: "Culture Building", icon: "Group (3).svg" },
      { title: "HR Tools", icon: "Group (4).svg" },
      { title: "Knowledge Base", icon: "Group (5).svg" },
      { title: "Onboarding", icon: "Icons.svg" },
      { title: "Performance Mgmt", icon: "Line.svg" },
    ],
  },
];

const TOTAL_STEPS = categoriesData.length;

function DesktopView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackFillRef = useRef<HTMLDivElement>(null);
  const trackDotRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const labelsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const stepDuration = 1;
        const totalDuration = (TOTAL_STEPS - 1) * stepDuration;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${TOTAL_STEPS * 100}%`,
            pin: true,
            scrub: 0.5,
            id: "desktop-st",
          },
        });

        tl.to(
          trackFillRef.current,
          { height: "100%", ease: "none", duration: totalDuration },
          0,
        );
        tl.to(
          trackDotRef.current,
          { top: "100%", ease: "none", duration: totalDuration },
          0,
        );

        panelsRef.current.forEach((panel, i) => {
          if (i > 0 && panel) {
            const targets = gsap.utils.toArray(".anim-target", panel);
            gsap.set(panel, { autoAlpha: 0, zIndex: 0 });
            gsap.set(targets, { autoAlpha: 0, y: 16 });
          }
        });

        categoriesData.forEach((_, i) => {
          if (i > 0) {
            const startTime = (i - 0.5) * stepDuration;
            const prevPanel = panelsRef.current[i - 1];
            const currPanel = panelsRef.current[i];

            if (prevPanel) {
              const prevTargets = gsap.utils.toArray(".anim-target", prevPanel);
              tl.to(
                prevTargets,
                { autoAlpha: 0, y: -16, duration: 0.3, stagger: 0.02 },
                startTime,
              );
              tl.set(prevPanel, { zIndex: 0 }, startTime + 0.3);
            }

            if (currPanel) {
              const currTargets = gsap.utils.toArray(".anim-target", currPanel);
              tl.set(currPanel, { zIndex: 10 }, startTime + 0.1);
              tl.to(currPanel, { autoAlpha: 1, duration: 0.1 }, startTime + 0.1);
              tl.to(
                currTargets,
                { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.04 },
                startTime + 0.2,
              );
            }

            if (labelsRef.current[i - 1]) {
              tl.to(
                labelsRef.current[i - 1],
                {
                  color: "var(--paragraph, #a1a1aa)",
                  fontWeight: 400,
                  duration: 0.3,
                },
                startTime,
              );
            }
            if (labelsRef.current[i]) {
              tl.to(
                labelsRef.current[i],
                {
                  color: "var(--primary, #E3FF04)",
                  fontWeight: 500,
                  duration: 0.3,
                },
                startTime + 0.2,
              );
            }
          }
        });
      });
    },
    { scope: containerRef },
  );

  const scrollToStep = (i: number) => {
    const st = ScrollTrigger.getById("desktop-st");
    if (st) {
      const y = st.start + (st.end - st.start) * (i / (TOTAL_STEPS - 1));
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full flex items-center overflow-hidden"
    >
      <div className="mx-auto max-w-[1345px] px-5 w-full flex gap-20">
        {/* Sidebar */}
        <div className="w-[220px] shrink-0 z-20 relative">
          <div
            className="relative ml-[7px]"
            style={{ height: `${(TOTAL_STEPS - 1) * 64}px` }}
          >
            <div className="absolute top-0 -left-[1.5px] h-full w-[2px] bg-white/10" />
            <div
              ref={trackFillRef}
              className="absolute top-0 -left-[1.5px] w-[2px] bg-primary z-10"
              style={{ height: "0%" }}
            />
            <div
              ref={trackDotRef}
              className="absolute -left-[7px] w-[16px] h-[16px] z-30 transform -translate-y-[8px]"
              style={{ top: "0%" }}
            >
              <div className="w-full h-full rounded-full bg-primary border-2 border-[#161320]" />
              <div className="absolute inset-0 rounded-full bg-primary/25 blur-xs scale-150" />
            </div>
            <div className="absolute -left-[7px] w-[14px] h-[14px] bottom-0 translate-y-[7px] z-20">
              <div className="w-full h-full rounded-full bg-[#e2e2e2] border-2 border-[#161320]" />
            </div>
          </div>

          <div
            className="relative w-full"
            style={{
              marginTop: `-${(TOTAL_STEPS - 1) * 64}px`,
              height: `${(TOTAL_STEPS - 1) * 64}px`,
            }}
          >
            {categoriesData.map((c, i) => (
              <div
                key={i}
                onClick={() => scrollToStep(i)}
                className="flex items-center absolute cursor-pointer group pl-10 w-full"
                style={{
                  top: `${(i / (TOTAL_STEPS - 1)) * 100}%`,
                  transform: "translateY(-50%)",
                  height: "22px",
                }}
              >
                <span
                  ref={(el) => {
                    labelsRef.current[i] = el;
                  }}
                  className="text-[15px] leading-none transition-colors duration-300"
                  style={{
                    color:
                      i === 0
                        ? "var(--primary, #E3FF04)"
                        : "var(--paragraph, #a1a1aa)",
                    fontWeight: i === 0 ? 500 : 400,
                  }}
                >
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className="flex-1 relative h-full flex items-center min-h-[500px]">
          {categoriesData.map((cat, i) => (
            <div
              key={i}
              ref={(el) => {
                panelsRef.current[i] = el;
              }}
              className="absolute inset-x-0 w-full"
              style={{
                opacity: i === 0 ? 1 : 0,
                visibility: i === 0 ? "visible" : "hidden",
                zIndex: i === 0 ? 10 : 0,
              }}
            >
              <div className="flex flex-col">
                <div className="anim-target inline-flex items-center px-5 py-2 rounded-xl mb-5 border border-primary/20 bg-primary/5 w-max opacity-80 backdrop-blur-sm">
                  <span className="text-paragraph text-sm md:text-base">
                    {cat.tag}
                  </span>
                </div>

                <h2 className="anim-target text-2xl md:text-[36px] font-semibold text-white mb-8 max-w-[650px] leading-snug transform translate-z-0">
                  {cat.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {cat.cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="anim-target about-card flex items-center justify-start rounded-xl px-5 md:px-8 py-4 md:py-5 group cursor-pointer transform translate-z-0"
                    >
                      <div className="w-[34px] h-[34px] md:w-[38px] md:h-[38px] relative mr-4 shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={`${ICON_BASE}${encodeURIComponent(card.icon)}`}
                          alt={card.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-white font-medium text-sm md:text-base lg:text-lg">
                        {card.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackFillRef = useRef<HTMLDivElement>(null);
  const trackDotRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            id: "mobile-st",
          },
        });

        tl.to(trackFillRef.current, { height: "100%", ease: "none" }, 0);
        tl.to(trackDotRef.current, { top: "100%", ease: "none" }, 0);

        panelsRef.current.forEach((panel) => {
          if (panel) {
            const targets = gsap.utils.toArray(".anim-target-mobile", panel);
            gsap.fromTo(
              targets,
              { autoAlpha: 0, y: 30 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                  trigger: panel,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-start pt-16 pb-20 overflow-visible"
    >
      <div className="w-full px-5 flex gap-5 items-stretch h-full">
        <div
          className="shrink-0 flex flex-col z-20 relative pt-2"
        >
          <div className="sticky top-32 flex flex-col ml-[7px]" style={{ height: "60vh" }}>
            <div className="absolute top-0 bottom-0 -left-[1.5px] w-[2px] bg-white/10" />
            <div
              ref={trackFillRef}
              className="absolute top-0 -left-[1.5px] w-[2px] bg-primary z-10"
              style={{ height: "0%" }}
            />
            <div
              ref={trackDotRef}
              className="absolute -left-[7px] w-[16px] h-[16px] z-30 transform -translate-y-[8px]"
              style={{ top: "0%" }}
            >
              <div className="w-full h-full rounded-full bg-primary border-2 border-[#161320]" />
              <div className="absolute inset-0 rounded-full bg-primary/25 blur-xs scale-150" />
            </div>
            <div className="absolute -left-[7px] w-[14px] h-[14px] bottom-0 translate-y-[7px] z-20">
              <div className="w-full h-full rounded-full bg-[#e2e2e2] border-2 border-[#161320]" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-16 pb-10">
          {categoriesData.map((cat, i) => (
            <div
              key={i}
              ref={(el) => {
                panelsRef.current[i] = el;
              }}
              className="w-full flex flex-col"
            >
              <p className="anim-target-mobile text-primary font-semibold text-[15px] mb-3">
                {cat.name}
              </p>

              <h2 className="anim-target-mobile text-xl font-semibold text-white mb-5 leading-snug">
                {cat.title}
              </h2>

              <div className="flex flex-col gap-3">
                {cat.cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="anim-target-mobile about-card flex items-center rounded-xl px-4 py-4 group cursor-pointer"
                  >
                    <div className="w-[30px] h-[30px] relative mr-3 shrink-0">
                      <Image
                        src={`${ICON_BASE}${encodeURIComponent(card.icon)}`}
                        alt={card.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-white font-medium text-sm">
                      {card.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CreativeSolutions() {
  return (
    <section className="w-full">
      <div className="hidden md:block">
        <DesktopView />
      </div>
      <div className="md:hidden">
        <MobileView />
      </div>
    </section>
  );
}
