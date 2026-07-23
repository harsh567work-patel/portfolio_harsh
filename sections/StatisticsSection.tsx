"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { itemVariants, containerVariants } from "@/animations/variants";
import { useAnimatedCounter } from "@/hooks/useAnimations";

function StatCard({
  label,
  value,
  suffix = "",
  index,
}: {
  label: string;
  value: number;
  suffix?: string;
  index: number;
}) {
  const { ref, count } = useAnimatedCounter(value, 2, 0);

  return (
    <motion.div ref={ref} variants={itemVariants}>
      <Card className="text-center">
        <div className="flex justify-center mb-4">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500/20 to-violet-500/20 flex items-center justify-center"
          >
            <span className="text-2xl">📊</span>
          </motion.div>
        </div>
        <div className="text-4xl font-bold text-gradient mb-2">
          {count}
          {suffix}
        </div>
        <p className="text-zinc-400">{label}</p>
      </Card>
    </motion.div>
  );
}

export function StatisticsSection() {
  return (
    <section id="race" className="relative py-20 px-4 md:py-32 md:px-8">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">By The Numbers</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <StatCard label="Projects Built" value={PORTFOLIO_DATA.stats.projectsBuilt} index={0} />
          <StatCard
            label="Technologies Used"
            value={PORTFOLIO_DATA.stats.technologiesUsed}
            index={1}
          />
          <StatCard
            label="Hackathons Participated"
            value={PORTFOLIO_DATA.stats.hackathonsParticipated}
            index={2}
          />
          <StatCard label="Won" value={PORTFOLIO_DATA.stats.hackathonsWon} index={3} />
        </motion.div>
      </div>
    </section>
  );
}
