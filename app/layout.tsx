import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://example-portfolio.vercel.app"),
  title: {
    default: "Alex Morgan | Portfolio",
    template: "%s | Alex Morgan",
  },
  description:
    "Personal portfolio website showcasing experience, projects, skills, and achievements.",
  keywords: ["Portfolio", "Next.js", "Frontend", "Full Stack Developer"],
  openGraph: {
    title: "Alex Morgan | Portfolio",
    description:
      "Modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    type: "website",
    url: "https://example-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan | Portfolio",
    description: "Explore projects, experience, and skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
