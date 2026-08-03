import Reveal from "./Reveal";

const certifications = [
  {
    name: "Monitoring and Observability for Development and DevOps",
    issuer: "IBM",
    date: "May 13, 2025",
    verifyUrl: "https://coursera.org/verify/LZHO6FFVSIWM",
  },
  {
    name: "Architecting with Google Kubernetes Engine: Workloads",
    issuer: "Google Cloud",
    date: "Mar 16, 2025",
    verifyUrl: "https://coursera.org/verify/QA2LOW1B00D7",
  },
  {
    name: "DevOps and Jenkins Fundamentals",
    issuer: "LearnKartS",
    date: "Mar 15, 2025",
    verifyUrl: "https://coursera.org/verify/P0A0BUUXDLN4",
  },
  {
    name: "Advanced Docker",
    issuer: "LearnKartS",
    date: "Mar 15, 2025",
    verifyUrl: "https://coursera.org/verify/0I4JFD9T99L2",
  },
  {
    name: "Getting Started with Cloud Shell and gcloud",
    issuer: "Google Cloud",
    date: "Jan 20, 2025",
    verifyUrl: "https://coursera.org/verify/3HFELFH11UP",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-label mb-4">certifications</p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight mb-12">
            Verified knowledge.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 80}>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border bg-surface px-6 py-5 transition-all duration-300 hover:border-signal/40 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0"
              >
                <div>
                  <h3 className="text-sm font-medium">{cert.name}</h3>
                  <p className="font-mono text-xs text-muted mt-1">{cert.issuer}</p>
                </div>
                <span className="font-mono text-xs text-signal flex-shrink-0 ml-4 whitespace-nowrap">
                  {cert.date}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
