"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { itemVariants, containerVariants } from "@/animations/variants";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-4 md:py-32 md:px-8">
      <div className="container-custom max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge variant="primary" className="mb-4">
            Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-zinc-400">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Email */}
          <motion.div variants={itemVariants}>
            <Card hoverable>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-2xl">
                  ✉️
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-zinc-400 hover:text-emerald-400 transition-colors break-all"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
            </Card>
          </motion.div>

          {/* LinkedIn */}
          <motion.div variants={itemVariants}>
            <Card hoverable>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-2xl">
                  💼
                </div>
                <h3 className="font-bold mb-2">LinkedIn</h3>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-blue-400 transition-colors"
                >
                  View Profile
                </a>
              </div>
            </Card>
          </motion.div>

          {/* GitHub */}
          <motion.div variants={itemVariants}>
            <Card hoverable>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-zinc-700/50 flex items-center justify-center mb-4 text-2xl">
                  🐙
                </div>
                <h3 className="font-bold mb-2">GitHub</h3>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  View Repos
                </a>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="primary" size="lg" asChild>
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`}>
              Send me an Email
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
