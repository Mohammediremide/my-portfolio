import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CloudSun, Container, BookOpen, ClipboardCheck, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { categories, projects } from "../data/projects";

const VISUAL_ICONS = {
  book: BookOpen,
  cloud: CloudSun,
  cargo: Container,
  review: ClipboardCheck,
};

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              className="mono-tag text-sm text-teal"
            >
              // projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.05 }}
              className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Things I've shipped
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`cursor-hover rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  filter === cat.id
                    ? "border-teal/50 bg-teal/10 text-teal"
                    : "border-border-strong text-ink-muted hover:text-ink"
                }`}
                aria-pressed={filter === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-sm text-ink-faint">
            Nothing in this category yet — check back soon.
          </p>
        )}

        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/Mohammediremide"
            target="_blank"
            rel="noreferrer"
            className="cursor-hover inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal/50 hover:text-teal"
          >
            View All Projects on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const VisualIcon = VISUAL_ICONS[project.visual] ?? Sparkles;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group cursor-hover relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-2/50 transition-colors hover:border-border-strong"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: "0 0 50px -14px rgba(45,217,196,0.45)" }} />

      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-surface-3 to-void">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        ) : (
          <>
            <div className="bg-grid absolute inset-0 opacity-30" />
            <motion.div
              className="flex h-full w-full items-center justify-center text-ink-faint"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-teal/30 bg-surface-2 text-teal glow-teal">
                <VisualIcon size={28} />
              </div>
            </motion.div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="mono-tag translate-y-0 rounded-full border border-border-strong bg-surface-3 px-2.5 py-1 text-[11px] text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-transform hover:translate-x-0.5"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-faint" title="Not deployed yet">
              Not deployed yet
            </span>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            <GithubIcon size={14} /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
