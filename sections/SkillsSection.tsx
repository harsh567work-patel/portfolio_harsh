"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { PORTFOLIO_DATA, TECH_CATEGORIES } from "@/constants/portfolio";
import { containerVariants, itemVariants } from "@/animations/variants";
import { useScrollReveal } from "@/hooks/useAnimations";

function SkillProgressBar({ name, level }: { name: string; level: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-zinc-200">{name}</span>
        <span className="text-sm text-emerald-400">{level}%</span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-emerald-500 to-violet-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}

function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; level: number; icon: string }[];
}) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full">
        <h3 className="text-xl font-bold mb-6 text-gradient">{title}</h3>
        <div className="space-y-4">
          {skills.map((skill) => (
            <SkillProgressBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export function SkillsSection() {
  const { ref } = useScrollReveal();

  return (
    <section id="pit" ref={ref} className="relative py-20 px-4 md:py-32 md:px-8 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge variant="primary" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Skills</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Proficiency across full-stack development, data science, and modern design tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <SkillCategory title="Full Stack" skills={PORTFOLIO_DATA.skills.fullStack} />
          <SkillCategory title="Data Science" skills={PORTFOLIO_DATA.skills.datascience} />
          <SkillCategory title="Design" skills={PORTFOLIO_DATA.skills.design} />
          <SkillCategory title="Tools" skills={PORTFOLIO_DATA.skills.tools} />
        </motion.div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Technology Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(TECH_CATEGORIES).map(([category, techs]) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.02 }}
                className="glass p-4 rounded-lg"
              >
                <h4 className="font-semibold mb-3 capitalize text-emerald-400">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge key={tech} variant="secondary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
