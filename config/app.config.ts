import { AppConfig } from "./app.config.types";

const appConfig: AppConfig = {
  name: "Next.js App Template",
  title: "Next.js App Boilerplate and Templates",
  description:
    "Jumpstart your Next.js projects with our collection of boilerplates and templates.",
  logo: {
    text: "Next.js App Template",
    href: "/",
  },
  navigation: {
    links: [{ href: "/components", label: "Components" }],
  },
  footer: {
    title: "Next.js App Template",
    description:
      "Jumpstart your Next.js projects with our collection of boilerplates and templates.",
    links: {
      resources: [
        { href: "/components", label: "Components" },
        { href: "https://github.com/KenanBek/nextjs-app-template", label: "GitHub" },
        { href: "https://github.com/KenanBek/nextjs-app-template/issues", label: "Issues" },
        { href: "https://github.com/KenanBek/nextjs-app-template/discussions", label: "Discussions" },
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
