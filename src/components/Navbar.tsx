import CjLogo from "../../public/cj-logo.svg";

export default function Navbar() {
  
  return (
    <div className="flex justify-between fixed p-4 md:p-5">
      <div className="flex items-center m-[0 auto] gap-[10px] p-2">
        <div className={`bg-green-900 w-[181px] h-[86px] absolute rounded-full z-[60] filter blur-[95px]`}></div>
        <div className="relative z-[50]">
          <CjLogo />
        </div>
      </div>
    </div>
  );
}