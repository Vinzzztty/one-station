"use client";

import { useState } from "react";
import { LayoutGrid, ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectModal from "./ProjectModal";

interface ShowProjectsButtonProps {
  href?: string;
  className?: string;
  category?: string;
}

export default function ShowProjectsButton({ 
  href = "/projects", 
  className = "",
  category
}: ShowProjectsButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const content = (
    <>
      <LayoutGrid className="h-5 w-5" />
      <span className="font-semibold">Show Projects</span>
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </>
  );

  const baseClassName = `mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-primary/20 bg-white py-3 px-6 text-primary transition-all hover:bg-primary/5 hover:shadow-sm group ${className}`;

  if (category) {
    return (
      <>
        <button
          onClick={handleClick}
          className={baseClassName}
        >
          {content}
        </button>
        <ProjectModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          category={category}
        />
      </>
    );
  }

  return (
    <Link
      href={href}
      className={baseClassName}
    >
      {content}
    </Link>
  );
}
