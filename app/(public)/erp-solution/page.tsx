import HeroSection from "@/components/section/erp-solution/HeroSection";
import ERPFeaturesSection from "@/components/section/erp-solution/ERPFeaturesSection";
import ERPProcessSection from "@/components/section/erp-solution/ERPProcessSection";
import ERPPortfolioSection from "@/components/section/erp-solution/ERPPortfolioSection";
import ERPPricingSection from "@/components/section/erp-solution/ERPPricingSection";
import ERPCalculatorSection from "@/components/section/erp-solution/ERPCalculatorSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ERP Solutions – Custom Enterprise Systems",
    description:
        "One Station builds custom ERP systems that scale with your business. From operations to back office, our enterprise resource planning software drives efficiency.",
    alternates: {
        canonical: "/erp-solution",
    },
};

export default function ERPSolutionPage() {
    return (
        <main className="min-h-screen bg-background">
            <HeroSection />
            <ERPFeaturesSection />
            <ERPProcessSection />
            <ERPPortfolioSection />
            <ERPPricingSection />
            <ERPCalculatorSection />
        </main>
    );
}
