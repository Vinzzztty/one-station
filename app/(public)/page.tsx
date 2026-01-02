import CTASection from "@/components/section/home/CTASection";
import HeroSection from "@/components/section/home/HeroSection";
import LogoMarquess from "@/components/section/home/LogoMarquess";
import VisionSection from "@/components/section/home/VisionSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <VisionSection />
      <LogoMarquess />
      <CTASection />
    </div>
  );
}
