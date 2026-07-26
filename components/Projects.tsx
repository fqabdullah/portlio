import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Zero-Downtime CI/CD Pipeline",
    description:
      "GitHub Actions pipeline that builds, tests, containerizes, and deploys a microservice to Kubernetes with automatic rollback on failed health checks.",
    stack: ["GitHub Actions", "Docker", "Kubernetes", "Helm"],
    metric: "Deploy time cut from 25 min to 4 min",
    link: "#",
  },
  {
    title: "Multi-Environment AWS Infrastructure",
    description:
      "Terraform modules provisioning VPC, EKS cluster, and RDS across dev, staging, and production with remote state and environment isolation.",
    stack: ["Terraform", "AWS", "EKS", "RDS"],
    metric: "3 environments, 1 codebase",
    link: "#",
  },
  {
    title: "GitOps Deployment with ArgoCD",
    description:
      "Kubernetes cluster syncing deployments automatically from Git using ArgoCD, with Flux as a fallback comparison for sync strategies.",
    stack: ["ArgoCD", "Kubernetes", "GitOps"],
    metric: "Fully auditable deploy history",
    link: "#",
  },
  {
    title: "Observability Stack",
    description:
      "Prometheus and Grafana stack monitoring cluster health and application metrics, with custom alerting rules routed to Slack.",
    stack: ["Prometheus", "Grafana", "Alertmanager"],
    metric: "99.9% uptime visibility",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-label mb-4">projects</p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight mb-12">
            Things I&apos;ve shipped.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <a
                href={project.link}
                className="group rounded-lg border border-border bg-surface p-7 flex flex-col h-full transition-all duration-300 hover:border-signal/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/25"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-medium">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted transition-all duration-300 group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                  />
                </div>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] rounded border border-border px-2 py-1 text-muted transition-colors duration-300 group-hover:border-signal/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-auto font-mono text-xs text-online">
                  → {project.metric}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
