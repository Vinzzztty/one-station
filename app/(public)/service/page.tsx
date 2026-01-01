import BusinessSolutionSection from "@/components/section/service/BusinessSolustionSection";
import ChatbotAISection from "@/components/section/service/ChatbotAISection";
import CTASection from "@/components/section/service/CTASection";
import DataScienceSection from "@/components/section/service/DataScienceSection";
import MobileSection from "@/components/section/service/MobileSection";
import TrainingSection from "@/components/section/service/TrainingSection";
import WebsiteSection from "@/components/section/service/WebsiteSection";

export default function ServicePage() {
  return (
    <div className="scroll-smooth">

      <div id="data-science">
        <DataScienceSection />
      </div>

      <div id="chatbot-ai">
        <ChatbotAISection />
      </div>

      <div id="mobile-development">
        <MobileSection />
      </div>

      <div id="website-development">
        <WebsiteSection />
      </div>

      <div id="business-solutions">
        <BusinessSolutionSection />
      </div>

      <div id="training">
        <TrainingSection />
      </div>
      <CTASection />
    </div>
  );
}
