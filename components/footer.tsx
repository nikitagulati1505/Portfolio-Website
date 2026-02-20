"use client"

import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/nikitagulati1505",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nikitagulati",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:nikita@example.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <span className="text-lg font-semibold text-foreground">
            NG<span className="text-accent">.</span>
          </span>
          <p className="mt-1 text-sm text-muted-foreground">
            Software Engineer &middot; Applied AI
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nikita Gulati
        </p>
      </div>
    </footer>
  )
}
