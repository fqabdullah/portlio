import Link from "next/link";
import { User, Briefcase, Wrench, FolderGit2, Award, Mail, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { href: "/about", label: "About", description: "Who I am and how I work.", icon: User },
  { href: "/experience", label: "Experience", description: "Roles, companies, impact.", icon: Briefcase },
  { href: "/skills", label: "Skills", description: "Tools across the stack.", icon: Wrench },
  { href: "/projects", label: "Projects", description: "Things I've shipped.", icon: FolderGit2 },
  { href: "/certifications", label: "Certifications", description: "Verified knowledge.", icon: Award },
  { href: "/contact", label: "Contact", description: "Let's talk.", icon: Mail },
];

export default function QuickNav() {
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-label mb-4">explore</p>
          <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight mb-10">
            Jump straight to what you&apos;re looking for.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <Reveal key={item.href} delay={i * 70}>
              <Link
                href={item.href}
                className="group flex items-center gap-4 rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:border-signal/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 active:scale-[0.98] active:translate-y-0"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-surface2 text-signal">
                  <item.icon size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.label}</h3>
                  <p className="text-xs text-muted mt-0.5">{item.description}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted transition-all duration-300 group-hover:text-signal group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
