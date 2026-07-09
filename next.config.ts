import type { NextConfig } from "next";

const isGitHubPages = process.env.NEXT_DEPLOY_TARGET === "github-pages";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  images: {
    unoptimized: isGitHubPages,
  },
  basePath: isGitHubPages && repository ? `/${repository}` : "",
  assetPrefix: isGitHubPages && repository ? `/${repository}/` : undefined,
};

export default nextConfig;
