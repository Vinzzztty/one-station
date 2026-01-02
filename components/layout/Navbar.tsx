"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background md:bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
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

          {/* Desktop Navigation */}
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

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-surface transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Outside header for proper z-index */}
      <div
        className={`fixed inset-0 bg-black/60 z-[100] md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel - Outside header for proper z-index */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#020617] border-l border-slate-800 z-[101] md:hidden transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-800">
          <span className="font-semibold text-white">Menu</span>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <nav className="p-4 space-y-1">
          <MobileNavItem href="/" isActive={pathname === "/"}>Home</MobileNavItem>
          <MobileNavItem href="/erp-solution" isActive={pathname === "/erp-solution"}>ERP Solution</MobileNavItem>

          {/* Mobile Services Accordion */}
          <div>
            <button
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left font-medium transition-colors ${pathname === "/service" ? "text-purple-400 bg-purple-500/10" : "text-white hover:bg-slate-800"}`}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 py-2 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <MobileNavItem href="/projects" isActive={pathname.startsWith("/projects")}>Projects</MobileNavItem>
          <MobileNavItem href="/articles" isActive={pathname.startsWith("/articles")}>Articles</MobileNavItem>
        </nav>

        {/* Mobile CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800 bg-[#020617]">
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full justify-center">Contact Us</Button>
          </Link>
        </div>
      </div>
    </>
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

function MobileNavItem({
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
      className={`block px-4 py-3 rounded-xl font-medium transition-colors ${isActive ? "text-primary bg-primary/10" : "text-foreground hover:bg-surface"}`}
    >
      {children}
    </Link>
  );
}
