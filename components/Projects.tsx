"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import ProjectGallery from "./ProjectGallery";
import { useTilt } from "./useTilt";

type Project = {
  title: string;
  description: string;
  stack: string[];
  metric: string;
  link: string;
  images?: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Kabayani.ph — Philippine Crowdfunding Platform",
    description:
      "Production AWS infrastructure for a crowdfunding platform, built entirely with Terraform and deployed via a fully automated CI/CD pipeline.",
    stack: ["Terraform", "AWS ECS", "CloudFront", "GitHub Actions", "Trivy", "Checkov"],
    metric: "Push → build → scan → deploy, zero downtime",
    link: "https://kabayani.ph",
    images: ["/projects/kabayani-home.png", "/projects/kabayani-ecs.png"],
    featured: true,
  },
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

function ProjectCard({ project }: { project: Project }) {
  const { ref, onMouseMove, onMouseEnter, onMouseLeave } = useTilt<HTMLAnchorElement>();
  const isExternal = project.link.startsWith("http");

  return (
    <a
      ref={ref}
      href={project.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative overflow-hidden rounded-lg border bg-surface p-7 flex flex-col h-full [transform-style:preserve-3d] [transform:perspective(1000px)_translateY(var(--tilt-lift,0px))_rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))] transition-[transform,border-color,box-shadow] duration-500 ease-out hover:border-signal/40 hover:shadow-xl hover:shadow-black/25 active:scale-[0.98] ${
        project.featured ? "border-signal/25" : "border-border"
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[var(--glare-opacity,0)] transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgb(var(--color-signal) / 0.15), transparent 60%)",
        }}
      />

      {project.images && <ProjectGallery images={project.images} alt={project.title} />}

      {project.featured && (
        <p className="section-label mb-2 !text-[10px]">★ featured project</p>
      )}

      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-xl font-medium">{project.title}</h3>
        <ArrowUpRight
          size={20}
          className="text-muted transition-all duration-300 group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
        />
      </div>
      <p className="text-muted text-sm leading-relaxed mb-5">{project.description}</p>
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
      <p className="mt-auto font-mono text-xs text-online">→ {project.metric}</p>
    </a>
  );
}

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
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
