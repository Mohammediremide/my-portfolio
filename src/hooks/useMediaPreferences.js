import { useEffect, useState } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

export function useIsCoarsePointer() {
  const [coarse, setCoarse] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const widthMq = window.matchMedia("(max-width: 900px)");
    const update = () => setCoarse(mq.matches || widthMq.matches);
    update();
    mq.addEventListener("change", update);
    widthMq.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      widthMq.removeEventListener("change", update);
    };
  }, []);

  return coarse;
}
