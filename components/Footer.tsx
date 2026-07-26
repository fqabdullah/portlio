export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Abdullah Farooq</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-online animate-blink-slow" />
          status: online
        </span>
      </div>
    </footer>
  );
}
