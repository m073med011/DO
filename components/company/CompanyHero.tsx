"use client";

import React from 'react';

interface CompanyHeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function CompanyHero({ onScrollToSection }: CompanyHeroProps) {
  return (
    <div className=" relative flex h-[calc(100dvh-120px)] md:h-[calc(100dvh-168px)]">
      <div className="flex items-center justify-center">
        <div className="w-full md:max-w-[784px]">
          <h1 
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="150"
            className="text-2xl font-semibold text-white max-md:text-center md:text-4xl md:font-semibold md:leading-[50.4px] lg:text-6xl lg:font-bold lg:leading-[78px]"
          >
            DO: Where Ideas Become Digital Reality. Not Just Dreams.
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="350"
            className="mb-8 mt-4 text-sm text-paragraph max-md:text-center lg:text-base"
          >
            At DO, We Don’t Just Imagine The Future — We Build It. We Turn Ideas Into Bold Digital Solutions Through Strategy, Design, And Collaboration.
          </p>
          <div 
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="550" 
            className="flex justify-start max-md:justify-center"
          >
             <button
          className="h-[48px] w-fit cursor-pointer px-8 mt-5 rounded-xl transition-all duration-500 ease-in-out
  bg-[linear-gradient(to_right,_#AF99FF_0%,_#AF99FF_1%,_#FFF422_50%,_#FFF422_100%)]
  text-black text-sm font-medium md:text-base"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="450"
        >
          Start Your Digital Journey
        </button>
          </div>
        </div>
      </div>
    </div>
  );
}
