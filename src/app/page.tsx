"use client";

import FeaturedBook from "@/components/FeaturedBook";
import FeaturedWorks from "@/components/FeaturedWorks";
import Footer from "@/components/Footer";
import Masthead from "@/components/Masthead";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import WorkExperience from "@/components/WorkExperience";
import { ThemeProvider } from "@/store/useTheme";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="p-6 w-full font-['Helvetica'] pt-[100px]">
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
          <FeaturedBook />
        </Section>

        <Section>
          <Footer />
        </Section>
      </main>
    </ThemeProvider>
  );
}