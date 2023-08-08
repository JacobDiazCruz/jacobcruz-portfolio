import Image from "next/image";
import BookImage from "./black-book.png";

export default function FeaturedBook() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-[100px]">
      <div className="w-full md:w-[600px]">
        <div className="bg-rose-500 text-white rounded-md px-2 w-fit">
          Unpublished Ebook
        </div>
        <h1 className="text-[24px] md:text-[32px] mt-5">
          A compendium of solutions for real-life UX problems
        </h1>
        <p className="mt-5 text-[20px] leading-[35px] md:text-[24px] text-neutral-300 font-light">
          This book centers around the day-to-day interactions of users with actual software applications. Drawing from my diverse industry background, I've come to recognize the multitude of apps grappling with design challenges.
        </p>
      </div>
      <div>
        <Image 
          src={BookImage}
          alt="Book"
          className="w-[280px] h-full rotate-12"
        />
      </div>
    </div>
  );
}