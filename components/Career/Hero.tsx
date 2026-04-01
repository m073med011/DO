import React from "react";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Career.hero");

  return (
    <section className="relative mt-49 mb-52 px-4 sm:px-6 lg:px-8 mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
      {/* Background glow just in case */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[rgba(175,153,255,0.05)] blur-[120px] rounded-full z-[-1]"></div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        {t.rich('title', {
          br: () => <br className="hidden md:block" />
        })}
      </h1>

      <p className="text-[#A1A1A1] text-base md:text-lg max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        {t("description1")}
        <br className="hidden md:block" />
        {t("description2")}
      </p>
    </section>
  );
};

export default Hero;
