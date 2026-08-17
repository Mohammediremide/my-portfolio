import { motion } from "framer-motion";
import { Compass, Layers, Sparkles } from "lucide-react";

const STATS = [
  { value: "5+", label: "Shipped projects" },
  { value: "5", label: "Languages in MoveMate's UI" },
  { value: "3", label: "Countries of API data sourced" },
];

const APPROACH = [
  {
    icon: Layers,
    title: "Start from the real constraint",
    text: "Whether it's five job APIs with different shapes or five languages in one UI, I design around the messy real-world constraint first, not the happy path.",
  },
  {
    icon: Sparkles,
    title: "Ship it, then polish it",
    text: "I'd rather have a working deploy with rough edges than a perfect idea in a branch. Excel with Dikky went from a script to production this way.",
  },
  {
    icon: Compass,
    title: "Build for someone specific",
    text: "My favorite projects solve a problem for a named group of people — a community, a classmate, a team — not an abstract user.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mono-tag text-sm text-teal"
        >
          // about
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={1}
          className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          I build community-facing tools, then I obsess over how they feel to use.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={2}
            className="space-y-6 text-base leading-relaxed text-ink-muted"
          >
            <p>
              I'm Mohammed, a frontend developer based in Lagos, Nigeria. I like
              taking a problem that's genuinely annoying — booking a truck,
              remembering a community member's birthday, sorting through job
              listings scattered across five different sites — and turning it
              into something that just works.
            </p>
            <p>
              Most of what I build is full-stack in practice, even though
              frontend is where I'm strongest: React on the surface, a
              Node.js or Express API underneath, and whatever third-party
              service gets the job done — mapping, AI generation, messaging.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-surface-2/60 px-3 py-4 text-center"
                >
                  <div className="font-display text-2xl font-semibold text-gradient sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] leading-tight text-ink-faint sm:text-xs">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {APPROACH.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.12 }}
                className="group rounded-2xl border border-border bg-surface-2/50 p-6 transition-colors hover:border-border-strong"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong bg-surface-3 text-teal transition-transform group-hover:scale-110">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
