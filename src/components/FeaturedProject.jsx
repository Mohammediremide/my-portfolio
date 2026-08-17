import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Truck } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { featuredProject as p } from "../data/projects";

export default function FeaturedProject() {
  return (
    <section className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="mono-tag text-sm text-amber"
        >
          // featured build
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-12 rounded-3xl border border-border-strong bg-surface-2/40 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-1 flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-3 via-surface-2 to-void lg:order-none"
          >
            <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-teal/30 bg-surface-2 text-teal glow-teal">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name} logo`}
                    className="h-14 w-14 object-contain"
                  />
                ) : (
                  <Truck size={36} />
                )}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-ink-faint">
                <MapPin size={13} />
                <span className="mono-tag">Lagos → anywhere</span>
              </div>
            </div>
            <span className="absolute right-4 top-4 mono-tag rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-[11px] text-amber">
              {p.status}
            </span>
          </motion.div>

          {/* Info */}
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {p.name}
            </h2>
            <p className="mt-2 text-lg text-teal">{p.tagline}</p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="mono-tag text-xs uppercase tracking-wide text-ink-faint">Problem</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.problem}</p>
              </div>
              <div>
                <h3 className="mono-tag text-xs uppercase tracking-wide text-ink-faint">Solution</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.solution}</p>
              </div>
              <div>
                <h3 className="mono-tag text-xs uppercase tracking-wide text-ink-faint">Key features</h3>
                <ul className="mt-3 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="mono-tag rounded-full border border-border-strong bg-surface-3 px-3 py-1 text-xs text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="cursor-hover inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-[#05100e] transition-transform hover:-translate-y-0.5"
              >
                Live Demo <ArrowUpRight size={15} />
              </a>
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="cursor-hover inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-teal/50 hover:text-teal"
              >
                <GithubIcon size={15} /> GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
