import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/timeline";
import { achievements, profile, projects, skillGroups } from "@/lib/site-data";

function SectionHeader({ title, id }: { title: string; id: string }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">{title}</p>
      <span id={id} className="sr-only">
        {title}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth bg-hero-grid">
      <Navbar />
      <main id="home" className="mx-auto w-full max-w-6xl space-y-14 px-4 py-14 sm:px-6">
        <Reveal>
          <section className="rounded-3xl border border-white/10 bg-surface p-8 shadow-glow backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{profile.role}</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </section>
        </Reveal>

        <section id="about" aria-labelledby="about-heading">
          <SectionHeader title="About" id="about-heading" />
          <Reveal>
            <article className="rounded-2xl border border-white/10 bg-surface p-6 text-slate-300 backdrop-blur-xl">
              <p>{profile.summary}</p>
              <p className="mt-3">Currently based in {profile.location} and open to impactful collaborations.</p>
            </article>
          </Reveal>
        </section>

        <section id="skills" aria-labelledby="skills-heading">
          <SectionHeader title="Skills" id="skills-heading" />
          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <Reveal key={group.title}>
                <article className="rounded-2xl border border-white/10 bg-surface p-5 backdrop-blur-xl">
                  <h3 className="text-base font-semibold text-white">{group.title}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-200">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading">
          <SectionHeader title="Experience" id="experience-heading" />
          <Timeline />
        </section>

        <section id="projects" aria-labelledby="projects-heading">
          <SectionHeader title="Projects" id="projects-heading" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="achievements" aria-labelledby="achievements-heading">
          <SectionHeader title="Achievements" id="achievements-heading" />
          <Reveal>
            <ul className="space-y-3 rounded-2xl border border-white/10 bg-surface p-6 text-slate-300 backdrop-blur-xl">
              {achievements.map((achievement) => (
                <li key={achievement} className="rounded-xl border border-white/10 bg-slate-900/45 p-4">
                  {achievement}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <SectionHeader title="Contact" id="contact-heading" />
          <Reveal>
            <form className="rounded-2xl border border-white/10 bg-surface p-6 backdrop-blur-xl">
              <p className="text-sm text-slate-300">This is a placeholder contact form UI. Connect via {profile.email}.</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-200">
                  Name
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none ring-sky-300/60 transition focus:ring"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm text-slate-200">
                  Email
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none ring-sky-300/60 transition focus:ring"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm text-slate-200">
                Message
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none ring-sky-300/60 transition focus:ring"
                  placeholder="Share your idea or opportunity"
                />
              </label>
              <button
                type="button"
                className="mt-4 rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
