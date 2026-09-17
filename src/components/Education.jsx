import { education } from "../data/resume";

export default function Education() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-wrap px-6 py-16 sm:px-10">
        <p className="font-mono text-xs text-faint">Education</p>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          {education.map((e) => (
            <div key={e.school}>
              <p className="font-display text-lg text-ink">{e.school}</p>
              <p className="mt-1 text-sm text-muted">{e.credential}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
