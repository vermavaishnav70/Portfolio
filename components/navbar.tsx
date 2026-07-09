import { navLinks, profile } from "@/lib/site-data";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl dark:bg-slate-950/70 dark:border-white/10">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <a href="#home" className="text-sm font-semibold tracking-wide text-sky-300">
          {profile.name}
        </a>
        <div className="hidden items-center gap-5 md:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
