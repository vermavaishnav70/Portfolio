import Image from "next/image";
import { Reveal } from "@/components/reveal";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
};

export function ProjectCard({ title, description, tech, image }: ProjectCardProps) {
  return (
    <Reveal className="h-full">
      <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface p-4 shadow-glow backdrop-blur-xl">
        <div className="overflow-hidden rounded-xl border border-white/10">
          <Image
            src={image}
            alt={`${title} placeholder preview`}
            width={800}
            height={400}
            className="h-44 w-full object-cover"
          />
        </div>
        <div className="mt-4 space-y-3">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-300">{description}</p>
          <ul className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}
