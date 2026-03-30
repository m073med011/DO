import React from 'react';
import Hero from '@/components/Career/Hero';
import WhatMakesUsDifferent from '@/components/Career/WhatMakesUsDifferent';
import AvailableRoles from '@/components/Career/AvailableRoles';
import ClosedFooter from '@/components/company/ClosedFooter';
export const metadata = {
  title: "Career - Home Do",
  description: "Join our global team of self-driven creators and doers.",
};

export default function CareerPage() {
  return (
    <main className="">
      
        <Hero />
        <WhatMakesUsDifferent />
        <AvailableRoles />
<ClosedFooter 
          link="/contact" 
          title="Ready To Make A Real Impact?" 
          description="Grow Your Business With Smart Digital Solutions, Or Join A Team That Leads Change With Creativity. Your Journey Starts Here — With Digital Order."
          bottomOneTitle="Join as a Client" 
          bottomTwoTitle="Join the Team" 
        />
          </main>
  );
}
