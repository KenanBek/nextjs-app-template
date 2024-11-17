export interface AppConfig {
  name: string;
  title: string;
  description: string;
  logo: {
    text: string;
    href: string;
  };
  header: {
    links: Array<{
      href: string;
      label: string;
    }>;
  };
  footer: {
    title: string;
    description: string;
    links: {
      [section: string]: Array<{
        href: string;
        label: string;
      }>;
    };
  };
}
