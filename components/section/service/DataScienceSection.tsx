import { BarChart3, Brain, CheckCircle } from "lucide-react";
import ServiceSectionLayout from "./ServiceSectionLayout";

export default function DataScienceSection() {
  const features = [
    {
      title: "Predictive Analytics",
      description: "Forecast trends and patterns to stay ahead of the market.",
      icon: BarChart3,
    },
    {
      title: "Machine Learning",
      description: "Intelligent systems that learn, adapt, and scale automatically.",
      icon: Brain,
    },
    {
      title: "Big Data Infrastructure",
      description: "Scalable Architecture for massive datasets handling petabytes of information.",
      icon: CheckCircle,
    },
  ];

  return (
    <ServiceSectionLayout
      label="Analytics & AI"
      labelIcon={BarChart3}
      title={
        <>
          Data Science
        </>
      }
      description="Turning raw data into actionable intelligence for your enterprise. We design scalable data architectures, predictive models, and decision-ready analytics systems."
      imageSrc="/image/data-science.png"
      imageAlt="Data Science Dashboard"
      imagePosition="left"
      projectCategory="Data Science"
      features={features}
    />
  );
}
