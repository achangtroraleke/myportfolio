export default function Footer() {
  return (
    <footer className="mx-auto max-w-wrap px-6 py-8 sm:px-10">
      <p className="font-mono text-xs text-faint">
        Built with React &amp; Tailwind · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
