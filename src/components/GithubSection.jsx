import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitFork, Star, BookMarked, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

// Change this to your real GitHub username to pull live stats.
const GITHUB_USERNAME = "Mohammediremide";

const FALLBACK_STATS = { public_repos: 12, followers: 0, following: 0 };

export default function GithubSection() {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ok | error

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API request failed");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setStats({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        });
        setStatus("ok");
      })
      .catch(() => {
        if (cancelled) return;
        setStats(FALLBACK_STATS);
        setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const display = stats ?? FALLBACK_STATS;

  const cards = [
    { icon: BookMarked, label: "Public repos", value: display.public_repos },
    { icon: Star, label: "Followers", value: display.followers },
    { icon: GitFork, label: "Following", value: display.following },
  ];

  return (
    <section className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="mono-tag text-sm text-teal">// on github</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Most of the real work happens in commits
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
              Every project here is public — issues, commit history and all.
              {status === "error" && " Live stats below are showing placeholder numbers right now."}
            </p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="cursor-hover mt-7 inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-teal/50 hover:text-teal"
            >
              <GithubIcon size={16} /> View GitHub Profile <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {cards.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-border bg-surface-2/60 p-6 text-center"
              >
                <Icon size={20} className="mx-auto text-teal" />
                <div className="mt-3 font-display text-3xl font-semibold text-ink">
                  <Counter target={status === "loading" ? 0 : value} />
                </div>
                <div className="mt-1 text-xs text-ink-faint">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ target }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!target) {
      setN(0);
      return;
    }
    let raf;
    const duration = 900;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setN(Math.round(progress * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return <>{n}</>;
}
