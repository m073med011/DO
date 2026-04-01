import React from 'react';
import Image from '@/components/shared/CustomImage';
import { useTranslations } from 'next-intl';

export default function SolutionsHero() {
  const t = useTranslations("Solutions.hero");

  return (
    <div className="relative flex min-h-[calc(100vh-120px)] flex-col items-center justify-center pt-10 md:pt-20">
      <div className="w-full max-w-[900px] px-5 text-center z-10">
        <h1 className="text-[28px] font-semibold tracking-tight text-white md:text-[50px] md:leading-[1.2] lg:font-bold" data-aos="fade-up" data-aos-duration="800">
          {t.rich("title", {
            br: () => <br className="hidden md:block"/>
          })}
        </h1>
        <p className="mx-auto mt-6 max-w-[650px] text-sm text-paragraph md:text-[16px] md:leading-relaxed" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
          {t("description")}
        </p>
        
        <button className="mt-8 h-[48px] cursor-pointer rounded-[12px] bg-[linear-gradient(to_right,#AF99FF_0%,#AF99FF_1%,#FFF422_50%,#FFF422_100%)] px-8 text-sm font-medium text-black transition-all duration-500 ease-in-out hover:scale-105 md:text-base" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          {t("cta")}
        </button>
      </div>

      {/* SVG and Badges - Desktop only */}
      <div className="hidden md:block relative w-full max-w-[1345px] mt-16 mx-auto h-[400px] pointer-events-none" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
         <Image 
           src="/Technologies%20Circles.svg" 
           alt="Technologies Rings" 
           width={1345} 
           height={400} 
           className="absolute top-0 start-1/2 -translate-x-1/2 object-cover object-top"
           priority
         />
         
         <div className="absolute top-[120px] start-[25%] lg:start-[27%] transform -translate-x-1/2 rounded-[12px] bg-[#1a1728]/80 px-6 py-[10px] text-[13px] text-paragraph shadow-xl border border-white/5 backdrop-blur-md" data-aos="fade-right" data-aos-duration="700" data-aos-delay="500">
           {t("partnership")}
         </div>
         <div className="absolute top-[180px] start-1/2 transform -translate-x-1/2 rounded-[12px] bg-[#1a1728]/80 px-6 py-[10px] text-[13px] text-paragraph shadow-xl border border-white/5 backdrop-blur-md" data-aos="fade-up" data-aos-duration="700" data-aos-delay="600">
           {t("customization")}
         </div>
         <div className="absolute top-[120px] end-[25%] lg:end-[27%] transform translate-x-1/2 rounded-[12px] bg-[#1a1728]/80 px-6 py-[10px] text-[13px] text-paragraph shadow-xl border border-white/5 backdrop-blur-md" data-aos="fade-left" data-aos-duration="700" data-aos-delay="500">
           {t("integration")}
         </div>
         <div className="absolute top-[230px] start-[34%] lg:start-[36%] transform -translate-x-1/2 rounded-[12px] bg-[#1a1728]/80 px-6 py-[10px] text-[13px] text-paragraph shadow-xl border border-white/5 backdrop-blur-md" data-aos="fade-right" data-aos-duration="700" data-aos-delay="700">
           {t("creative")}
         </div>
         <div className="absolute top-[230px] end-[34%] lg:end-[36%] transform translate-x-1/2 rounded-[12px] bg-[#1a1728]/80 px-6 py-[10px] text-[13px] text-paragraph shadow-xl border border-white/5 backdrop-blur-md" data-aos="fade-left" data-aos-duration="700" data-aos-delay="700">
           {t("innovation")}
         </div>
      </div>
    </div>
  );
}

