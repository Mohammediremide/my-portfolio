import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsCoarsePointer, usePrefersReducedMotion } from "../hooks/useMediaPreferences";

export default function CustomCursor() {
  const isCoarse = useIsCoarsePointer();
  const reduced = usePrefersReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const enabled = !isCoarse && !reduced;

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const trailingConfig = { damping: 22, stiffness: 140, mass: 0.6 };
  const xTrail = useSpring(mouseX, trailingConfig);
  const yTrail = useSpring(mouseY, trailingConfig);

  useEffect(() => {
    document.documentElement.classList.toggle("has-custom-cursor", enabled);
    if (!enabled) return;

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const isInteractive = (el) =>
      el?.closest?.("a, button, [role='button'], input, textarea, .cursor-hover");

    const over = (e) => setHovering(!!isInteractive(e.target));

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("has-custom-cursor");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]" style={{ opacity: visible ? 1 : 0 }}>
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-teal/70"
        style={{
          x: xTrail,
          y: yTrail,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          borderColor: "rgba(45, 217, 196, 0.55)",
          transition: "width 0.25s ease, height 0.25s ease",
        }}
      />
      <motion.div
        className="fixed left-0 top-0 rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 8 : 6,
          height: hovering ? 8 : 6,
          background: "#2dd9c4",
          boxShadow: "0 0 12px 2px rgba(45,217,196,0.7)",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </div>
  );
}
