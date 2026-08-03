"use client";

import { useCallback, useRef, type MouseEvent } from "react";

const MAX_TILT_DEG = 7;

/**
 * Cursor-tracked 3D tilt + glare, driven entirely through CSS custom
 * properties so the consumer controls the actual transform/gradient
 * via className (keeps this hook markup-agnostic).
 */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback((e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    el.style.setProperty("--tilt-x", `${((0.5 - y) * MAX_TILT_DEG * 2).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${((x - 0.5) * MAX_TILT_DEG * 2).toFixed(2)}deg`);
    el.style.setProperty("--glare-x", `${x * 100}%`);
    el.style.setProperty("--glare-y", `${y * 100}%`);
    el.style.setProperty("--glare-opacity", "1");
    el.style.transitionDuration = "80ms";
  }, []);

  const onMouseEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDuration = "150ms";
    el.style.setProperty("--tilt-lift", "-6px");
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDuration = "500ms";
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--tilt-lift", "0px");
    el.style.setProperty("--glare-opacity", "0");
  }, []);

  return { ref, onMouseMove, onMouseEnter, onMouseLeave };
}
