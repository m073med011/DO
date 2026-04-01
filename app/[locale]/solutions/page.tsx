import React from "react";
import SolutionsHero from "@/components/Solutions/SolutionsHero";
import ProcessSection from "@/components/Solutions/ProcessSection";
import CreativeSolutions from "@/components/Solutions/CreativeSolutions";
import AdvancedTools from "@/components/Solutions/AdvancedTools";
import Products from "@/components/Home/products";
import ClosedFooter from "@/components/company/ClosedFooter";
import { useTranslations } from "next-intl";

export default function SolutionsPage() {
  const tFooter = useTranslations("ClosedFooter");

  return (
    <div className="min-h-screen">
      <SolutionsHero />
      <ProcessSection />
      <CreativeSolutions />
      <AdvancedTools />
      <Products />
       <ClosedFooter 
          link="/contact" 
          title={tFooter("title")} 
          description={tFooter("description")}
          bottomOneTitle={tFooter("bottomOneTitle")} 
          bottomTwoTitle={tFooter("bottomTwoTitle")} 
        />
    </div>
  );
}
