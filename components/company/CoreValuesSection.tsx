import React from 'react';
import CoreValueCard from './CoreValueCard';

const getAosDelay = (id: number) => {
  if (id === 1 || id === 3) return 400;
  if (id === 4 || id === 5 || id === 6) return 200;
  if (id === 2) return 100;
  return 0;
};

const CoreValuesCards = [
  {
    id: 1,
    title: "Innovation",
    description: "We strive to create cutting-edge solutions that transform businesses.",
    img: "/company/Innovation.svg",
  },
  {
    id: 2,
    title: "Core Values",
  },
  {
    id: 3,
    title: "Customer-Centricity",
    description: "Our Clients’ Success Is At The Heart Of Everything We Do.",
    img: "/company/Customer-Centricity.svg",
  },
  {
    id: 4,
    title: "Excellence",
    description: "We Are Committed To Delivering Top-Notch Results In Everything We Do.",
    img: "/company/Excellence.svg",
  },
  {
    id: 5,
    title: "Integrity",
    description: "We Operate With Honesty And Transparency In All Our Interactions.",
    img: "/company/Integrity.svg",
  },
  {
    id: 6,
    title: "Collaboration",
    description: "We Believe In The Power Of Collaboration To Achieve Shared Goals.",
    img: "/company/Collaboration.svg",
  },
];

export default function CoreValuesSection() {
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
            Core Values
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
