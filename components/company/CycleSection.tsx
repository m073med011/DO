"use client";

import React, { useState } from 'react';
import Image from '@/components/shared/CustomImage';
import { useTranslations } from 'next-intl';

const AccordionItem = ({ title, items, isOpen, onToggle }: { title: string, items: string[], isOpen: boolean, onToggle: () => void }) => {
  return (
    <div className="bg-[#110e1a] rounded-xl overflow-hidden mb-4 border border-[#211d33]">
      <button 
        onClick={onToggle}
        className="w-full p-5 flex justify-between items-center text-white bg-[#151221] text-left hover:bg-[#1a1726] transition-colors"
      >
        <span className="font-semibold text-sm">{title}</span>
        <span className="text-xl leading-none">{isOpen ? '-' : '+'}</span>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 p-5' : 'max-h-0 opacity-0 px-5 py-0'}`}
      >
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-center text-gray-400 text-xs">
              <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function CycleSection() {
  const [openAccordion, setOpenAccordion] = useState<'team' | 'clients' | null>('clients');
  const t = useTranslations("Company.cycle");

  const teamItems = t.raw("teamItems") as string[];
  const clientItems = t.raw("clientItems") as string[];

  return (
    <section className="my-[clamp(2.5rem,15vw,18rem)] relative bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-[1384px] px-5 relative z-10 text-center mb-12 md:mb-16">
        <h2 className="text-[20px] md:text-[32px] font-semibold text-white leading-tight md:px-4" data-aos="fade-up">
          {t.rich("title", {
            br: () => <br className="hidden md:block"/>
          })}
        </h2>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex relative w-full max-w-[1920px] mx-auto min-h-[561px] items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <Image 
            src="/company/Shape.svg" 
            alt="Background Aura" 
            width={1920} 
            height={561}
            className="w-full object-cover object-center h-auto min-h-[561px]"
            priority
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-[288px] h-[288px] flex items-center justify-center">
            {/* Inner DO Text */}
            <span className="font-black italic text-white text-[64px] tracking-wider leading-none select-none drop-shadow-md pr-1">
              DO
            </span>

            {/* Top Text */}
            <div className="absolute inset-0 flex justify-center">
              <span className="text-white text-[20px] font-medium mt-[22px] tracking-wide">{t("build")}</span>
            </div>

            {/* Bottom Right Text */}
            <div className="absolute inset-0 flex items-end justify-center rotate-[-50deg]">
              <span className="text-white text-[20px] font-medium mb-[22px] tracking-wide">{t("manage")}</span>
            </div>

            {/* Bottom Left Text */}
            <div className="absolute inset-0 flex items-end justify-center rotate-60">
              <span className="text-white text-[20px] font-medium mb-[22px] tracking-wide">{t("launch")}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-[1384px] px-5 flex justify-between relative z-20 h-full w-full py-10">
          {/* Left List - Team */}
          <div className="w-[40%] flex flex-col justify-center" data-aos="fade-right">
             <h3 className="text-white text-[18px] font-bold text-center mb-12 pl-10">{t("forTeam")}</h3>
             <ul className="space-y-[52px] pl-[15%]">
                {teamItems.map((item, index) => (
                  <li key={index} className="flex items-center text-[#A1A1A1] text-[13px] relative whitespace-nowrap">
                    <span className="w-1 h-1 bg-[#A1A1A1] rounded-full mr-5 shrink-0"></span>
                    {item}
                  </li>
                ))}
             </ul>
          </div>

          {/* Right List - Clients */}
          <div className="w-[40%] flex flex-col justify-center" data-aos="fade-left">
             <h3 className="text-white text-[18px] font-bold text-center mb-12 pl-10">{t("forClients")}</h3>
             <ul className="space-y-[52px] pl-[45%]">
                {clientItems.map((item, index) => (
                  <li key={index} className="flex items-center text-[#A1A1A1] text-[13px] relative whitespace-nowrap">
                    <span className="w-1 h-1 bg-[#A1A1A1] rounded-full mr-5 shrink-0"></span>
                    {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden container mx-auto px-5 relative z-20 pb-10">
        <div className="flex justify-center mb-16 relative" data-aos="zoom-in">
          <Image 
            src="/company/Shape (1).svg" 
            alt="Cycle Graphic DO" 
            width={290} 
            height={290}
            className="w-[240px] h-[240px] object-contain"
          />
        </div>

        <div className="max-w-[400px] mx-auto" data-aos="fade-up">
          <AccordionItem 
            title={t("forTeam")} 
            items={teamItems} 
            isOpen={openAccordion === 'team'}
            onToggle={() => setOpenAccordion(openAccordion === 'team' ? null : 'team')}
          />
          <AccordionItem 
            title={t("forClients")} 
            items={clientItems} 
            isOpen={openAccordion === 'clients'}
            onToggle={() => setOpenAccordion(openAccordion === 'clients' ? null : 'clients')}
          />
        </div>
      </div>
    </section>
  );
}

