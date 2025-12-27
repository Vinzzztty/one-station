import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Navbar() {
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
          <NavItem href="/">Home</NavItem>
          <NavItem href="/service">Services</NavItem>
          <NavItem href="/articles">Blog</NavItem>
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
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        relative 
        text-sm font-medium text-muted
        transition-all duration-300 ease-out
        hover:text-foreground hover:-translate-y-0.5
        group
      "
    >
      {children}

      {/* underline */}
      <span
        className="
          pointer-events-none
          absolute left-0 -bottom-1
          h-0.5 w-0
          bg-primary
          transition-all duration-300 ease-out
          group-hover:w-full
        "
      />
    </Link>
  );
}
