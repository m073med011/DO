import HeroSection from "@/components/Home/HeroSection";
import Parternars from "@/components/Home/parternars";
import StatisticsSection from "@/components/Home/StatisticsSection";
import WhyDigitalSection from "@/components/Home/WhyDigitalSection";
import FocusedSolutions from "@/components/Home/FocusedSolutions";
import Products from "@/components/Home/products";

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto max-w-[1384px] px-5">
      <HeroSection />
      <StatisticsSection/>
      <WhyDigitalSection/>
      <FocusedSolutions/>
      </div>
      <Parternars />
      <Products/>
    </main>
  );
}
