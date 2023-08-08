import FeaturedDescription from "@/components/FeaturedDescription";
import FeaturedWorks from "@/components/FeaturedWorks";
import Footer from "@/components/Footer";
import Masthead from "@/components/Masthead";
import Section from "@/components/Section";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head"
import CjLogo from "../../public/cj-logo.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Cruz - Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="p-6 bg-[#1B1B1B] w-full">
        <div className="flex items-center m-[0 auto] gap-[10px] p-2">
          <div className="w-[181px] h-[86px] bg-[#37682B] absolute rounded-full z-10 filter blur-[95px]">asd</div>
          <CjLogo />
          <p className="ml-1 text-[20px] text-neutral-800 dark:text-white">
            JACOB CRUZ
          </p>
        </div>

        <Section>
          <Masthead />
        </Section>

        <Section>
          <FeaturedWorks />
        </Section>

        <Section>
          <WorkExperience />
        </Section>

        <Section>
          <FeaturedDescription />
        </Section>

        <Section>
          <Footer />
        </Section>
      </main>
    </>
  );
}