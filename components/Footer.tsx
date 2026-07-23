"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GitHub":
        return "🐙";
      case "LinkedIn":
        return "💼";
      case "Email":
        return "✉️";
      case "Twitter":
        return "𝕏";
      default:
        return "✉️";
    }
  };

  return (
    <footer className="border-t border-[#111111]/10 bg-[#f7f5f0]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-[#111111]/70 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
        <div>
          <p className="font-semibold text-[#111111]">Aresh</p>
          <p className="mt-1">Building thoughtful digital experiences between data, design, and code.</p>
        </div>
        <div className="flex gap-3">
          {PORTFOLIO_DATA.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#111111]/10 px-3 py-2 uppercase tracking-[0.3em] transition hover:bg-[#111111] hover:text-[#f7f5f0]"
            >
              {link.name}
            </a>
          ))}
        </div>
        <p>© {currentYear} Aresh. All rights reserved.</p>
      </div>
    </footer>
  );
}
