import React from 'react';
import Hero from '@/components/Career/Hero';
import WhatMakesUsDifferent from '@/components/Career/WhatMakesUsDifferent';
import AvailableRoles from '@/components/Career/AvailableRoles';
import ClosedFooter from '@/components/company/ClosedFooter';
import { useTranslations } from 'next-intl';

export default function CareerPage() {
  const t = useTranslations("Career");
  const tFooter = useTranslations("ClosedFooter");

  return (
    <main className="">
        <Hero />
        <WhatMakesUsDifferent />
        <AvailableRoles />
        <ClosedFooter 
          link="/contact" 
          title={tFooter("title")} 
          description={tFooter("description")}
          bottomOneTitle={tFooter("bottomOneTitle")} 
          bottomTwoTitle={tFooter("bottomTwoTitle")} 
        />
    </main>
  );
}
