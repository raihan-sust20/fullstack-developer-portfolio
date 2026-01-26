export type ExperienceProject = {
  title: string
  stack: string
  bullets: string[]
}

export type ExperienceRole = {
  role: string
  company: string
  meta: string
  projects: ExperienceProject[]
}

export const experience: ExperienceRole[] = [
  {
    role: "Distributed Systems Engineer",
    company: "TechVentures Inc.",
    meta: "Remote • Jan 2022 – Present",
    projects: [
      {
        title: "Consensus Protocol Optimization",
        stack: "Rust, Go, Protocol Buffers, PostgreSQL, Kubernetes",
        bullets: [
          "Architected Byzantine Fault Tolerant consensus with quorum validation",
          "Reduced transaction latency by 65% via batching and memory pooling",
          "Implemented Prometheus metrics and Grafana dashboards",
        ],
      },
      {
        title: "Multi-Chain Indexer Service",
        stack: "Node.js, TypeScript, PostgreSQL, Redis, Docker, AWS",
        bullets: [
          "Processed 1M+ blockchain events per hour across five networks",
          "Reduced database load by 70% using Redis caching",
          "Built retry and dead-letter queue mechanisms for network failures",
        ],
      },
    ],
  },
]
