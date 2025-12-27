"use client";

import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  loading = false,
  disabled = false,
  href,
  className,
  type = "submit",
  onClick,
}: ButtonProps) {
  const baseClass = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed",
    variant === "primary" && "bg-primary text-white hover:bg-primary-dark",
    variant === "secondary" &&
      "border border-border bg-background text-foreground hover:bg-surface",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={loading || disabled} onClick={onClick} className={baseClass}>
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      )}
      {children}
    </button>
  );
}
