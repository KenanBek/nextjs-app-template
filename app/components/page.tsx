import PageHeader from "@/components/generic/PageHeader";
import CodeBlock from "@/components/generic/CodeBlock";
import CTAButton from "@/components/generic/CTAButton";
import ThemeToggle from "@/components/generic/ThemeToggle";
import Header from "@/components/project/Header";
import Footer from "@/components/project/Footer";
import FloatingNav from "@/components/generic/FloatingNav";

const TOC_ITEMS = {
  'Generic Components': [
    { id: 'pageheader', label: 'PageHeader' },
    { id: 'ctabutton', label: 'CTAButton' },
    { id: 'themetoggle', label: 'ThemeToggle' },
  ],
  'Project Components': [
    { id: 'header', label: 'Header' },
    { id: 'footer', label: 'Footer' },
  ],
};

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageHeader
        title="Components"
        description="Explore our collection of reusable components with usage examples and source code."
      />

      {/* Table of Contents */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div id="table-of-contents" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(TOC_ITEMS).map(([section, items]) => (
              <div key={section}>
                <h3 className="font-semibold mb-2">{section}</h3>
                <ul className="space-y-2">
                  {items.map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Generic Components Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Generic Components</h2>

          {/* PageHeader */}
          <div id="pageheader" className="mb-12 scroll-mt-16">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              PageHeader
              <a href="#pageheader" className="text-indigo-600 dark:text-indigo-400 text-sm">
                #
              </a>
            </h3>
            <div className="mb-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <PageHeader
                title="Example Title"
                subTitle="Optional Subtitle"
                subTitleLink="/optional-link"
                description="This is an example description for the PageHeader component."
              >
                <CTAButton href="#">Action Button</CTAButton>
              </PageHeader>
            </div>
            <CodeBlock
              code={`<PageHeader
  title="Example Title"
  subTitle="Optional Subtitle"
  subTitleLink="/optional-link"
  description="This is an example description."
>
  <CTAButton href="#">Action Button</CTAButton>
</PageHeader>`}
            />
          </div>

          {/* CTAButton */}
          <div id="ctabutton" className="mb-12 scroll-mt-16">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              CTAButton
              <a href="#ctabutton" className="text-indigo-600 dark:text-indigo-400 text-sm">
                #
              </a>
            </h3>
            <div className="mb-4 space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <CTAButton href="#">Default Button</CTAButton>
              <CTAButton href="#" className="bg-green-600 hover:bg-green-700">
                Custom Style
              </CTAButton>
            </div>
            <CodeBlock
              code={`<CTAButton href="#">Default Button</CTAButton>
<CTAButton href="#" className="bg-green-600 hover:bg-green-700">
  Custom Style
</CTAButton>`}
            />
          </div>

          {/* ThemeToggle */}
          <div id="themetoggle" className="mb-12 scroll-mt-16">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              ThemeToggle
              <a href="#themetoggle" className="text-indigo-600 dark:text-indigo-400 text-sm">
                #
              </a>
            </h3>
            <div className="mb-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <ThemeToggle />
            </div>
            <CodeBlock code={`<ThemeToggle />`} />
          </div>
        </section>

        {/* Project Components Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Project Components</h2>

          {/* Header */}
          <div id="header" className="mb-12 scroll-mt-16">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Header
              <a href="#header" className="text-indigo-600 dark:text-indigo-400 text-sm">
                #
              </a>
            </h3>
            <div className="mb-4 border rounded-lg overflow-hidden">
              <Header />
            </div>
            <CodeBlock
              code={`<Header />
// Or with custom links:
<Header links={[
  { href: "/", label: "Home" },
  { href: "/about", label: "About" }
]} />`}
            />
          </div>

          {/* Footer */}
          <div id="footer" className="mb-12 scroll-mt-16">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Footer
              <a href="#footer" className="text-indigo-600 dark:text-indigo-400 text-sm">
                #
              </a>
            </h3>
            <div className="mb-4 border rounded-lg overflow-hidden">
              <Footer />
            </div>
            <CodeBlock
              code={`<Footer />
// Or with custom company name:
<Footer companyName="Your Company" />`}
            />
          </div>
        </section>
      </div>

      {/* Add the floating navigation */}
      <FloatingNav items={TOC_ITEMS} />
    </div>
  );
}