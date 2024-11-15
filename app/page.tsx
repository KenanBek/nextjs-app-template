import InfoBox from "@/components/generic/InfoBox";
import PageHeader from "@/components/generic/PageHeader";
import appConfig from "@/config/app.config";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24">
      <PageHeader
        title={appConfig.title}
        description={appConfig.description}
      >
        <InfoBox>
          Explore our curated selection of Next.js starter kits designed to accelerate your development process.
        </InfoBox>
        <InfoBox>
          Our templates are designed to be fully customizable, allowing you to tailor them to your specific needs.
        </InfoBox>
      </PageHeader>
    </main>
  );
}
