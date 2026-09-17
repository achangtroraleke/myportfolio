import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-wrap px-6 py-20 sm:px-10 sm:py-28">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">Experience</h2>

        <div className="mt-14 space-y-14">
          {experience.map((e) => (
            <div key={e.org} className="grid gap-4 sm:grid-cols-[9rem_1fr] sm:gap-10">
              <p className="font-mono text-sm text-faint">
                {e.start}–{e.end}
              </p>
              <div>
                <h3 className="font-display text-xl text-ink sm:text-2xl">
                  {e.role} <span className="text-muted">· {e.org}</span>
                </h3>
                <ul className="mt-5 space-y-3">
                  {e.points.map((pt, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
