import { Brain, Smartphone } from "lucide-react";
import ServiceSectionLayout from "./ServiceSectionLayout";

export default function MobileSection() {
  const features = [
    {
      title: "iOS Native",
      description: "Swift & SwiftUI based development for maximum performance.",
      icon: Smartphone,
    },
    {
      title: "Android & Cross-Platform",
      description: "Kotlin, and React Native solutions for broad reach.",
      icon: Smartphone,
    },
    {
      title: "UX / UI Design",
      description: "User-centric design principles at the core of every tap",
      icon: Brain,
    },
  ];

  return (
    <ServiceSectionLayout
      id="mobile-development"
      label="Mobile Engineering"
      labelIcon={Smartphone}
      title={
        <>
          Mobile App <br /> Development
        </>
      }
      description="We design and develop high-performance mobile applications that deliver seamless experiences across iOS and Android platforms."
      imageSrc="/image/mobile.png"
      imageAlt="Mobile App Preview"
      imagePosition="left"
      projectCategory="Mobile Development"
      features={features}
    />
  );
}
