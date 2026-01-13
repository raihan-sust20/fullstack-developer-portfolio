import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

export default function Portfolio() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">Raihan Ahmed</h1>

          <div className="space-y-6 mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Backend-focused full-stack engineer with a passion for building reliable, scalable systems. I specialize
              in designing architectures that prioritize long-term maintainability and operational excellence.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Currently open to opportunities in full-time, contract, and freelance roles. Available immediately.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a
              href="mailto:raihan.sust20@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="https://github.com/raihan-sust20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/raihan-sust/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-5xl">
          <h2 className="text-4xl font-bold mb-16">Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                category: "Languages",
                skills: ["Node.js", "TypeScript"],
              },
              {
                category: "Frameworks & Runtimes",
                skills: ["NestJS", "Express.js", "Next.js", "Jest", "gRPC"],
              },
              {
                category: "Databases & Storage",
                skills: ["PostgreSQL", "MongoDB"],
              },
              {
                category: "Frontend Libraries",
                skills: ["React", "Redux"],
              },
              {
                category: "APIs & Communication",
                skills: ["RESTful APIs"],
              },
              {
                category: "Infrastructure & DevOps",
                skills: ["Docker", "Kafka", "Redis", "Git"],
              },
            ].map((skillGroup, idx) => (
              <div key={idx} className="border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-5xl">
          <h2 className="text-4xl font-bold mb-16">Professional Experience</h2>

          <div className="space-y-20">
            {/* Experience 1 */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">Distributed Systems Engineer</h3>
                <p className="text-muted-foreground mt-2">TechVentures Inc. • Remote • Jan 2022 – Present</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Consensus Protocol Optimization</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Implemented high-throughput consensus mechanism for distributed ledger platform, achieving 10,000+
                    transactions per second with sub-second finality.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-accent font-medium">Technical Stack:</p>
                    <p className="text-sm text-muted-foreground">Rust, Go, Protocol Buffers, PostgreSQL, Kubernetes</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                    <li>
                      • Architected Byzantine Fault Tolerant consensus with cryptographic signatures and quorum
                      validation
                    </li>
                    <li>
                      • Optimized state machine to reduce latency by 65% through batch processing and memory pooling
                    </li>
                    <li>• Implemented comprehensive monitoring with Prometheus metrics and grafana dashboards</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Multi-Chain Indexer Service</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Built scalable indexing service for multiple blockchain networks, enabling real-time data queries
                    across chains.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-accent font-medium">Technical Stack:</p>
                    <p className="text-sm text-muted-foreground">Node.js, TypeScript, PostgreSQL, Redis, Docker, AWS</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                    <li>
                      • Designed event-driven architecture processing 1M+ events/hour across 5 blockchain networks
                    </li>
                    <li>• Implemented caching layer reducing database queries by 70% using Redis</li>
                    <li>• Created robust retry logic and dead-letter queues for handling network failures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">Backend Infrastructure Lead</h3>
                <p className="text-muted-foreground mt-2">CloudScale Solutions • Remote • Jun 2020 – Dec 2021</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Microservices Architecture Refactor</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Led migration from monolithic application to microservices architecture for 50+ engineer team.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-accent font-medium">Technical Stack:</p>
                    <p className="text-sm text-muted-foreground">NestJS, PostgreSQL, gRPC, Kubernetes, Istio</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                    <li>• Decomposed monolith into 12 independent services with clear domain boundaries</li>
                    <li>• Established gRPC communication patterns and implemented service discovery</li>
                    <li>• Reduced deployment time from 2 hours to 10 minutes per service</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Observability & Incident Management System</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Built unified monitoring and alerting platform for infrastructure visibility.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-accent font-medium">Technical Stack:</p>
                    <p className="text-sm text-muted-foreground">Express.js, Prometheus, Grafana, ELK Stack, Node.js</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                    <li>• Implemented centralized logging for 50+ services, enabling faster incident response</li>
                    <li>• Created intelligent alerting rules reducing false positives by 80%</li>
                    <li>• Established runbook system reducing MTTR by 40%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">Full Stack Developer</h3>
                <p className="text-muted-foreground mt-2">StartupXYZ • Remote • Feb 2019 – May 2020</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Core Product Development</h4>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Developed SaaS platform serving 500+ customers with real-time collaboration features.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-accent font-medium">Technical Stack:</p>
                    <p className="text-sm text-muted-foreground">Express.js, React, MongoDB, WebSockets, Redis</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                    <li>• Built real-time collaboration engine handling 10,000+ concurrent users</li>
                    <li>• Implemented data validation and sanitization preventing XSS/injection attacks</li>
                    <li>• Achieved 99.9% uptime SLA through careful monitoring and graceful degradation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-5xl">
          <h2 className="text-4xl font-bold mb-16">Education</h2>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Bachelor of Science in Computer Science and Engineering</h3>
            <p className="text-lg text-muted-foreground">Shahjalal University of Science and Technology</p>
            <p className="text-muted-foreground">Sylhet, Bangladesh • Jan 2013 – Oct 2017</p>

            <div className="mt-6 space-y-3 text-muted-foreground text-sm">
              <p>
                <span className="font-semibold">Notable Coursework:</span> Data Structures, Algorithms, Database
                Management Systems, Operating Systems, Computer Networks, Software Engineering, Web Development, Machine
                Learning Fundamentals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-5xl">
          <h2 className="text-4xl font-bold mb-16">Publications</h2>

          <div className="border border-border rounded-lg p-8 hover:bg-muted/50 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Aligning Sentences in English-Bengali Corpora</h3>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">Authors:</span> Raihan Ahmed, Mehedi Al Hasan, Dr. Mohammad Reza Selim
                </p>
                <p className="text-muted-foreground mb-3">
                  Proceedings of International Conference on Computer, Communication, Chemical, Material and Electronic
                  Engineering (IC4ME2)
                </p>
                <p className="text-sm text-muted-foreground">Rajshahi, Bangladesh • 8–9 February, 2018 • Pages 1–5</p>
              </div>
              <a
                href="https://ieeexplore.ieee.org/document/8465608"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-accent hover:text-accent/80 transition-colors flex-shrink-0"
              >
                Read Paper
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Available for Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Status</h3>
              <p className="text-lg text-muted-foreground">Actively looking for opportunities</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Location</h3>
              <p className="text-lg text-muted-foreground">On-site (Dhaka) • Remote</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Roles</h3>
              <p className="text-lg text-muted-foreground">
                Full-Stack Developer (Backend-focused) • Backend Developer
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Engagement</h3>
              <p className="text-lg text-muted-foreground">Full-time • Part-time • Contract • Freelance</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-lg">
            <p className="text-lg text-foreground">Can start immediately. Let's build something remarkable together.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-border text-center text-muted-foreground text-sm">
        <div className="max-w-5xl mx-auto">
          <p>Designed & built by Raihan Ahmed</p>
        </div>
      </footer>
    </main>
  )
}
