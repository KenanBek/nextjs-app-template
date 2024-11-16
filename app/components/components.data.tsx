import PageHeader from "@/components/generic/PageHeader";
import CTAButton from "@/components/generic/CTAButton";
import ThemeToggle from "@/components/generic/ThemeToggle";
import TableOfContents from "@/components/generic/TableOfContents";
import Header from "@/components/project/Header";
import Footer from "@/components/project/Footer";

// Export the type definition
export type ComponentData = {
  title: string;
  description: string | null;
  demo: JSX.Element | null;
  code: string;
};

type ComponentDataStructure = {
  genericComponents: Record<string, ComponentData>;
  projectComponents: Record<string, ComponentData>;
};

export const COMPONENT_DATA: ComponentDataStructure = {
  genericComponents: {
    pageheader: {
      title: 'PageHeader',
      description: 'The PageHeader component is used to display a page header with a title, subtitle, and description.',
      demo: (
        <PageHeader
          title="Example Title"
          subTitle="Optional Subtitle"
          subTitleLink="#"
          description="This is an example description."
        >
          <CTAButton href="#">Action Button</CTAButton>
        </PageHeader>
      ),
      code: `<PageHeader
  title="Example Title"
  subTitle="Optional Subtitle"
  subTitleLink="#"
  description="This is an example description."
>
  <CTAButton href="#">Action Button</CTAButton>
</PageHeader>`,
    },
    ctabutton: {
      title: 'CTAButton',
      description: null,
      demo: (
        <div className="flex gap-4">
          <CTAButton href="#">Default Button</CTAButton>
          <CTAButton href="#" variant="secondary">Secondary Button</CTAButton>
          <CTAButton href="#" className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 dark:text-white">
            Custom Style
          </CTAButton>
        </div>
      ),
      code: `<CTAButton href="#">Default Button</CTAButton>
<CTAButton href="#" variant="secondary">Secondary Button</CTAButton>
<CTAButton href="#" className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 dark:text-white">
  Custom Style
</CTAButton>`,
    },
    themetoggle: {
      title: 'ThemeToggle',
      description: null,
      demo: <ThemeToggle />,
      code: '<ThemeToggle />',
    },
    floatingnav: {
      title: 'FloatingNav',
      description: 'The FloatingNav component appears when scrolling down the page. See it in action by scrolling this page.',
      demo: null,
      code: `<FloatingNav items={{
  'Section 1': [
    { id: 'item1', label: 'Item 1' },
    { id: 'item2', label: 'Item 2' }
  ],
  'Section 2': [
    { id: 'item3', label: 'Item 3' }
  ]
}} />`,
    },
    tableofcontents: {
      title: 'TableOfContents',
      description: null,
      demo: (
        <TableOfContents
          items={{
            'Example Section': [
              { id: 'example1', label: 'Example Item 1' },
              { id: 'example2', label: 'Example Item 2' },
            ],
          }}
        />
      ),
      code: `<TableOfContents items={{
  'Example Section': [
    { id: 'example1', label: 'Example Item 1' },
    { id: 'example2', label: 'Example Item 2' }
  ]
}} />`,
    },
    scrollindicator: {
      title: 'ScrollIndicator',
      description: 'The ScrollIndicator component shows reading progress at the top of the page. See it in action as you scroll this page.',
      demo: null,
      code: '<ScrollIndicator />',
    },
  },
  projectComponents: {
    header: {
      title: 'Header',
      description: 'The Header component is used to display a header with a logo, navigation links, theme toggle, and a CTA button.',
      demo: <Header />,
      code: '<Header />',
    },
    footer: {
      title: 'Footer',
      description: 'The Footer component is used to display a footer with a company name and navigation links.',
      demo: <Footer />,
      code: '<Footer />',
    },
  },
};
