import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 text-white">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Main Heading */}
        <Reveal delay={100}>
          <h2 className="text-center text-4xl font-bold leading-tight lg:text-6xl text-white">
            Ready to Build an {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              ERP That Actually Fits?
            </span>
          </h2>
        </Reveal>

        {/* Subheading */}
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-gray-400">
            Schedule a free 30-minute strategy call to discuss your operations and explore if custom ERP is right for you.
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-purple-900/30"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="https://docs.google.com/document/d/18Sgb6f9v5fgUbDKlW5BHMPj2rRin7ltP4Cf7poGX-rc/edit?tab=t.8nxf5jpc8n95"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Download ERP Buyer's Guide
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
