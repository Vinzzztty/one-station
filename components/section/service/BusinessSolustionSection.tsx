import { Database, Users, Zap, Briefcase } from "lucide-react";
import ServiceSectionLayout from "./ServiceSectionLayout";

export default function BusinessSolutionSection() {
  const solutions = [
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline operations and reduce manual workload",
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Centralize customer data and improve relationships",
    },
    {
      icon: Database,
      title: "Custom ERP",
      description: "Tailored enterprise resource planning solutions",
    },
  ];

  return (
    <ServiceSectionLayout
      id="business-solutions"
      label="Enterprise Solutions"
      labelIcon={Briefcase}
      title={
        <>
          Business Solutions & Training
        </>
      }
      description="Streamlining your operations through technology. We implement and customize ERP and CRM systems that become the backbone of your productivity."
      imageSrc="/image/training.png"
      imageAlt="Business Solutions"
      imagePosition="right"
      projectCategory="Business Solutions & Training"
      features={solutions}
    />
  );
}
