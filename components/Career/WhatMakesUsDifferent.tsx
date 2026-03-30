import React from "react";
import Image from "next/image";

const features = [
  {
    title: "True Quality",
    description: "We focus on precise outcomes and meaningful work.",
    icon: (
      <Image src="/career/customer-success.svg" alt="True Quality" width={24} height={24} />
    ),
  },
  {
    title: "Clear Communication",
    description: "We work transparently and align on expectations.",
    icon: (
      <Image src="/career/interaction.svg" alt="Clear Communication" width={24} height={24} />
    ),
  },
  {
    title: "Ongoing Growth",
    description: "We offer real opportunities for skill development.",
    icon: (
      <Image src="/career/success (1) 1.svg" alt="Ongoing Growth" width={24} height={24} />
    ),
  },
  {
    title: "Real Results",
    description: "Success is measured by tangible, lasting impact.",
    icon: (
      <Image src="/career/success.svg" alt="Real Results" width={24} height={24} />
    ),
  },
  {
    title: "Meaningful Impact",
    description: "Every voice matters — And helps shape what we build.",
    icon: (
      <Image src="/career/participation.svg" alt="Meaningful Impact" width={24} height={24} />
    ),
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <section className="mt-[208px] px-4 sm:px-6 lg:px-8  mx-auto" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        What Makes Us Different?
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {/* Top row - 3 cards */}
        {features.slice(0, 3).map((feature, idx) => (
          <div
            key={idx}
            className="w-full md:w-[calc(33.333%-16px)] about-card p-8 rounded-2xl flex flex-col items-start hover:-translate-y-2 transition-transform duration-300"
            data-aos="fade-up" 
            data-aos-delay={idx * 100}
            data-aos-duration="1000"
          >
            <div className="w-12 h-12 rounded-xl bg-[rgba(255,244,34,0.1)] flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-[#A1A1A1] text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}

        {/* Bottom row - 2 cards */}
        {features.slice(3, 5).map((feature, idx) => (
          <div
            key={idx + 3}
            className="w-full md:w-[calc(33.333%-16px)] about-card p-8 rounded-2xl flex flex-col items-start hover:-translate-y-2 transition-transform duration-300"
            data-aos="fade-up" 
            data-aos-delay={(idx + 3) * 100}
            data-aos-duration="1000"
          >
            <div className="w-12 h-12 rounded-xl bg-[rgba(255,244,34,0.1)] flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-[#A1A1A1] text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
