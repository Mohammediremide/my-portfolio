import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, XIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 sm:flex-row sm:justify-between sm:px-8">
        <div className="text-center sm:text-left">
          <div className="font-display text-lg font-semibold text-ink">
            <span className="text-teal">&lt;</span>Mo<span className="text-teal">/&gt;</span>
          </div>
          <p className="mt-1 text-xs text-ink-faint">Frontend Developer · Lagos, Nigeria</p>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/Mohammediremide" target="_blank" rel="noreferrer" aria-label="GitHub" className="cursor-hover text-ink-faint transition-colors hover:text-teal">
            <GithubIcon size={18} />
          </a>
          <a href="https://x.com/mohammedcodes1" target="_blank" rel="noreferrer" aria-label="X / Twitter" className="cursor-hover text-ink-faint transition-colors hover:text-teal">
            <XIcon size={18} />
          </a>
          <a href="mailto:odewunmimohammed@gmail.com" aria-label="Email" className="cursor-hover text-ink-faint transition-colors hover:text-teal">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} Mohammed. All rights reserved.
        </p>
      </div>

      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ y: -3 }}
        aria-label="Back to top"
        className="cursor-hover absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-border-strong bg-surface-2 text-teal shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] transition-colors hover:border-teal/50"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
