"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export function Card({ children, hoverable = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md p-6 transition-all duration-300",
        hoverable && "hover:bg-white/[0.08] hover:border-white/20 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
