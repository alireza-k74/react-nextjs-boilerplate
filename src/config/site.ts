import { env } from "@/config/env";

export const siteConfig = {
  name: env.app.name,
  url: env.app.url,
  description: "Production-ready Next.js enterprise boilerplate",
  links: {
    github: "https://github.com/your-org/boilerplate-web",
    docs: "/docs",
  },
  defaultOgImage: "/og-image.png",
} as const;
