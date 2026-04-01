"use client";

import React from 'react';
import Image from '@/components/shared/CustomImage';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const NumberSuccess = () => {
  const t = useTranslations("Company.numbers");

  return (
    <section className="my-[clamp(2.5rem,15vw,18rem)] relative overflow-hidden text-white" id="NumberSuccess">
      {/* Centered Background Glow */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary rounded-full blur-2xl opacity-10   md:blur-[150px] pointer-events-none z-0"></div> */}

      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-12 md:gap-8 w-full relative z-10">
        
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10">
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-semibold leading-tight mb-5" data-aos="fade-up" data-aos-duration="800">
            {t.rich("title", {
              br: () => <br className="hidden md:block" />
            })}
          </h2>
          <p className="text-[#a1a1a1] text-sm md:text-base lg:text-lg max-w-[400px] mb-8 leading-[1.6]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
            {t("description")}
          </p>
          
          <Link 
            href="/portfolio"
            className="flex items-center gap-3 text-white text-sm hover:text-primary transition-colors group mt-2"
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="300"
          >
            <span className="font-medium text-[15px]">{t("explore")}</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:border-primary/50 group-hover:bg-white/5 transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Right Cards Area */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end items-center z-10 mt-6 md:mt-0">
          
          {/* SVG Shape Background */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none md:translate-x-8">
            
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <Image 
                src="/Don’t Just Offer Services/Statistics Shape.svg" 
                alt="Statistics Shape" 
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="relative z-10 flex gap-4 w-full max-w-[340px] md:max-w-[420px]">
            {/* Left Column */}
            <div className="flex flex-col gap-4 w-1/2">
              {/* Card 1 */}
              <div 
                className="statistics-card bg-[#151419]/80 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center"
                data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
              >
                <span className="text-3xl md:text-[34px] font-bold text-white mb-2 tracking-tight">+10</span>
                <span className="text-[#A1A1A1] text-[13px] md:text-sm">{t("exp")}</span>
              </div>
              
              {/* Card 3 */}
              <div 
                className="statistics-card bg-[#151419]/80 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center"
                data-aos="fade-up" data-aos-duration="800" data-aos-delay="300"
              >
                <span className="text-3xl md:text-[34px] font-bold text-white mb-2 tracking-tight">+30</span>
                <span className="text-[#A1A1A1] text-[13px] md:text-sm">{t("team")}</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 w-1/2 md:translate-y-8">
              {/* Card 2 */}
              <div 
                className="statistics-card bg-[#151419]/80 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center"
                data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"
              >
                <span className="text-3xl md:text-[34px] font-bold text-white mb-2 tracking-tight">+120</span>
                <span className="text-[#A1A1A1] text-[13px] md:text-sm">{t("solutions")}</span>
              </div>
              
              {/* Card 4 */}
              <div 
                className="statistics-card bg-[#151419]/80 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center"
                data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"
              >
                <span className="text-3xl md:text-[34px] font-bold text-white mb-2 tracking-tight">+200</span>
                <span className="text-[#A1A1A1] text-[13px] md:text-sm">{t("clients")}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NumberSuccess;

