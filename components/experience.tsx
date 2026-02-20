"use client"

import { motion } from "framer-motion"
import { Building2, TrendingUp } from "lucide-react"
import { SectionHeader } from "./section-header"

const experiences = [
  {
    role: "Software Engineer",
    company: "Deloitte",
    client: "Novartis",
    period: "2023 - Present",
    description:
      "Optimized enterprise-scale Python and SQL data pipelines with Salesforce Data Cloud integration for advanced analytics workflows.",
    metrics: [
      { value: "25-30%", label: "Faster processing" },
      { value: "Enterprise", label: "Scale analytics" },
    ],
    highlights: [
      "Optimized Python & SQL data pipelines",
      "Salesforce Data Cloud integration",
      "Enterprise-scale analytics workflows",
    ],
  },
  {
    role: "Front-End Intern",
    company: "AscentAI",
    client: null,
    period: "2022",
    description:
      "Built production-ready React components and automated AI/ML workflow interfaces for internal tools.",
    metrics: [
      { value: "10+", label: "React components" },
      { value: "AI/ML", label: "Workflow automation" },
    ],
    highlights: [
      "Built 10+ production React components",
      "Automated AI/ML workflow interfaces",
    ],
  },
  {
    role: "R&D Intern",
    company: "IIIT Delhi",
    client: null,
    period: "2021",
    description:
      "Researched and implemented UI optimizations that significantly improved user engagement and application performance.",
    metrics: [
      { value: "20%", label: "Engagement increase" },
      { value: "30%", label: "Faster load time" },
    ],
    highlights: [
      "20% user engagement increase",
      "30% faster page load times",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="// Experience"
          title="Where I've Made Impact"
          description="Building scalable systems and delivering measurable results at every stage."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-8 md:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/30 md:ml-16 md:p-8"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[calc(4rem+4.5px)] top-8 hidden h-2.5 w-2.5 rounded-full border-2 border-accent bg-background md:block"
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-accent">
                      {exp.company}
                      {exp.client && (
                        <span className="text-muted-foreground">
                          {" "}
                          ({exp.client})
                        </span>
                      )}
                    </p>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    <ul className="mt-4 flex flex-col gap-1.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent/60" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-4 sm:flex-col sm:items-end sm:gap-3">
                    {exp.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex flex-col items-center rounded-md border border-border bg-background px-4 py-3 sm:items-end"
                      >
                        <span className="flex items-center gap-1 text-lg font-bold text-accent">
                          <TrendingUp size={14} />
                          {m.value}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
