import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="mono-tag text-sm text-teal"
        >
          // skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.05 }}
          className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Tools I reach for
        </motion.h2>

        <div className="mt-14 space-y-14">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-5 flex items-baseline justify-between border-b border-border pb-3">
                <h3 className="font-display text-lg font-medium text-ink">{group.label}</h3>
                <span className="mono-tag text-xs text-ink-faint">{group.note}</span>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
              >
                {group.skills.map(({ name, icon: Icon }) => (
                  <motion.div
                    key={name}
                    variants={item}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="group cursor-hover relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface-2/60 px-4 py-7 text-center transition-colors hover:border-teal/40"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_36px_-10px_rgba(45,217,196,0.5)]" />
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-surface-3 text-ink-muted transition-all duration-300 group-hover:-rotate-6 group-hover:text-teal">
                      <Icon size={20} />
                    </div>
                    <span className="relative text-sm font-medium text-ink-muted transition-colors group-hover:text-ink">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
