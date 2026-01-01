import { Bot, MessageSquare, Zap, Sparkles } from "lucide-react";
import ServiceSectionLayout from "./ServiceSectionLayout";

export default function ChatbotAISection() {
    const features = [
        {
            title: "Custom Chatbots",
            description: "WhatsApp, Telegram, and web-based chatbots tailored to your business needs.",
            icon: MessageSquare,
        },
        {
            title: "Process Automation",
            description: "Automate repetitive tasks with intelligent AI workflows and integrations.",
            icon: Zap,
        },
        {
            title: "LLM Integration",
            description: "Leverage GPT, Claude, and other large language models for advanced reasoning.",
            icon: Sparkles,
        },
    ];

    return (
        <ServiceSectionLayout
            label="Conversational AI"
            labelIcon={Bot}
            title={
                <>
                    Chatbot & AI Agent
                </>
            }
            description="Build intelligent conversational experiences that automate customer support, streamline operations, and provide 24/7 assistance. Our AI agents understand context, learn from interactions, and integrate seamlessly with your systems."
            imageSrc="/image/data-science.png" // Reusing this as per previous implementation, might consider a new image in future.
            imageAlt="AI Chatbot Interface"
            imagePosition="right"
            projectCategory="Chatbot"
            features={features}
        />
    );
}
