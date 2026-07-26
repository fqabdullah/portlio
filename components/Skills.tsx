import Reveal from "./Reveal";

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
    items: ["SonarQube", "Trivy", "Checkov", "tfsec", "Cosign"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
];

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
              <div className="[perspective:800px]">
                <div
                  className="rounded-lg border border-border bg-surface p-6 h-full transition-all duration-500 ease-out
                             [transform-style:preserve-3d] [transform:rotateX(0deg)_rotateY(0deg)]
                             hover:border-signal/40 hover:shadow-xl hover:shadow-black/30
                             hover:[transform:rotateX(6deg)_rotateY(-6deg)_translateZ(6px)]"
                >
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
