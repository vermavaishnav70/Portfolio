export const profile = {
  name: "Alex Morgan",
  role: "Full Stack Developer",
  tagline: "I build polished, accessible web experiences with modern technologies.",
  location: "Bengaluru, India",
  email: "hello@example.com",
  summary:
    "I design and build scalable products with a strong focus on delightful user experiences, performance, and clean architecture.",
};

export const navLinks = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Achievements",
  "Contact",
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "Docker", "CI/CD", "Vercel", "Figma"],
  },
];

export const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Nova Labs",
    duration: "2024 - Present",
    points: [
      "Led development of a modular design system used across 5 product teams.",
      "Improved Lighthouse performance scores from 72 to 95+ on key landing pages.",
      "Mentored engineers on accessibility, testing, and architecture best practices.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Pixel Forge",
    duration: "2022 - 2024",
    points: [
      "Built dashboard features with React and TypeScript for 20k+ monthly users.",
      "Implemented analytics and experimentation workflows that improved conversion by 18%.",
      "Collaborated with design to ship responsive interfaces across desktop and mobile.",
    ],
  },
];

export const projects = [
  {
    title: "Project Atlas",
    description: "A modern SaaS dashboard template with reusable components and role-based views.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/project-atlas.svg",
  },
  {
    title: "ShopWave",
    description: "An e-commerce storefront focused on fast performance, accessibility, and conversion.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/project-shopwave.svg",
  },
  {
    title: "Insight Hub",
    description: "A data visualization platform for product analytics and executive reporting.",
    tech: ["Next.js", "Framer Motion", "Charting"],
    image: "/projects/project-insight-hub.svg",
  },
];

export const achievements = [
  "Top 1% contributor in internal engineering excellence program.",
  "Speaker at a regional frontend conference on accessibility-first UI design.",
  "Open-source contributor with multiple merged PRs in popular UI libraries.",
];
