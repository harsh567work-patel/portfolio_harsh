"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NAVIGATION } from "@/constants/portfolio";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#111111]/10 bg-[#f7f5f0]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="text-2xl font-semibold text-[#111111]">
          Aresh
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm uppercase tracking-[0.3em] text-[#111111]/70 transition hover:text-[#111111]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-[#111111]/5 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-[#111111]" />
          ) : (
            <Menu className="h-6 w-6 text-[#111111]" />
          )}
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-full border-b border-[#111111]/10 bg-[#f7f5f0]/95 md:hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-sm uppercase tracking-[0.3em] text-[#111111]/70"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
