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
      company: [
        { href: "/products", label: "Products" },
        { href: "/services", label: "Services" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
      ],
      resources: [
        { href: "/docs", label: "Documentation" },
        { href: "/support", label: "Support" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/privacy", label: "Privacy Policy" },
      ],
    },
  },
};

export default appConfig;
