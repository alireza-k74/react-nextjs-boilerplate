import { env } from "@/config/env";

export const siteConfig = {
  name: env.app.name,
  url: env.app.url,
  description:
    "Production-ready Next.js starter with TypeScript, i18n (EN/FA + RTL), auth, TanStack Query, Zustand, and Firebase.",
  links: {
    github: "https://github.com/alireza-k74/react-nextjs-boilerplate",
    docs: "/docs",
  },
  defaultOgImage: "/og-image.png",
} as const;
