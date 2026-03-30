"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CompanyHero from '../../components/company/CompanyHero';
import VisionSection from '../../components/company/VisionSection';
import CoreValuesSection from '../../components/company/CoreValuesSection';

import CycleSection from '../../components/company/CycleSection';
import JourneySection from '../../components/company/JourneySection';
import NumberSuccess from '../../components/company/NumberSuccess';
import PartnersSection from '../../components/company/PartnersSection';

// Placeholder components for the ones the user will provide later
import ClosedFooter from '../../components/company/ClosedFooter';

export default function CompanyPage() {
  const locale = 'en' as string; // Hardcoded for now

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div  className=" min-h-screen pb-20"> 
      <div className="container mx-auto max-w-[1384px] px-5">
        <CompanyHero onScrollToSection={scrollToSection} />
        <VisionSection />
        <CoreValuesSection />
      </div>
      
      <div id="CycleSection">
        <CycleSection />
      </div>
      <JourneySection />
      
      <div className="mx-auto max-w-[1384px] max-md:px-11">
        <NumberSuccess />
        <PartnersSection />
        <ClosedFooter 
          link="/contact" 
          title="Ready To Make A Real Impact?" 
          description="Grow Your Business With Smart Digital Solutions, Or Join A Team That Leads Change With Creativity. Your Journey Starts Here — With Digital Order."
          bottomOneTitle="Join as a Client" 
          bottomTwoTitle="Join the Team" 
        />
      </div>
    </div>
  );
}