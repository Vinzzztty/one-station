import ElegantReveal from "@/components/ui/ElegantReveal";
import HeroSlideshow from "./HeroSlideshow";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { getAllProjects } from "@/services/projects.service";

export default async function HeroSection() {
  const projects = await getAllProjects();

  // Fallback projects if DB is empty
  const displayProjects = projects.length > 0 ? projects : [
    {
      id: "1",
      title: "E-Commerce Platform",
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
      title: "Healthcare App",
      category: "Mobile Development",
      description: "Patient management system with telemedicine capabilities and secure data handling.",
      imageUrls: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600"],
      urlProject: "#",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "200+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Years Experience", value: "5+" },
    { label: "Expert Team", value: "20+" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-6 sm:py-8 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] pointer-events-none">
        <div className="w-full h-full bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none">
        <div className="w-full h-full bg-blue-600/5 rounded-full blur-[100px] animate-float-slow" />
      </div>

      {/* Main Content - 2 Columns */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Left Column - Text */}
        <div className="relative z-10">
          <ElegantReveal delay={0} direction="down">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <Zap className="w-3 h-3" /> Leading Digital Innovation
            </span>
          </ElegantReveal>

          <ElegantReveal delay={100} direction="up">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 sm:mb-4 text-foreground">
              Smart Features to Make Your ERP{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Work Smarter
              </span>
            </h1>
          </ElegantReveal>

          <ElegantReveal delay={200} direction="up">
            <p className="text-sm sm:text-base md:text-lg text-muted mb-4 sm:mb-6 max-w-lg">
              Reduce up to 70% of manual tasks with proven automation modules. No AI magic - just robust technology solving real business problems.
            </p>
          </ElegantReveal>

          <ElegantReveal delay={300} direction="up">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#portfolio"
                className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-purple-900/20 hover:shadow-purple-700/40 hover:-translate-y-1 text-xs sm:text-sm"
              >
                Explore Automation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#calculator"
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 hover:-translate-y-1 text-xs sm:text-sm"
              >
                Calculate Savings
              </Link>
            </div>
          </ElegantReveal>
        </div>

        {/* Right Column - Slideshow */}
        <ElegantReveal delay={200} direction="left">
          <div className="relative">
            <HeroSlideshow projects={displayProjects} />
          </div>
        </ElegantReveal>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, i) => (
          <ElegantReveal key={stat.label} delay={400 + i * 100} direction="up">
            <div className="text-center p-3 sm:p-4 bg-slate-900/30 border border-purple-900/10 rounded-xl hover:border-purple-500/20 transition-colors">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-purple-400 mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-muted font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          </ElegantReveal>
        ))}
      </div>
    </section>
  );
}
