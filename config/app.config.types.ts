export interface AppConfig {
  title: string;
  description: string;
  logo: {
    text: string;
    href: string;
  };
  navigation: {
    links: Array<{
      href: string;
      label: string;
    }>;
  };
  footer: {
    companyName: string;
    description: string;
    companyLinks: Array<{
      href: string;
      label: string;
    }>;
    resourceLinks: Array<{
      href: string;
      label: string;
    }>;
  };
}
