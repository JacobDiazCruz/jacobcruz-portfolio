export default function Masthead() {
  return (
    <div className="flex items-center gap-[100px]">
      <div className="w-full">
        <div className="text-white font-medium text-[22px]">
          Jacob Cruz
        </div>
        <div className="text-neutral-300 font-light">
          Senior Software Engineer based in Manila, Philippines
        </div>
        <h1 className="md:text-[62px] text-[36px] mt-7 text-neutral-300 font-light md:leading-[65px]">
          Building great <span className="italic text-white font-normal">apps</span> to empower people
        </h1>
        <button className="py-2 px-4 rounded-md ml-0 mt-7 text-[20px] font-normal cursor-pointer bg-[#7FEE91] text-[#003308] border-none">
          contact me
        </button>
      </div>
      <div className="w-[700px] md:block hidden">
        <div className="w-fit p-3 border bg-neutral-900 border-s-neutral-500 border-y-neutral-700 border-r-neutral-800 rounded-lg font-light">
          <span className="text-green-400">request: </span>
          <span className="text-violet-400 ml-1">&lsquo;Let&rsquo;s work together&rsquo;</span>;
        </div>
        <div className="w-fit p-3 mt-3 ml-5 border bg-neutral-900 border-s-neutral-500 border-y-neutral-700 border-r-neutral-800 rounded-lg font-light">
          <span className="text-green-400">response: </span>
          <span className="text-yellow-100 ml-1">&lsquo;Sure, when will we start?&rsquo;</span>;
        </div>
      </div>
    </div>
  );
}