"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: ReactNode;
  asChild?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black";

const variants = {
  primary: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-black hover:shadow-lg hover:-translate-y-1",
  secondary: "glass text-zinc-100 hover:bg-white/[0.1]",
  ghost: "text-zinc-100 hover:bg-white/[0.05]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  className,
  disabled,
  asChild,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (asChild) {
    return (
      <span className={buttonClasses}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {isLoading ? "Loading..." : children}
    </button>
  );
}
