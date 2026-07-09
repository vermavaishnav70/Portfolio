import { profile } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400 sm:px-6">
      <p>© {new Date().getFullYear()} {profile.name}. Crafted with Next.js and Tailwind CSS.</p>
    </footer>
  );
}
