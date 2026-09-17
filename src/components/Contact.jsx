import { profile } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-panel/40">
      <div className="mx-auto max-w-wrap px-6 py-20 sm:px-10 sm:py-28">
        <h2 className="max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
          Open to full-stack and backend-leaning roles. Reach out directly.
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm bg-accent px-5 py-2.5 font-mono text-sm text-bg transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent"
          >
            {profile.linkedin}
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent"
          >
            {profile.github}
          </a>
        </div>
      </div>
    </section>
  );
}
