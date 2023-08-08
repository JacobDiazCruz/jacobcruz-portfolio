export default function Masthead() {
  return (
    <>
      <div className="w-full">
        <div className="font-medium text-[22px]">
          Jacob Cruz
        </div>
        <div className="text-neutral-300">
          Developer + <span className="font-mono italic">Designer</span>
        </div>
        <h1 className="md:text-[62px] text-[36px] mt-7 text-neutral-300 font-light md:leading-[65px]">
          Building great <span className="italic text-white font-normal">apps</span> to empower people
        </h1>
        <p className="md:text-[24px] font-light text-[20px] text-[#ACACAC] mt-7">
          A software engineer based in Manila, Philippines
        </p>
        <button className="py-2 px-4 rounded-md ml-0 mt-7 text-[20px] font-normal cursor-pointer bg-[#7FEE91] text-[#003308] border-none">
          contact me
        </button>
      </div>
      <div className="w-[700px] md:block hidden">
      </div>
    </>
  );
}