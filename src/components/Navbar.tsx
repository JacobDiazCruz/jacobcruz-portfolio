import CjLogo from "../../public/cj-logo.svg";
import { BiSolidSun } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="flex justify-between fixed p-4 md:p-5">
      <div className="flex items-center m-[0 auto] gap-[10px] p-2">
        <div className="w-[181px] h-[86px] bg-[#37682B] absolute rounded-full z-10 filter blur-[95px]"></div>
        <div className="relative z-[50]">
          <CjLogo />
        </div>
      </div>
      {/* <div className="switch rounded-full w-fit h-fit p-2 flex gap-[10px] bg-neutral-800">
        <div className="rounded-full w-[30px] h-[30px] bg-blue-600 flex items-center m-auto cursor-pointer">
          <BiSolidSun className="m-auto" />
        </div>
        <div className="rounded-full w-[30px] h-[30px] bg-neutral-800 flex items-center m-auto cursor-pointer">
          <BsFillMoonFill className="m-auto" />
        </div>
      </div> */}
    </div>
  );
}