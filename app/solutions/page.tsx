import React from "react";
import SolutionsHero from "../../components/Solutions/SolutionsHero";
import ProcessSection from "../../components/Solutions/ProcessSection";
import CreativeSolutions from "../../components/Solutions/CreativeSolutions";
import AdvancedTools from "@/components/Solutions/AdvancedTools";
import Products from "@/components/Home/products";
import ClosedFooter from "@/components/company/ClosedFooter";
export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <SolutionsHero />
      <ProcessSection />
      <CreativeSolutions />
      <AdvancedTools />
      <Products />
       <ClosedFooter 
          link="/contact" 
          title="Ready To Make A Real Impact?" 
          description="Grow Your Business With Smart Digital Solutions, Or Join A Team That Leads Change With Creativity. Your Journey Starts Here — With Digital Order."
          bottomOneTitle="Join as a Client" 
          bottomTwoTitle="Join the Team" 
        />
    </div>
  );
}
