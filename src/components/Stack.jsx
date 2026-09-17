import { skills } from "../data/resume";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-wrap px-6 py-20 sm:px-10 sm:py-28">
      <h2 className="font-display text-3xl text-ink sm:text-4xl">Stack</h2>

      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-xs text-faint">{group.category}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-line bg-panel/50 px-2.5 py-1 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
