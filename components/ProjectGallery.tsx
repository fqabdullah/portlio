"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

const INTERVAL_MS = 3500;

export default function ProjectGallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative mb-5 h-40 sm:h-48 w-full overflow-hidden rounded-md border border-border bg-surface2 [perspective:1000px]">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 [transform-style:preserve-3d] transition-all duration-700 ease-out ${
            i === index
              ? "z-10 opacity-100 [transform:rotateY(0deg)_scale(1)]"
              : "z-0 opacity-0 [transform:rotateY(-6deg)_scale(0.98)]"
          }`}
        >
          {failed[src] ? (
            <div className="flex h-full w-full items-center justify-center text-muted">
              <ImageOff size={20} />
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover object-top"
              onError={() => setFailed((f) => ({ ...f, [src]: true }))}
            />
          )}
        </div>
      ))}

      <span className="absolute left-2.5 top-2.5 z-20 inline-flex items-center gap-1.5 rounded-full border border-online/30 bg-bg/80 px-2.5 py-1 font-mono text-[10px] text-online backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-online animate-blink-slow" />
        live
      </span>

      {images.length > 1 && (
        <div className="absolute bottom-2.5 right-2.5 z-20 flex gap-1.5" aria-hidden="true">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-4 bg-signal" : "w-1.5 bg-bg/60 border border-border"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
