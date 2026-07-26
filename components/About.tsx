import Reveal from "./Reveal";

const stats = [
  { value: "70%", label: "faster deployments" },
  { value: "99.9%", label: "uptime maintained" },
  { value: "40+", label: "pipelines shipped" },
  { value: "5+", label: "years in cloud infrastructure & automation" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <Reveal>
          <p className="section-label mb-4">about</p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight mb-6">
            Infrastructure is a product too.
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            DevOps Engineer with 5+ years of experience building reliable,
            observable infrastructure — from Terraform provisioning to CI/CD
            pipelines to monitoring that catches issues before users do.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I build systems that are boring in the best way — because
            predictable means trustworthy.
          </p>
          <p className="text-muted leading-relaxed">
            Open to infrastructure, automation, and reliability engineering
            projects.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:border-signal/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
                <div className="font-display text-3xl sm:text-4xl font-medium text-signal">
                  {stat.value}
                </div>
                <div className="mt-2 font-mono text-xs text-muted">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
