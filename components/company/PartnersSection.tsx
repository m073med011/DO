import React from 'react';
import Image from '@/components/shared/CustomImage';
import { useTranslations } from 'next-intl';

const PartnersSection = () => {
  const t = useTranslations("Company.partners");

  const partners = [
    "twitter", "Discord", "instagram", "Snapchat", "AppleMusic", "Behance",
    "twitch", "TikTok", "twitter", "Discord", "instagram", "Snapchat",
    "AppleMusic", "Discord", "instagram", "Snapchat", "AppleMusic", "Behance",
    "TikTok", "twitter", "twitch", "instagram", "Snapchat", "Discord",
    "Discord", "instagram", "AppleMusic", "Behance", "Discord", "twitch",
    "instagram", "Snapchat", "twitter", "Discord", "", ""
  ];

  return (
    <section className="my-[clamp(2.5rem,15vw,18rem)] w-full">
      <div className="mb-14 text-center px-4">
        <h2 className="text-[22px] md:text-[32px] font-semibold text-white leading-snug tracking-wide">
          {t.rich("title", {
            br: () => <br className="hidden md:block"/>
          })}
        </h2>
      </div>

      <div 
        className="w-full mx-auto relative"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 100%)'
        }}
      >
        <div className="grid grid-cols-3 md:grid-cols-[1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr] w-full h-full">
          {partners.map((partner, index) => {
            const isMobileRight = index % 3 === 2;
            const isDesktopRight = index % 6 === 5;
            const isMobileBottom = index >= partners.length - 3;
            const isDesktopBottom = index >= partners.length - 6;

            return (
              <div 
                key={index} 
                className={`flex items-center justify-center p-6 md:p-10 h-[100px] md:h-[160px] group transition-all duration-300 border-white/5 ${isMobileRight ? 'border-r-0' : 'border-r'} ${isDesktopRight ? 'md:border-r-0' : 'md:border-r'} ${isMobileBottom ? 'border-b-0' : 'border-b'} ${isDesktopBottom ? 'md:border-b-0' : 'md:border-b'}`}
              >
                {partner ? (
                  <div className="relative w-full h-6 md:h-10 opacity-40 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Image
                      src={`/parternars/${partner}.svg`}
                      alt={`${partner} partner logo`}
                      fill
                      className="object-contain transition-all duration-300" 
                      draggable={false}
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

