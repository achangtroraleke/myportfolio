import { projects } from "../data/resume";

// Add a project's codeUrl / liveUrl in src/data/resume.js to show its links here.
// Either or both may be left as an empty string; only the ones set will render.

function CodeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LiveIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-wrap px-6 py-20 sm:px-10 sm:py-28">
      <h2 className="font-display text-3xl text-ink sm:text-4xl">Selected work</h2>
      <p className="mt-3 max-w-md text-sm text-muted sm:text-base">
        Side projects I built end to end, from schema design through shipped UI.
      </p>

      <div className="mt-14 divide-y divide-line">
        {projects.map((p) => (
          <article
            key={p.name}
            className="grid gap-6 py-10 first:pt-0 sm:grid-cols-[0.85fr_1.15fr] sm:gap-10"
          >
            <div>
              <h3 className="font-display text-2xl text-ink sm:text-[26px]">{p.name}</h3>
              <p className="mt-2 text-sm text-muted">{p.tagline}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-sm border border-line px-2.5 py-1 font-mono text-xs text-teal"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              {(p.codeUrl || p.liveUrl) && (
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {p.codeUrl && (
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
                    >
                      <CodeIcon /> Code
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
                    >
                      <LiveIcon /> Live site
                    </a>
                  )}
                </div>
              )}
            </div>
            <ul className="space-y-3">
              {p.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
