import { experiences } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export function Timeline() {
  return (
    <div className="space-y-6">
      {experiences.map((experience) => (
        <Reveal key={`${experience.company}-${experience.duration}`}>
          <article className="rounded-2xl border border-white/10 bg-surface p-6 shadow-glow backdrop-blur-xl dark:bg-surface">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
              <p className="text-sm text-sky-300">{experience.duration}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-slate-300">{experience.company}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
