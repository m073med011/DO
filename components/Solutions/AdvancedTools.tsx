"use client";
import React, { useState } from "react";
import Image from "next/image";

const tabs = [
  "Design",
  "Photography & Production",
  "Digital Marketing",
  "Development",
];

const tabTools: Record<number, string[]> = {
  0: [
    "Tech Stack Logos (1).png",
    "Tech Stack Logos (2).png",
    "Tech Stack Logos (3).png",
    "Tech Stack Logos (4).png",
    "Tech Stack Logos (5).png",
    "Tech Stack Logos (6).png",
  ],
  1: [
    "Tech Stack Logos (3).png",
    "Tech Stack Logos (4).png",
    "Tech Stack Logos (5).png",
    "Tech Stack Logos (6).png",
  ],
  2: [
    "Tech Stack Logos (1).png",
    "Tech Stack Logos (2).png",
    "Tech Stack Logos (5).png",
    "Tech Stack Logos (6).png",
  ],
  3: [
    "Tech Stack Logos (2).png",
    "Tech Stack Logos (3).png",
    "Tech Stack Logos (4).png",
    "Tech Stack Logos (1).png",
    "Tech Stack Logos (5).png",
    "Tech Stack Logos (6).png",
  ],
};


export default function AdvancedTools() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full mb-[clamp(2.5rem,15vw,18rem)]">
      <div className="mx-auto max-w-[1345px] px-5">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-8 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-semibold md:max-w-[400px] leading-snug basis-1/2" data-aos="fade-up" data-aos-duration="800">
            We Use Advanced Tools For Professional Results
          </h2>
          <p className="text-paragraph text-sm md:text-base md:max-w-[500px] basis-1/2 leading-relaxed" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
            Our team relies on the latest tools and tech to ensure quality work
            and diverse solutions. We use tools that boost collaboration and
            speed up design and development for the best outcomes.
          </p>
        </div>

        {/* Separator */}
        <div className="hidden md:block w-full h-px bg-white/10 mb-16" />

        {/* Bottom Content Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Tabs */}
          <div className="flex flex-row md:flex-col gap-3 md:gap-6 overflow-x-auto no-scrollbar pb-2 md:pb-0 md:min-w-[250px] md:w-[30%]" data-aos="fade-right" data-aos-duration="700">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-left transition-all duration-300 whitespace-nowrap md:whitespace-normal font-medium text-sm md:text-base ${
                    isActive
                      ? "bg-primary text-[#0c0c11]"
                      : "text-paragraph hover:text-white bg-transparent"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Vertical Separator */}
          <div className="hidden md:block w-px bg-white/10 shrink-0" />

          {/* Icons Grid */}
          <div className="flex-1 flex justify-center lg:justify-start" data-aos="fade-left" data-aos-duration="700" data-aos-delay="150">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-8.5 w-fit content-start">
              {(tabTools[activeTab] ?? []).map((tool: string, idx: number) => (
                <div
                  key={`${activeTab}-${idx}`}
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={idx * 150}
                  className="w-[3.5rem] h-[3.5rem] shrink-0 relative rounded-[1rem] bg-[#1a1824] border border-white/5 flex items-center justify-center group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-[60%] h-[60%] relative group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={`/solutions/Advanceed%20Tools/${encodeURIComponent(tool)}`}
                      alt={`${tabs[activeTab]} Tool ${idx + 1}`}
                      fill
                      className="object-contain"
                      suppressHydrationWarning
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
