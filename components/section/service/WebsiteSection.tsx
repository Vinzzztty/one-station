import { CheckCircle, Globe } from "lucide-react";
import ServiceSectionLayout from "./ServiceSectionLayout";

export default function WebsiteSection() {
  const features = [
    { title: "Responsive & Adaptive Design", description: "Seamless experience on all screen sizes.", icon: CheckCircle },
    { title: "Modern Frameworks", description: "Built with React, Vue, & Next.js.", icon: CheckCircle },
    { title: "SEO & Performance", description: "Optimized for speed and search engines.", icon: CheckCircle },
    { title: "CMS Integration", description: "Easy content management solutions.", icon: CheckCircle },
  ];

  return (
    <ServiceSectionLayout
      label="Web Technologies"
      labelIcon={Globe}
      title={
        <>
          Website <br /> Development
        </>
      }
      description="High-performance web applications. From corporate landing pages to complex web apps, we deliver exceptional digital experiences."
      imageSrc="/image/website.png"
      imageAlt="Website Preview"
      imagePosition="right"
      projectCategory="Website Development"
      features={features}
    />
  );
}
