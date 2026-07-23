"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/reduced-motion";

const HeroCanvas = dynamic(
  () => import("@/components/hero/HeroCanvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);

const HeroOverlayType = dynamic(
  () => import("@/components/hero/HeroOverlayType").then((mod) => mod.HeroOverlayType),
  { ssr: false }
);

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden border-b border-[#111111]/10 bg-[#f7f5f0]">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-24 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <div className="max-w-2xl space-y-8">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#111111]/60">
            Portfolio • Data • Design • Code
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl text-5xl leading-[0.9] text-[#111111] sm:text-6xl lg:text-7xl"
          >
            I build products that move from insight to interface.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-xl text-lg leading-8 text-[#111111]/70"
          >
            I work across analytics, interface design, and product engineering to make complex ideas legible and useful.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[#111111] px-5 py-3 text-sm uppercase tracking-[0.3em] text-[#f7f5f0] transition hover:bg-[#111111]/90"
            >
              View selected work
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#111111]/15 px-5 py-3 text-sm uppercase tracking-[0.3em] text-[#111111] transition hover:bg-[#111111] hover:text-[#f7f5f0]"
            >
              Start a conversation
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-[#f7f5f0] p-3 shadow-[0_20px_70px_-30px_rgba(17,17,17,0.4)]"
        >
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-[1.7rem]">
            <HeroCanvas />
            {!reducedMotion && <HeroOverlayType />}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
