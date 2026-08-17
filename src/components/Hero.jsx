import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";
import { usePrefersReducedMotion } from "../hooks/useMediaPreferences";

const CODE_LINES = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: "name: 'Mohammed'," },
  { indent: 1, text: "role: 'Frontend Developer'," },
  { indent: 1, text: "base: 'Lagos, Nigeria'," },
  { indent: 1, text: "stack: ['React', 'JavaScript', 'Node.js']," },
  { indent: 1, text: "builds: 'things people actually use'," },
  { indent: 0, text: "};" },
];

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef(null);
  const [glow, setGlow] = useState({ x: 50, y: 30 });

  useEffect(() => {
    if (reduced) return;
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setGlow({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [reduced]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-void pt-24"
    >
      {/* Ambient grid */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />

      {/* Mouse-following glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(45,217,196,0.10), transparent 55%)`,
        }}
      />

      {/* Floating gradient blobs */}
      {!reduced && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-teal/20 blur-[110px]"
            animate={{ y: [0, 24, 0], x: [0, 14, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber/10 blur-[120px]"
            animate={{ y: [0, -20, 0], x: [0, -12, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mono-tag mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface-2/80 px-3 py-1.5 text-xs text-ink-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            Open to frontend roles &amp; freelance work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Hi, I'm Mohammed.
            <br />
            <span className="text-gradient">Frontend Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            I build modern, responsive and interactive web experiences —
            from booking platforms to AI-assisted tools, shipped end to end
            and used by real people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-hover group inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-[#05100e] transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_-6px_rgba(45,217,196,0.6)]"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-hover inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal/50 hover:text-teal"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-5"
          >
            {[
              { icon: GithubIcon, href: "https://github.com/Mohammediremide", label: "GitHub" },
              { icon: LinkedinIcon, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: XIcon, href: "https://x.com/mohammedcodes1", label: "X / Twitter" },
              { icon: Mail, href: "mailto:odewunmimohammed@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="cursor-hover text-ink-faint transition-colors hover:text-teal"
              >
                <Icon size={19} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Signature element: a live "compiling" terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="glow-teal glass relative mx-auto w-full max-w-md rounded-2xl"
        >
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="mono-tag ml-3 text-xs text-ink-faint">developer.js</span>
          </div>
          <div className="mono-tag px-5 py-6 text-[13px] leading-6 sm:text-sm">
            {CODE_LINES.map((line, i) => (
              <TypedLine key={i} indent={line.indent} text={line.text} delay={0.5 + i * 0.28} last={i === CODE_LINES.length - 1} />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="mono-tag text-[11px] text-ink-faint">scroll</span>
        <motion.div
          className="h-9 w-5 rounded-full border border-border-strong p-1"
          aria-hidden="true"
        >
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-teal"
            animate={reduced ? {} : { y: [0, 14, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function TypedLine({ indent, text, delay, last }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.2 }}
      style={{ paddingLeft: indent * 20 }}
      className="whitespace-pre text-ink-muted"
    >
      <CodeHighlight text={text} />
      {last && (
        <motion.span
          className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-teal align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse", delay: delay + 0.3 }}
        />
      )}
    </motion.div>
  );
}

function CodeHighlight({ text }) {
  const parts = text.split(/('[^']*')/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("'") ? (
          <span key={i} className="text-amber">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
