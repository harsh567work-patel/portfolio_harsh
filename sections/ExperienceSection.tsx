"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { itemVariants, containerVariants } from "@/animations/variants";

function ExperienceCard({
  role,
  company,
  period,
  description,
  achievements,
  index,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  index: number;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative mb-8 md:mb-12"
    >
      {/* Timeline line and dot */}
      <div className="absolute -left-4 md:-left-8 top-0 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-black"
        />
        {index !== PORTFOLIO_DATA.experience.length - 1 && (
          <div className="w-1 h-24 md:h-32 bg-gradient-to-b from-emerald-500/50 to-transparent" />
        )}
      </div>

      {/* Content */}
      <Card hoverable className="ml-8 md:ml-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-zinc-100">{role}</h3>
            <p className="text-emerald-400 font-medium">{company}</p>
          </div>
          <Badge variant="secondary" size="sm" className="mt-2 md:mt-0">
            {period}
          </Badge>
        </div>

        <p className="text-zinc-400 mb-4">{description}</p>

        <ul className="space-y-2">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm">
              <span className="text-emerald-400 mt-1">✓</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section id="team" className="relative py-20 px-4 md:py-32 md:px-8">
      <div className="container-custom max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Badge variant="primary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">My Journey</span>
          </h2>
          <p className="text-zinc-400">
            Professional experience, internships, and achievements in my career
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <ExperienceCard
              key={exp.id}
              {...exp}
              index={idx}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
