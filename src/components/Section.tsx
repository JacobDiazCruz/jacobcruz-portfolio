import { ReactNode } from "react";

export default function Section({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center m-auto w-full md:w-[1000px] py-[100px]">
      {children}
    </div>  
  );
}