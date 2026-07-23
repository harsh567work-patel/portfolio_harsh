"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { PORTFOLIO_DATA, TECH_CATEGORIES } from "@/constants/portfolio";
import { containerVariants, itemVariants } from "@/animations/variants";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen pt-24">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <Badge variant="primary" className="mb-4">
            About Me
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">My Story</span>
          </h1>
          <p className="text-zinc-300 text-lg leading-relaxed">
            I'm a passionate Computer Science student with a deep interest in building innovative solutions that combine technical excellence with beautiful design.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12">Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.timeline.map((event, index) => (
              <motion.div
                key={event.year}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Card hoverable>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-violet-500 flex items-center justify-center font-bold text-black flex-shrink-0">
                      {event.year}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                      <p className="text-zinc-400 text-sm">{event.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8">Areas of Interest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Full Stack Development",
                description: "Building end-to-end web applications with modern technologies and best practices.",
                icon: "🚀",
              },
              {
                title: "Data Science",
                description: "Analyzing data and building machine learning models to solve real-world problems.",
                icon: "📊",
              },
              {
                title: "UI/UX Design",
                description: "Creating beautiful, intuitive interfaces that provide excellent user experiences.",
                icon: "✨",
              },
              {
                title: "Creative Design",
                description: "Exploring the intersection of art and technology through creative projects.",
                icon: "🎨",
              },
            ].map((interest, idx) => (
              <motion.div
                key={interest.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Card hoverable>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{interest.icon}</span>
                    <h3 className="text-xl font-bold">{interest.title}</h3>
                  </div>
                  <p className="text-zinc-400">{interest.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <motion.div
            variants={containerVariants()}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {Object.entries(TECH_CATEGORIES).map(([category, techs]) => (
              <motion.div key={category} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <Card hoverable>
                  <h3 className="font-bold mb-4 text-emerald-400 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8">Future Goals</h2>
          <Card hoverable>
            <ul className="space-y-4">
              {[
                "Secure a role as a Data Analyst or Data Science professional",
                "Build scalable full-stack applications that impact millions",
                "Contribute to open-source projects and the tech community",
                "Master advanced machine learning and AI technologies",
                "Create innovative solutions at the intersection of design and technology",
              ].map((goal, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 text-zinc-300"
                >
                  <span className="text-emerald-400 text-xl mt-1">→</span>
                  <span>{goal}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
