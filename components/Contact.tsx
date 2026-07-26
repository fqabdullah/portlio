import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";

const links = [
  { icon: Mail, label: "farooq.abdullah1719@gmail.com", href: "mailto:farooq.abdullah1719@gmail.com", external: false },
  { icon: Github, label: "github.com/fqabdullah", href: "https://github.com/fqabdullah", external: true },
  { icon: Linkedin, label: "linkedin.com/in/abdullahfq", href: "https://www.linkedin.com/in/abdullahfq/", external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="section-label mb-4">contact</p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight mb-4">
            Let&apos;s build something reliable.
          </h2>
          <p className="text-muted mb-10 max-w-md mx-auto">
            Open to DevOps, SRE, and Platform Engineering roles. Reach out directly
            or find me on any of the platforms below.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm transition-all duration-300 hover:border-signal/40 hover:text-signal hover:-translate-y-0.5"
              >
                <link.icon size={16} />
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
