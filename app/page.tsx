import InfoBox from "@/components/generic/InfoBox";
import PageHeader from "@/components/generic/PageHeader";
import CTAButton from "@/components/generic/CTAButton";
import appConfig from "@/config/app.config";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full py-24 px-8 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <PageHeader
            title={appConfig.title}
            description={appConfig.description}
          >
            <div className="flex gap-4 justify-center mt-8">
              <CTAButton href="https://github.com/KenanBek/nextjs-app-template">
                Get Started
              </CTAButton>
              <CTAButton
                href="/components"
                variant="secondary"
              >
                View Components
              </CTAButton>
            </div>
          </PageHeader>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Build Modern Web Apps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <InfoBox className="!text-left">
              <h3 className="text-xl font-semibold mb-2">Ready-to-Use Components</h3>
              <p>Pre-built components for common UI patterns, saving you hours of development time.</p>
            </InfoBox>
            <InfoBox className="!text-left">
              <h3 className="text-xl font-semibold mb-2">TypeScript & Tailwind</h3>
              <p>Built with TypeScript and Tailwind CSS for type-safe, maintainable, and beautiful UIs.</p>
            </InfoBox>
            <InfoBox className="!text-left">
              <h3 className="text-xl font-semibold mb-2">Dark Mode Support</h3>
              <p>Built-in dark mode support with easy theme switching capabilities.</p>
            </InfoBox>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose This Template?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
                  <p className="text-gray-600 dark:text-gray-300">Get your project up and running in minutes with our comprehensive boilerplate.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Modular Architecture</h3>
                  <p className="text-gray-600 dark:text-gray-300">Well-organized code structure with separate generic and project components.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
                  <p className="text-gray-600 dark:text-gray-300">Built following Next.js and React best practices for optimal performance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                  <p className="text-gray-600 dark:text-gray-300">Easy to customize and extend with your own components and styles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-8 bg-indigo-600 dark:bg-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-indigo-100 mb-8">
            Get started with our template and build your next project faster.
          </p>
          <CTAButton
            href="https://github.com/KenanBek/nextjs-app-template"
            className="!bg-white !text-indigo-600 hover:!bg-indigo-50 dark:!bg-white dark:!text-indigo-600 dark:hover:!bg-indigo-50"
          >
            Clone Repository
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
