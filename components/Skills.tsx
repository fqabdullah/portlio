"use client";

import Reveal from "./Reveal";
import { useTilt } from "./useTilt";

const categories = [
  {
    title: "Cloud",
    items: ["AWS", "Azure DevOps"],
  },
  {
    title: "Infrastructure as Code",
    items: ["Terraform", "Ansible"],
  },
  {
    title: "CI/CD",
    items: ["GitHub Actions", "Jenkins", "GitLab CI", "ArgoCD"],
  },
  {
    title: "Containers & Orchestration",
    items: ["Docker", "Kubernetes", "Helm"],
  },
  {
    title: "Monitoring & Observability",
    items: ["Prometheus", "Grafana", "ELK Stack"],
  },
  {
    title: "Scripting & Languages",
    items: ["Bash", "Python", "Go"],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub", "Bitbucket"],
  },
  {
    title: "Security",
    items: ["SonarQube", "Trivy", "Checkov", "tfsec"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
];

function SkillCard({ cat }: { cat: (typeof categories)[number] }) {
  const { ref, onMouseMove, onMouseEnter, onMouseLeave } = useTilt<HTMLDivElement>();

  return (
    <div className="[perspective:800px]">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="relative overflow-hidden rounded-lg border border-border bg-surface p-6 h-full transition-[transform,border-color,box-shadow] duration-500 ease-out [transform-style:preserve-3d] [transform:perspective(800px)_translateY(var(--tilt-lift,0px))_rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))] hover:border-signal/40 hover:shadow-xl hover:shadow-black/30 active:scale-[0.98]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[var(--glare-opacity,0)] transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgb(var(--color-signal) / 0.15), transparent 60%)",
          }}
        />
        <h3 className="font-mono text-xs uppercase tracking-wide text-signal mb-4">
          {cat.title}
        </h3>
        <ul className="space-y-2">
          {cat.items.map((item) => (
            <li key={item} className="text-sm text-text">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-label mb-4">skills</p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight mb-12">
            Tools of the trade.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 70}>
              <SkillCard cat={cat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
