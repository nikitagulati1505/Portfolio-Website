"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Globe, Database } from "lucide-react"
import { SectionHeader } from "./section-header"

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C++"],
  },
  {
    title: "AI / NLP",
    icon: Brain,
    skills: [
      "LangChain",
      "HuggingFace",
      "ChromaDB",
      "RAG Systems",
      "NLP",
      "Prompt Engineering",
    ],
  },
  {
    title: "Web & Backend",
    icon: Globe,
    skills: ["React", "Node.js", "Express", "Next.js", "REST APIs", "HTML/CSS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Salesforce Data Cloud", "Redis"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="// Skills"
          title="Technical Toolkit"
          description="Languages, frameworks, and tools I use to build intelligent systems."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/30"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-accent">
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
