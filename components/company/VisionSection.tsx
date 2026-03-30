import React from 'react';
import Explore from '../shared/Explore';
import Image from 'next/image';

export default function VisionSection() {
  return (
    <section className="relative">
      <div className="relative flex items-center justify-between gap-20 max-xl:flex-col">
        <div className="w-full lg:max-w-[664px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
          <h1 className="mb-8 text-3xl font-bold text-white md:text-5xl md:leading-[67.2px]">
            Digital Order: Where Vision Meets Innovation.
          </h1>
          <p className="mb-2 text-paragraph md:text-lg">
            We Don’t Just Dream — We Make Dreams Happen.
          </p>
          <p className="mb-10 text-base text-paragraph md:text-lg">
            At Digital Order, We Turn Bold Ideas Into Real Digital Solutions By Combining Creativity With Advanced Technology To Build A Strong Presence, Improve Performance, And Drive Sustainable Growth.
          </p>
          <Explore title="Explore Our Solutions" path="solutions" />
        </div>
        <div className="relative flex flex-col gap-7">
          <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
            <Image
              data-aos="fade-up" 
              data-aos-delay="150" 
              data-aos-duration="600" 
              src="/company/V-Waves.svg" 
              alt="aboutUsShap" 
              loading="lazy" 
              className="h-full w-full object-cover" 
              width={904}
              height={904}
            />
          </div>
          {/* Using a mocked VisionCard structure inline for now */}
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="600" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 relative z-10">
            <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
            <p className="text-paragraph">To Be The Leading Digital Partner, Empowering Businesses To Thrive In A Constantly Evolving Digital World.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="600" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 relative z-10">
            <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
            <p className="text-paragraph">To Revolutionize Businesses With Innovative Digital Solutions That Drive Growth And Efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
