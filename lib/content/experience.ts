export type ExperienceProject = {
  title: string
  overview: string
  stack: string
  bullets: string[]
}

export type ExperienceRole = {
  role: string
  company: string
  duration: string
  location: string
  projects: ExperienceProject[]
}

export const experience: ExperienceRole[] = [
  {
    role: "Distributed Systems Engineer",
    company: "TechVentures Inc.",
    duration: "Jan 2023 – Present",
    location: "Remote",
    projects: [
      {
        title: "Consensus Protocol Optimization",
        overview:
          "Enhanced the performance and reliability of a Byzantine Fault Tolerant consensus protocol used in a blockchain network.",
        stack: "Rust, Go, Protocol Buffers, PostgreSQL, Kubernetes",
        bullets: [
          "Architected Byzantine Fault Tolerant consensus with quorum validation",
          "Reduced transaction latency by 65% via batching and memory pooling",
          "Implemented Prometheus metrics and Grafana dashboards",
        ],
      },
      {
        title: "Multi-Chain Indexer Service",
        overview:
          "Developed a scalable indexer service to process and store blockchain events from multiple networks in real-time.",
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
