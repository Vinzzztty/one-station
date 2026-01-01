"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const services = [
  { name: "Data Science & ML", href: "/service#data-science" },
  { name: "Chatbot & AI Agent", href: "/service#chatbot-ai" },
  { name: "Mobile App Development", href: "/service#mobile-development" },
  { name: "Website Development", href: "/service#website-development" },
  { name: "Business Solutions & Training", href: "/service#business-solutions" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logo.png"
            alt="Logo One Station"
            width={120}
            height={80}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavItem href="/" isActive={pathname === "/"}>Home</NavItem>
          <NavItem href="/erp-solution" isActive={pathname === "/erp-solution"}>ERP Solution</NavItem>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ease-out hover:text-foreground group ${pathname === "/service" ? "text-primary" : "text-muted"}`}>
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-background border border-border rounded-xl shadow-xl py-2 min-w-[220px]">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2.5 text-sm text-muted hover:text-foreground hover:bg-surface transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavItem href="/projects" isActive={pathname.startsWith("/projects")}>Projects</NavItem>
          <NavItem href="/articles" isActive={pathname.startsWith("/articles")}>Articles</NavItem>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavItem({
  href,
  children,
  isActive = false,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        relative 
        text-sm font-medium
        transition-all duration-300 ease-out
        hover:text-foreground hover:-translate-y-0.5
        group
        ${isActive ? "text-primary" : "text-muted"}
      `}
    >
      {children}

      {/* underline */}
      <span
        className={`
          pointer-events-none
          absolute left-0 -bottom-1
          h-0.5
          bg-primary
          transition-all duration-300 ease-out
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </Link>
  );
}
