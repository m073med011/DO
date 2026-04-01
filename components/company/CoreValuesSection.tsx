import React from 'react';
import CoreValueCard from './CoreValueCard';
import { useTranslations } from 'next-intl';

const getAosDelay = (id: number) => {
  if (id === 1 || id === 3) return 400;
  if (id === 4 || id === 5 || id === 6) return 200;
  if (id === 2) return 100;
  return 0;
};

export default function CoreValuesSection() {
  const t = useTranslations("Company.values");

  const CoreValuesCards = [
    {
      id: 1,
      title: t("items.innovation.title"),
      description: t("items.innovation.description"),
      img: "/company/Innovation.svg",
    },
    {
      id: 2,
      title: t("mainTitle"),
    },
    {
      id: 3,
      title: t("items.customer.title"),
      description: t("items.customer.description"),
      img: "/company/Customer-Centricity.svg",
    },
    {
      id: 4,
      title: t("items.excellence.title"),
      description: t("items.excellence.description"),
      img: "/company/Excellence.svg",
    },
    {
      id: 5,
      title: t("items.integrity.title"),
      description: t("items.integrity.description"),
      img: "/company/Integrity.svg",
    },
    {
      id: 6,
      title: t("items.collaboration.title"),
      description: t("items.collaboration.description"),
      img: "/company/Collaboration.svg",
    },
  ];

  return (
    <section className="relative my-[clamp(2.5rem,15vw,18rem)]">
      <div className="relative grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
        <div 
          data-aos="fade-up" 
          data-aos-duration="800" 
          data-aos-delay="150"
          className="glassCore relative hidden min-h-[173px] border-primary/25 items-center justify-start rounded-xl border px-7 py-6 max-xl:flex md:px-12 md:py-10 lg:justify-center"
        >
          <h1 className="mx-auto relative z-20 max-w-[166px] text-5xl text-center font-bold text-primary md:leading-[67.2px]">
            {t("mainTitle")}
          </h1>
          <div className="blob bg-primary" aria-hidden="true"></div>
        </div>
        
        {CoreValuesCards.map((card) => (
          <CoreValueCard 
            key={card.id} 
            id={card.id} 
            title={card.title} 
            description={card.description}
            data-aos="fade-up" 
            data-aos-duration="600" 
            data-aos-delay={getAosDelay(card.id)}
          >
            {card.img && (
              <img src={card.img} alt={card.title} loading="lazy" className="mb-4" />
            )}
          </CoreValueCard>
        ))}
      </div>
    </section>
  );
}
