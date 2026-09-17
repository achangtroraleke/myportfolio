import { profile } from "../data/resume";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="font-display text-lg tracking-tightish text-ink hover:text-accent transition-colors"
        >
          Atachart Changtroraleke
        </a>
        <nav className="hidden gap-8 font-mono text-sm text-muted sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-sm border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-ink sm:text-sm"
        >
          {profile.email}
        </a>
      </div>
    </header>
  );
}
