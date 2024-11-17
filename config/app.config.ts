import { AppConfig } from "./app.config.types";

const appConfig: AppConfig = {
  name: "Next.js App Template",
  title: "Next.js App Template",
  description:
    "Build and ship your great ideas with Next.js app template with Tailwind CSS and TypeScript.",
  logo: {
    text: "Next.js App Template",
    href: "/",
  },
  header: {
    links: [
      { href: "/", label: "Home" },
      { href: "/components", label: "Components" },
    ],
  },
  footer: {
    title: "Next.js App Template",
    description:
      "Launch your Next.js projects faster with a professional-grade boilerplate. Built-in TypeScript, Tailwind CSS, and best practices.",
    links: {
      resources: [
        { href: "/components", label: "Components" },
        {
          href: "https://github.com/KenanBek/nextjs-app-template",
          label: "GitHub",
        },
        {
          href: "https://github.com/KenanBek/nextjs-app-template/issues",
          label: "Issues",
        },
        {
          href: "https://github.com/KenanBek/nextjs-app-template/discussions",
          label: "Discussions",
        },
      ],
      documentation: [
        { href: "https://nextjs.org/docs", label: "Next.js Docs" },
        { href: "https://tailwindcss.com/docs", label: "Tailwind CSS" },
        { href: "https://www.typescriptlang.org/docs", label: "TypeScript" },
        { href: "https://react.dev", label: "React" },
      ],
    },
  },
};

export default appConfig;
