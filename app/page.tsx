'use client'

import { Mail, Github, Linkedin, ArrowUpRight, Terminal } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

import { publications } from "@/lib/content/publications"
import { Skills } from "@/components/tech-skills"
import { Experience } from "@/components/experience"

/**
 * Single-page portfolio
 * Content-driven, server-rendered, minimal
 */

export default function Page() {
  return (
    <main className="bg-background text-foreground antialiased">
      <Navigation />
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

/**
 * Navigation Bar
 */
function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Publications', href: '#publications' },
    { name: 'Availability', href: '#availability' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Raihan Ahmed
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-muted-foreground hover:text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

/**
 * ScrollFade: Single place to control all section entry animation
 */
function ScrollFade({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-120px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-28 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight">{title}</h2>

        {/* SINGLE Framer Motion wrapper applied once */}
        <ScrollFade>{children}</ScrollFade>
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
