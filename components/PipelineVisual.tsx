"use client";

import { useEffect, useState } from "react";

const stages = [
  { label: "BUILD", detail: "compiling & packaging" },
  { label: "TEST", detail: "unit + integration" },
  { label: "DEPLOY", detail: "rolling update" },
  { label: "LIVE", detail: "monitoring active" },
];

export default function PipelineVisual() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % (stages.length + 1));
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center justify-between font-mono text-xs text-muted mb-3">
        <span>pipeline.yml</span>
        <span className="flex items-center gap-1.5">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              activeStage >= stages.length ? "bg-online" : "bg-signal"
            } animate-blink-slow`}
          />
          {activeStage >= stages.length ? "deployed" : "running"}
        </span>
      </div>

      <div className="rounded-lg border border-border bg-surface p-5 sm:p-6">
        <div className="flex items-center justify-between">
          {stages.map((stage, i) => {
            const isDone = i < activeStage;
            const isActive = i === activeStage;
            return (
              <div key={stage.label} className="flex-1 flex items-center">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div
                    className={`h-8 w-8 sm:h-9 sm:w-9 rounded-full border-2 flex items-center justify-center transition-colors duration-500 ${
                      isDone
                        ? "border-online bg-online/10"
                        : isActive
                        ? "border-signal bg-signal/10"
                        : "border-border bg-surface2"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isDone ? "bg-online" : isActive ? "bg-signal animate-blink-slow" : "bg-muted/40"
                      }`}
                    />
                  </div>
                  <span
                    className={`font-mono text-[10px] sm:text-xs tracking-wide ${
                      isDone || isActive ? "text-text" : "text-muted"
                    }`}
                  >
                    {stage.label}
                  </span>
                </div>
                {i < stages.length - 1 && (
                  <div className="flex-1 h-px mx-1 sm:mx-2 bg-border relative overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 bg-online transition-all duration-700 ease-out`}
                      style={{ width: i < activeStage ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-5 font-mono text-xs text-muted">
          {activeStage < stages.length
            ? `> ${stages[activeStage].detail}...`
            : "> exit code 0 — all systems nominal"}
        </p>
      </div>
    </div>
  );
}
