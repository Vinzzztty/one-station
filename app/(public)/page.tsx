import CTASection from "@/components/section/home/CTASection";
import HeroSection from "@/components/section/home/HeroSection";
import LogoMarquess from "@/components/section/home/LogoMarquess";
import VisionSection from "@/components/section/home/VisionSection";
import ServicesSection from "@/components/section/home/ServicesSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <VisionSection />
      <ServicesSection />
      <LogoMarquess />
      <CTASection />
    </div>
  );
}
