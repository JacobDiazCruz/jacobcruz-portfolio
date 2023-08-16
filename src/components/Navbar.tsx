import React, { useState, useEffect } from 'react';
import CjLogo from "../../public/cj-logo.svg";

export default function Navbar() {
  const [scrollBgClass, setScrollBgClass] = useState("bg-green-900");

  useEffect(() => {
    const handleScroll = () => {
      const featuredEbookElement = document.querySelector('.featured-ebook');
      const featuredWorksElement = document.querySelector('.featured-works');

      if (featuredEbookElement && featuredWorksElement) {
        const rectEbook = featuredEbookElement.getBoundingClientRect();
        const rectWorks = featuredWorksElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the middle of the visible area
        const middle = windowHeight / 2;

        if (rectEbook.top <= middle && rectEbook.bottom >= middle) {
          setScrollBgClass("bg-red-900");
        } else if (rectWorks.top <= middle && rectWorks.bottom >= middle) {
          setScrollBgClass("bg-emerald-900");
        } else if (rectEbook.top <= windowHeight && rectEbook.bottom >= 0) {
          // Keep the same background color if featured-ebook is still visible
        } else {
          setScrollBgClass("bg-green-900");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex justify-between fixed p-4 md:p-5`}>
      <div className="flex items-center m-[0 auto] gap-[10px] p-2">
        <div className={`w-[181px] h-[86px] absolute rounded-full z-[60] filter blur-[95px] ${scrollBgClass}`}></div>
        <div className="relative z-[50]">
          <CjLogo />
        </div>
      </div>
    </div>
  );
};