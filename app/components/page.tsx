import PageHeader from "@/components/generic/PageHeader";
import CodeBlock from "@/components/generic/CodeBlock";
import FloatingNav from "@/components/generic/FloatingNav";
import TableOfContents from "@/components/generic/TableOfContents";
import ScrollIndicator from "@/components/generic/ScrollIndicator";
import { COMPONENT_DATA, ComponentData } from "./components.data";

const TOC_ITEMS = {
  "Generic Components": Object.entries(COMPONENT_DATA.genericComponents).map(
    ([id, data]) => ({
      id,
      label: data.title,
    })
  ),
  "Project Components": Object.entries(COMPONENT_DATA.projectComponents).map(
    ([id, data]) => ({
      id,
      label: data.title,
    })
  ),
};

function ComponentSection({ id, data }: { id: string; data: ComponentData }) {
  return (
    <div id={id} className="mb-12 scroll-mt-16">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        {data.title}
        <a href={`#${id}`} className="text-indigo-600 dark:text-indigo-400 text-sm">
          #
        </a>
      </h3>
      <div className="mb-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        {data.description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4">{data.description}</p>
        )}
        {data.demo}
      </div>
      <CodeBlock code={data.code} />
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <>
      <ScrollIndicator />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <PageHeader
          title="Components"
          description="Explore our collection of reusable components with usage examples and source code."
        />

        <div className="max-w-5xl mx-auto px-4 py-8">
          <TableOfContents items={TOC_ITEMS} />

          {/* Generic Components Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Generic Components</h2>
            {Object.entries(COMPONENT_DATA.genericComponents).map(([id, data]) => (
              <ComponentSection key={id} id={id} data={data} />
            ))}
          </section>

          {/* Project Components Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Project Components</h2>
            {Object.entries(COMPONENT_DATA.projectComponents).map(([id, data]) => (
              <ComponentSection key={id} id={id} data={data} />
            ))}
          </section>
        </div>

        <FloatingNav items={TOC_ITEMS} />
      </div>
    </>
  );
}
