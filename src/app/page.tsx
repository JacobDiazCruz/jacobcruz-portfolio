"use client";

import FeaturedBook from "@/components/FeaturedBook";
import FeaturedWorks from "@/components/FeaturedWorks";
import Footer from "@/components/Footer";
import Masthead from "@/components/Masthead";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import WorkExperience from "@/components/WorkExperience";
import { ThemeProvider } from "@/store/useTheme";
import { useEffect } from "react";
import Scrollbar from 'smooth-scrollbar';

export default function Home() {
  useEffect(() => {
    // Initialize the smooth scrollbar
    const container = document.querySelector("#scrollable-container");
    const options = {
      damping: 0.06,
    };
    // @ts-ignore
    Scrollbar.init(container, options);

    return () => {
      // Destroy the scrollbar instance on component unmount
      // @ts-ignore
      Scrollbar.destroy(container);
    };
  }, []);
  

  return (
    <ThemeProvider>
      <Navbar />
      <main className="p-6 w-full font-['Helvetica'] pt-[100px]" id="scrollable-container">
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