import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { timeline } from "../data/experience";

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="experience" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="mono-tag text-sm text-teal"
        >
          // journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          How I got here
        </motion.h2>

        <div ref={containerRef} className="relative mt-16 pl-10 sm:pl-14">
          {/* Track */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border-strong sm:left-[11px]" />
          {/* Animated progress line */}
          <motion.div
            className="absolute left-[7px] top-2 w-px origin-top bg-gradient-to-b from-teal to-amber sm:left-[11px]"
            style={{ scaleY: lineHeight, height: "calc(100% - 16px)" }}
          />

          <ol className="space-y-12">
            {timeline.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: (i % 3) * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-10 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-teal bg-void sm:-left-14">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="mono-tag text-xs text-amber">{item.year}</span>
                  <span className="mono-tag rounded-full border border-border-strong px-2.5 py-0.5 text-[11px] text-ink-faint">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
