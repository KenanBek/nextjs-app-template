import { AppConfig } from "./app.config.types";

const appConfig: AppConfig = {
  title: "Next.js App Boilerplate and Templates",
  description:
    "Jumpstart your Next.js projects with our collection of boilerplates and templates.",
  logo: {
    text: "Logo",
    href: "/",
  },
  navigation: {
    links: [
      { href: "/products", label: "Products" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  footer: {
    companyName: "Company Name",
    description:
      "Building the future of web development with modern tools and frameworks.",
    companyLinks: [
      { href: "/products", label: "Products" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    resourceLinks: [
      { href: "/docs", label: "Documentation" },
      { href: "/support", label: "Support" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
};

export default appConfig;
