import Image from "next/image";
import PipelineVisual from "./PipelineVisual";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-signal/20 blur-[120px] animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-online/10 blur-[100px] animate-glow-pulse"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-center">

        {/* Photo — swap /public/profile.jpg with your own headshot (square, min 400x400px) */}
        <div className="flex justify-center lg:justify-start animate-fade-up">
          <div className="relative h-40 w-40 sm:h-48 sm:w-48 flex-shrink-0">
            <div className="absolute -inset-1.5 rounded-full border border-signal/30" />
            <div className="absolute -inset-3 rounded-full border border-border" />
            <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-surface bg-surface2">
              <Image
                src="/profile.png"
                alt="Portrait photo"
                fill
                sizes="192px"
                className="object-cover grayscale-[15%] transition-all duration-500 hover:grayscale-0"
                priority
              />
            </div>
            <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-online border-2 border-bg animate-blink-slow" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up" style={{ animationDelay: "120ms", opacity: 0 }}>
            <p className="section-label mb-4">devops engineer / infrastructure &amp; automation</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
              I build systems
              <br />
              that ship <span className="text-signal">without</span>
              <br />
              drama.
            </h1>
            <p className="mt-6 text-muted text-base sm:text-lg max-w-md leading-relaxed">
              Abdullah Farooq — I design CI/CD pipelines, provision cloud infrastructure
              as code, and keep production systems observable and reliable at scale.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="projects"
                className="group relative inline-flex items-center overflow-hidden rounded-md bg-signal px-6 py-3 font-mono text-sm text-bg font-medium transition-all duration-300 hover:bg-signal/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-signal/20 active:scale-95 active:translate-y-0"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 transition-transform duration-700 ease-out group-hover:translate-x-[420%]"
                />
                <span className="relative">View projects</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-border px-6 py-3 font-mono text-sm text-text transition-all duration-300 hover:border-muted hover:-translate-y-0.5 active:scale-95 active:translate-y-0"
              >
                Download resume
              </a>
            </div>

            <div className="mt-10 flex items-center gap-2 text-muted font-mono text-xs">
              <ArrowDown size={14} className="animate-blink-slow" />
              scroll to explore
            </div>
          </div>

          <div
            className="flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "240ms", opacity: 0 }}
          >
            <PipelineVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
