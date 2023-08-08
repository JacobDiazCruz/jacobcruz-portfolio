import React from "react";

export default function FeaturedDescription() {
  return (
    <div>
      <div className="w-[181px] h-[86px] bg-blue-900 absolute rounded-full z-10 filter blur-[100px]" />
      <p className="font-light text-[#E8E8E8] relative z-[15] text-[20px] md:text-[32px] leading-[40px] md:leading-[60px]">
        I consistently aim to write code thoughtfully. It is essential to avoid an overly simplistic approach for every piece of code in some situations that may require a certain level of complexity to attain specific performance or functionalities. The key lies in finding the right balance between simplicity and functionality.
      </p>
    </div>
  );
}