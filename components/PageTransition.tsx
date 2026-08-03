"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="animate-fade-up" style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
