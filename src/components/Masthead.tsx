export default function Masthead() {
  return (
    <>
      <div className="w-full">
        <p className="ml-1 text-[22px] text-neutral-400">
          JACOB CRUZ
        </p>
        <h1 className="md:text-[58px] text-[36px] mt-3 text-[#E8E8E8] font-light md:leading-[70px]">
          Building great apps to empower people
        </h1>
        <p className="md:text-[24px] text-[20px] text-[#ACACAC] mt-7">
          A software engineer based in <br/> Manila, Philippines
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