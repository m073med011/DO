import React from "react";
import Image from "@/components/shared/CustomImage";
import { useTranslations } from "next-intl";

const WhatMakesUsDifferent = () => {
  const t = useTranslations("Career.different");

  const features = [
    {
      title: t("features.quality.title"),
      description: t("features.quality.description"),
      icon: (
        <Image src="/career/customer-success.svg" alt="True Quality" width={24} height={24} />
      ),
    },
    {
      title: t("features.communication.title"),
      description: t("features.communication.description"),
      icon: (
        <Image src="/career/interaction.svg" alt="Clear Communication" width={24} height={24} />
      ),
    },
    {
      title: t("features.growth.title"),
      description: t("features.growth.description"),
      icon: (
        <Image src="/career/success (1) 1.svg" alt="Ongoing Growth" width={24} height={24} />
      ),
    },
    {
      title: t("features.results.title"),
      description: t("features.results.description"),
      icon: (
        <Image src="/career/success.svg" alt="Real Results" width={24} height={24} />
      ),
    },
    {
      title: t("features.impact.title"),
      description: t("features.impact.description"),
      icon: (
        <Image src="/career/participation.svg" alt="Meaningful Impact" width={24} height={24} />
      ),
    },
  ];

  return (
    <section className="mt-[208px] px-4 sm:px-6 lg:px-8  mx-auto" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        {t("title")}
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

