"use client"

import { motion } from "framer-motion"
import { Gauge, BarChart3, Bot } from "lucide-react"
import { SectionHeader } from "./section-header"

const pillars = [
  {
    icon: Gauge,
    title: "Performance First",
    description:
      "Every system I build starts with performance as a constraint, not an afterthought. From optimized SQL queries to efficient data pipelines, speed is engineered in from day one.",
  },
  {
    icon: BarChart3,
    title: "Measurable Impact",
    description:
      "I quantify everything. Whether it's a 30% reduction in load time or a 50% decrease in unnecessary API calls, impact must be visible, trackable, and defensible.",
  },
  {
    icon: Bot,
    title: "Intelligent Automation",
    description:
      "I design systems that make smart decisions autonomously. Agentic workflows that know when to retrieve, when to reason, and when to act without human intervention.",
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="// Philosophy"
          title="How I Build Systems"
          description="Three principles that guide every engineering decision I make."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-lg border border-border bg-card p-8 transition-colors hover:border-accent/30"
            >
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-border bg-background text-accent">
                <pillar.icon size={24} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
