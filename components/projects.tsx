"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ExternalLink,
  Github,
  ChevronDown,
  Zap,
  Users,
  Timer,
} from "lucide-react"
import { SectionHeader } from "./section-header"

const projects = [
  {
    title: "Agentic RAG System",
    description:
      "Intelligent retrieval-augmented generation system with agentic decision-making that dynamically determines when to retrieve, reducing unnecessary calls while maintaining accuracy.",
    metrics: [
      { icon: Zap, value: "50%", label: "Fewer retrievals" },
      { icon: Timer, value: "25%", label: "Better accuracy" },
      { icon: Timer, value: "30%", label: "Lower latency" },
    ],
    stack: ["Python", "LangChain", "ChromaDB", "HuggingFace"],
    architecture: [
      "Query Analysis Agent determines retrieval necessity",
      "ChromaDB vector store for semantic document retrieval",
      "HuggingFace embeddings for document encoding",
      "LangChain orchestration for multi-step reasoning",
      "Grounded response generation with source attribution",
    ],
    github: "https://github.com/nikitagulati1505",
  },
  {
    title: "Academic Block Website",
    description:
      "Full-stack academic platform serving 500+ users with optimized database queries and responsive frontend architecture.",
    metrics: [
      { icon: Users, value: "500+", label: "Active users" },
      { icon: Timer, value: "30%", label: "Faster load time" },
      { icon: Zap, value: "40%", label: "Query optimization" },
    ],
    stack: ["React", "Node.js", "MySQL", "Express"],
    architecture: [
      "React SPA with component-based architecture",
      "Node.js REST API with Express middleware",
      "MySQL with indexed and optimized queries",
      "JWT-based authentication system",
      "Responsive design with mobile-first approach",
    ],
    github: "https://github.com/nikitagulati1505",
  },
  {
    title: "Campus Cart Deals",
    description:
      "MERN stack e-commerce platform designed for campus communities with streamlined development workflows and real-time deal management.",
    metrics: [
      { icon: Zap, value: "20%", label: "Faster dev cycle" },
      { icon: Users, value: "MERN", label: "Full stack" },
    ],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    architecture: [
      "MongoDB with Mongoose ODM for flexible schemas",
      "Express REST API with middleware pipeline",
      "React frontend with Redux state management",
      "Real-time deal updates with event-driven architecture",
    ],
    github: "https://github.com/nikitagulati1505",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-lg border border-border bg-card transition-colors hover:border-accent/30"
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 shrink-0 rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={18} />
          </a>
        </div>

        {/* Metrics */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-3 rounded-md border border-border bg-background px-4 py-3"
            >
              <m.icon size={16} className="shrink-0 text-accent" />
              <div>
                <div className="text-lg font-bold text-foreground">
                  {m.value}
                </div>
                <div className="text-xs text-muted-foreground">{m.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable architecture */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 flex items-center gap-2 text-sm text-accent transition-opacity hover:opacity-80"
          aria-expanded={expanded}
        >
          <ExternalLink size={14} />
          View Architecture
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} />
          </motion.span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-md border border-border bg-background p-4">
                <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                  System Architecture
                </h4>
                <ul className="flex flex-col gap-2">
                  {project.architecture.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="// Projects"
          title="Featured Work"
          description="Systems designed for performance, scalability, and intelligent automation."
        />

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
