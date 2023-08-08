import FeaturedBook from "@/components/FeaturedBook";
import FeaturedDescription from "@/components/FeaturedDescription";
import FeaturedWorks from "@/components/FeaturedWorks";
import Footer from "@/components/Footer";
import Masthead from "@/components/Masthead";
import Section from "@/components/Section";
import WorkExperience from "@/components/WorkExperience";
import CjLogo from "../../public/cj-logo.svg";

export const metadata = {
  title: 'Jacob Cruz - Software Engineer',
  description: ''
}

export default function Home() {
  return (
    <>
      <main className="p-6 bg-[#1B1B1B] w-full">
        <div className="flex items-center m-[0 auto] gap-[10px] sticky top-3 p-2">
          <div className="w-[181px] h-[86px] bg-[#37682B] absolute rounded-full z-10 filter blur-[95px]">asd</div>
          <CjLogo />
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
          <FeaturedBook />
        </Section>

        <Section>
          <Footer />
        </Section>
      </main>
    </>
  );
}