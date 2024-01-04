import { Hero, SeoMetadata } from "@/components";
import { site_metadata } from "@/constants";

const Home = () => {
  return (
    <>
      <SeoMetadata
        title={site_metadata?.home?.title}
        desc={site_metadata?.home?.desc}
      />
      <Hero />
    </>
  );
};

export default Home;
