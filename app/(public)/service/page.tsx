import BusinessSolutionSection from "@/components/section/service/BusinessSolustionSection";
import CTASection from "@/components/section/service/CTASection";
import DataScienceSection from "@/components/section/service/DataScienceSection";
import HeroSection from "@/components/section/service/HeroSection";
import MobileSection from "@/components/section/service/MobileSection";
import ServiceTags from "@/components/section/service/ServiceTags";
import StationBridge from "@/components/section/service/StationBridge";
import TrainingSection from "@/components/section/service/TrainingSection";
import WebsiteSection from "@/components/section/service/WebsiteSection";

export default function ServicePage() {
  return (
    <div>
      <HeroSection />
      <ServiceTags />
      <DataScienceSection />
      <MobileSection />
      <WebsiteSection />
      <BusinessSolutionSection />
      <TrainingSection />
      <StationBridge />
      <CTASection />
    </div>
  );
}
