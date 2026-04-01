import React from 'react';
import Image from '@/components/shared/CustomImage';
import { useTranslations } from 'next-intl';

export default function ProcessSection() {
  const t = useTranslations("Solutions.process");

  const cards = [
    {
      title: t("items.implement.title"),
      description: t("items.implement.description")
    },
    {
      title: t("items.strategize.title"),
      description: t("items.strategize.description")
    },
    {
      title: t("items.solve.title"),
      description: t("items.solve.description")
    }
  ];

  return (
    <div className="relative py-20 md:py-32 w-full overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1345px] px-5 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-white md:text-4xl lg:text-[40px] leading-tight mb-16" data-aos="fade-up" data-aos-duration="800">
          {t.rich("title", {
            br: () => <br />
          })}
        </h2>

        {/* Central Graphic */}
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] items-center justify-center flex">
          {/* Glow Star Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1704px] h-[250px] md:h-[460px] pointer-events-none z-0">
            <Image
              src="/Glow%20Star.svg"
              alt="Glow Star Background"
              fill
              className="object-contain object-center"
            />
          </div>

          <Image
            src="/solutions/How%20Work%20Shape.svg"
            alt="How We Work graphic"
            fill
            className="object-contain relative z-10"
          />
        </div>

        {/* Connecting lines - Desktop only */}
        <div className="hidden md:block relative w-full max-w-[700px] h-[160px] pointer-events-none md:mt-24 md:mb-10 opacity-70">
          <Image
            src="/solutions/Lines%20(2).svg"
            alt="Connecting lines"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* Cards Section */}
        <div className="relative w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:mt-0 mt-16">

          {cards.map((card, index) => (
            <div 
              key={index}
              className="about-card relative z-10 flex flex-col justify-start rounded-xl px-7 py-6 md:px-8 md:py-8"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={index * 150}
            >
              <h3 className="mb-4 text-[20px] font-semibold text-white">{card.title}</h3>
              <p className="text-base text-paragraph md:leading-[28.8px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

