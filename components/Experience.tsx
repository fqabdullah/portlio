"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const experience = [
  {
    company: "Logic Silicon",
    role: "DevOps Engineer",
    location: "Islamabad, Pakistan",
    period: "June 2026 – Present",
    current: true,
    highlights: [
      "Improved production workload reliability by 90% across 4+ enterprise applications by managing Linux-based environments and containerized deployments using Docker and Kubernetes (Amazon EKS and on-prem RKE2).",
      "Reduced deployment cycle time by 96% by architecting and automating CI/CD pipelines using Jenkins, CloudBees Jenkins, and GitHub Actions.",
      "Cut manual cluster management effort by 75% by implementing GitOps-based deployments with ArgoCD and administering multi-cluster Kubernetes environments via Rancher.",
      "Reduced monitoring data loss incidents by 99% by configuring Amazon EBS CSI Driver to enable persistent storage for Prometheus and Grafana across pod restarts.",
      "Decreased critical security findings by 99% by integrating Checkov and SonarQube into Infrastructure-as-Code and application pipelines for automated vulnerability scanning.",
      "Achieved 70% faster disaster recovery with zero data loss across 4+ workloads by designing and implementing a Kubernetes backup and DR strategy using Velero.",
      "Strengthened cloud security posture across 4+ enterprise migration projects by managing AWS services including VPC, EC2, EKS, AWS CLI, AWS MGN, KMS, DMS, Lambda, S3, FSx, RDS, DynamoDB, SSM, and GuardDuty.",
      "Reduced enterprise migration time by 90% by automating deployment workflows using Ansible across HPC, Engineering Tools, Web Applications, and CaaS environments.",
      "Reduced system downtime by 90% by managing container image lifecycle through Harbor and configuring F5 hardware load balancers for high availability.",
      "Delivered secure, scalable, cloud-native solutions supporting 4+ production applications by collaborating cross-functionally with engineering, security, and infrastructure teams.",
    ],
  },
  {
    company: "Rapids AI",
    role: "Jr. DevOps",
    location: "Islamabad, Pakistan",
    period: "May 2025 – June 2026",
    current: false,
    highlights: [
      "Deployed Hyperledger Fabric (Go chaincode, CouchDB, NestJS gateway) on K8s for permissioned prod transactions.",
      "Containerized NestJS microservices with Docker/Compose for 100% cross-environment consistency.",
      "Automated GitHub Actions CI/CD to build and push images to Docker Hub, cutting manual release effort 100%.",
      "Implemented GitOps via Helm for dynamic image tags, achieving zero manual deployments.",
      "Integrated Argo CD Image Updater and Istio for gRPC services with fully automated cluster sync.",
      "Optimized K8s rolling updates via Helm/YAML for zero-downtime releases.",
      "Provisioned HA infrastructure on OpenStack (Magnum) and VMware, sustaining 99.9% uptime.",
    ],
  },
  {
    company: "CyberSoft Vantage",
    role: "DevOps Intern",
    location: "Islamabad, Pakistan",
    period: "June 2024 – September 2024",
    current: false,
    highlights: [
      "Automated infra deployment with Terraform, Ansible, and Python scripts, cutting provisioning time 40%.",
      "Optimized Jenkins/Docker CI/CD pipelines for 30% faster releases with minimized downtime.",
      "Configured AWS and Kubernetes clusters, improving system performance 25%.",
      "Cut incident response time 50% through cross-functional infrastructure troubleshooting.",
    ],
  },
];

const COLLAPSED_COUNT = 3;

function ExperienceCard({ job }: { job: (typeof experience)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = job.highlights.length > COLLAPSED_COUNT;
  const visibleHighlights = expanded ? job.highlights : job.highlights.slice(0, COLLAPSED_COUNT);

  return (
    <div className="relative sm:pl-10">
      <span
        className={`hidden sm:block absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-bg ${
          job.current ? "bg-online" : "bg-signal"
        }`}
      />

      <div className="rounded-lg border border-border bg-surface p-6 sm:p-7 transition-all duration-300 hover:border-signal/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 active:scale-[0.995]">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
          <h3 className="font-display text-xl font-medium">
            {job.role} <span className="text-muted">· {job.company}</span>
          </h3>
          <span className="font-mono text-xs text-signal whitespace-nowrap">
            {job.period}
          </span>
        </div>
        <p className="font-mono text-xs text-muted mb-5">{job.location}</p>

        <ul className="space-y-2.5">
          {visibleHighlights.map((point, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-muted leading-relaxed">
              <span className="text-signal mt-1.5 flex-shrink-0">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="group mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-signal transition-colors hover:text-text"
          >
            {expanded ? "Show less" : `Show ${job.highlights.length - COLLAPSED_COUNT} more`}
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="section-label mb-4">experience</p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight mb-12">
            Where I&apos;ve worked.
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 100}>
                <ExperienceCard job={job} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
