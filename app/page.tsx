import InfoBox from "@/components/generic/InfoBox";
import PageHeader from "@/components/generic/PageHeader";
import Header from "@/components/project/Header";
import Footer from "@/components/project/Footer";
import appConfig from "@/config/app.config";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24">
        <PageHeader
          title={appConfig.title}
          description={appConfig.description}
        >
          <InfoBox>
            Explore our curated selection of Next.js starter kits designed to accelerate your development process.
          </InfoBox>
        </PageHeader>
      </main>
      <Footer />
    </>
  );
}
