import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Philosophy } from "@/components/philosophy"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Philosophy />
      </main>
      <Footer />
    </>
  )
}
