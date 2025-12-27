import ContactForm from "@/components/section/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hubungi Kami – Konsultasi Proyek Digital",
  description:
    "Hubungi One Station untuk konsultasi jasa pembuatan website, aplikasi, dan solusi AI. Kami siap membantu transformasi digital bisnis Anda.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-20 text-foreground">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-16">
            <h1 className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl max-w-3xl">
              Let's unlock your business potential with our comprehensive
              solutions.
            </h1>
            <Link
              href="mailto:contact@onestation.io"
              className="mt-8 inline-flex items-center gap-2 text-xl hover:text-gray-600 transition-colors"
            >
              contact@onestation.io
              <ArrowUpRight size={24} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </main>
  );
}
