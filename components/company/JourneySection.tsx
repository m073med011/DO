import Image from '@/components/shared/CustomImage';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function JourneySection() {
  const t = useTranslations("Company.journey");

  const journeyData = [
    { year: "2014", text: t("items.2014") },
    { year: "2016", text: t("items.2016") },
    { year: "2018", text: t("items.2018") },
    { year: "2020", text: t("items.2020") },
    { year: "2023", text: t("items.2023") },
    { year: "2025", text: t("items.2025") },
  ];

  return (
    <section className="text-white my-[clamp(2.5rem,15vw,18rem)] w-full flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold mb-16 text-center max-w-4xl leading-snug lg:leading-tight">
        {t.rich("title", {
          br: () => <br className="hidden md:block"/>
        })}
      </h2>

      {/* Desktop View */}
      <div className="hidden md:flex w-full justify-center max-w-[1664px]">
        <Image 
          src="/company/Content.svg" 
          alt="Journey Timeline" 
          width={1664} 
          height={560} 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full max-w-md mx-auto flex flex-col pl-2">
        {journeyData.map((item, index) => (
          <div key={item.year} className="flex flex-row relative">
            {/* Year */}
            <div className={`w-14 shrink-0 font-medium pt-px ${index === 0 ? 'text-primary' : 'text-white'}`}>
              {item.year}
            </div>

            {/* Node & Line */}
            <div className="flex flex-col items-center w-6 shrink-0 mx-2">
              <div 
                className={`w-[10px] h-[10px] rounded-full mt-1.5 relative z-10 ${index === 0 ? 'bg-primary' : 'bg-[#E3E3E3]'}`} 
              />
              {index !== journeyData.length - 1 && (
                <div className={`w-px flex-1 my-1 opacity-80 ${index === 0 ? 'bg-primary' : 'bg-[#4D4D4D]'}`} />
              )}
            </div>

            {/* Text */}
            <div className="flex-1 pl-4 pb-12 text-[15px] font-light text-paragraph leading-relaxed pr-2">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

