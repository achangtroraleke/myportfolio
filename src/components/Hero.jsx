import { useEffect, useState } from "react";
import { profile } from "../data/resume";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const stagger = (i) => ({
    transitionDelay: `${i * 90}ms`,
  });

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/[0.06] blur-3xl" />
      <div className="mx-auto grid max-w-wrap gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
        <div>
          <p
            className="hero-line font-mono text-sm text-accent"
            style={stagger(0)}
            data-in={mounted}
          >
            {profile.role}
          </p>
          <h1
            className="hero-line mt-4 max-w-xl font-display text-4xl leading-[1.08] tracking-tightish text-ink sm:text-5xl"
            style={stagger(1)}
            data-in={mounted}
          >
            {profile.name}
          </h1>
          <p
            className="hero-line mt-6 max-w-md text-[15px] leading-relaxed text-muted sm:text-base"
            style={stagger(2)}
            data-in={mounted}
          >
            {profile.summary}
          </p>
          <div
            className="hero-line mt-9 flex flex-wrap items-center gap-4"
            style={stagger(3)}
            data-in={mounted}
          >
            <a
              href="#work"
              className="rounded-sm bg-accent px-5 py-2.5 font-mono text-sm text-bg transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-sm border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div
          className="hero-line rounded-md border border-line bg-panel/60 p-6"
          style={stagger(2)}
          data-in={mounted}
        >
          <p className="font-mono text-xs text-faint">// at a glance</p>
          <dl className="mt-5 space-y-5">
            {profile.stats.map((s) => (
              <div key={s.label} className="border-t border-line/70 pt-4 first:border-t-0 first:pt-0">
                <dt className="font-display text-3xl text-ink">{s.value}</dt>
                <dd className="mt-1 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
