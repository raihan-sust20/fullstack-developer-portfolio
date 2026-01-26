import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { skills } from "@/lib/content/skills"
import { experience } from "@/lib/content/experience"
import { publications } from "@/lib/content/publications"

/**
 * Single-page portfolio
 * Content-driven, server-rendered, minimal
 */

export default function Page() {
  return (
    <main className="bg-background text-foreground antialiased">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Publications />
      <Availability />
      <Footer />
    </main>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-28 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight">{title}</h2>
        {children}
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 leading-tight">Raihan Ahmed</h1>
        <div className="space-y-6 mb-12">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Backend-focused full-stack engineer building reliable, scalable systems with an emphasis on long-term
            maintainability and operational clarity.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Open to full-time, contract, and freelance opportunities. Available immediately.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-2">
          <PrimaryLink href="mailto:raihan.sust20@gmail.com" icon={<Mail size={18} />}>
            Email
          </PrimaryLink>
          <SecondaryLink href="https://github.com/raihan-sust20" icon={<Github size={18} />}>
            GitHub
          </SecondaryLink>
          <SecondaryLink href="https://linkedin.com/in/raihan-sust/" icon={<Linkedin size={18} />}>
            LinkedIn
          </SecondaryLink>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((group) => (
          <div key={group.category} className="border border-border rounded-xl p-6 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-colors">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-sm font-medium text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="space-y-24">
        {experience.map((role) => (
          <ExperienceItem key={role.role} role={role.role} company={role.company} meta={role.meta}>
            {role.projects.map((project) => (
              <Project
                key={project.title}
                title={project.title}
                stack={project.stack}
                bullets={project.bullets}
              />
            ))}
          </ExperienceItem>
        ))}
      </div>
    </Section>
  )
}

function ExperienceItem({
  role,
  company,
  meta,
  children,
}: {
  role: string
  company: string
  meta: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold">{role}</h3>
        <p className="text-muted-foreground mt-2">
          {company} • {meta}
        </p>
      </div>
      <div className="space-y-12">{children}</div>
    </div>
  )
}

function Project({ title, stack, bullets }: { title: string; stack: string; bullets: string[] }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-3">{title}</h4>
      <p className="text-sm text-muted-foreground mb-2">{stack}</p>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
    </div>
  )
}

function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-3">
        <h3 className="text-2xl font-bold">B.Sc. in Computer Science and Engineering</h3>
        <p className="text-muted-foreground">Shahjalal University of Science and Technology</p>
        <p className="text-muted-foreground">Sylhet, Bangladesh • 2013 – 2017</p>
      </div>
    </Section>
  )
}

function Publications() {
  return (
    <Section id="publications" title="Publications">
      <div className="space-y-6">
        {publications.map((pub) => (
          <div key={pub.title} className="border border-border rounded-xl p-8 bg-card/40 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                <p className="text-muted-foreground mb-2">{pub.authors}</p>
                <p className="text-sm text-muted-foreground">
                  {pub.venue} • {pub.year}
                </p>
              </div>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent"
              >
                Read
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Availability() {
  return (
    <Section id="availability" title="Available for Work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Info label="Status" value="Open to opportunities" />
        <Info label="Location" value="On-site (Dhaka) • Remote" />
        <Info label="Roles" value="Backend Engineer • Full-Stack (Backend-focused)" />
        <Info label="Engagement" value="Full-time • Contract • Freelance" />
      </div>
      <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-lg">
        <p>Available immediately.</p>
      </div>
    </Section>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">{label}</h3>
      <p className="text-muted-foreground">{value}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-20 border-t border-border text-center text-sm text-muted-foreground">
      Designed & built by Raihan Ahmed
    </footer>
  )
}

function PrimaryLink({ href, icon, children }: any) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg"
    >
      {icon}
      {children}
    </a>
  )
}

function SecondaryLink({ href, icon, children }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted"
    >
      {icon}
      {children}
    </a>
  )
}
