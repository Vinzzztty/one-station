import CTASection from "@/components/section/home/CTASection";
import HeroSection from "@/components/section/home/HeroSection";
import FeaturedWork from "@/components/section/home/FeaturedWork";
import LogoMarquess from "@/components/section/home/LogoMarquess";
import ServicesSection from "@/components/section/home/ServicesSection";
import StatsSection from "@/components/section/home/StatsSection";
import VisionSection from "@/components/section/home/VisionSection";
import WhyChooseUsSection from "@/components/section/home/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedWork />
      <StatsSection />
      <VisionSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <LogoMarquess />
      <CTASection />
    </div>
  );
}
