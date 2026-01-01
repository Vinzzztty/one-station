import ElegantReveal from "@/components/ui/ElegantReveal";
import { ArrowRight, Zap } from "lucide-react";
import { getAllProjects } from "@/services/projects.service";
import FeaturedWorkCarousel from "./FeaturedWorkCarousel";

import Link from "next/link";

export default async function HeroSection() {

  const projects = await getAllProjects();

  // Fallback for development if no projects exist
  const displayProjects = projects.length > 0 ? projects : [
    {
      id: "1",
      title: "E-Commerce Platform Redesign",
      category: "Website Development",
      description: "A complete overhaul of a major retail platform focusing on UX and conversion optimization.",
      imageUrls: ["https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600"],
      urlProject: "#",
    },
    {
      id: "2",
      title: "Fintech Dashboard",
      category: "Web Application",
      description: "Real-time financial data visualization dashboard for investment banking clients.",
      imageUrls: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"],
      urlProject: "#",
    },
    {
      id: "3",
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "Patient management system with telemedicine capabilities and secure data handling.",
      imageUrls: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600"],
      urlProject: "#",
    },
    {
      id: "4",
      title: "AI Analytics Platform",
      category: "Data Science",
      description: "Predictive analytics dashboard powered by machine learning algorithms for retail insights.",
      imageUrls: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"],
      urlProject: "#",
    },
    {
      id: "5",
      title: "Logistics Tracking System",
      category: "Web Application",
      description: "Real-time fleet tracking and inventory management system for a global logistics company.",
      imageUrls: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=600"],
      urlProject: "#",
    }
  ];

  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background Decorations */}
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="w-full h-full bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none">
        <div className="w-full h-full bg-blue-600/5 rounded-full blur-[100px] animate-float-slow" />
      </div>
      <div className="absolute top-1/4 left-0 w-64 h-64 pointer-events-none">
        <div className="w-full h-full bg-cyan-600/5 rounded-full blur-[80px] animate-float" />
      </div>

      {/* Main Content - Centered */}
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <ElegantReveal delay={0} direction="down">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-2 backdrop-blur-sm">
            <Zap className="w-3 h-3 text-purple-400" />
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
              Leading Digital Innovation
            </span>
          </div>
        </ElegantReveal>

        {/* Heading */}
        <ElegantReveal delay={200} direction="up">
          <h1 className="text-5xl font-extrabold leading-tight text-foreground sm:text-6xl md:text-7xl">
            Custom {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              ERP Systems
            </span>{" "}
            that Scale with Your Business.
          </h1>
        </ElegantReveal>

        {/* Description */}
        <ElegantReveal delay={400} direction="up">
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            We build enterprise resource planning software for companies.
            From Operations to the Back Office, we create ERP systems that scale with your business.
          </p>
        </ElegantReveal>

        {/* CTA Buttons */}
        <ElegantReveal delay={600} direction="up">
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-purple-900/20 hover:shadow-purple-700/40 hover:-translate-y-1"
            >
              Free ERP Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/erp-solution"
              className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              View ERP Case Studies
            </Link>
          </div>
        </ElegantReveal>
      </div>

      {/* Featured Work Carousel */}
      <div className="mx-auto max-w-7xl px-6 mt-30">
        <ElegantReveal delay={800} direction="up">
          <div className="text-center mb-10">
            <span className="text-purple-400 font-bold uppercase tracking-[0.2em] text-xs mb-2 block">
              Our Portfolio
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Projects & ERP Systems We've Built
            </h2>
          </div>
        </ElegantReveal>
        <ElegantReveal delay={900} direction="up">
          <FeaturedWorkCarousel projects={displayProjects} />
        </ElegantReveal>
      </div>
    </section>
  );
}
