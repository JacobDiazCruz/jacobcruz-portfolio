import ZestyIcon from "../../public/zesty-icon.svg"
import YonduIcon from "../../public/yondu-icon.svg"
import WtwIcon from "../../public/wtw-icon.svg"

type Work = {
  icon: any;
  company: string;
  position: string;
  location: string;
};

export default function WorkExperience() {
  const works: Work[] = [
    {
      icon: <ZestyIcon />,
      company: "Zesty IO",
      position: "Software Engineer",
      location: "San Diego, California, United States"
    },
    {
      icon: <YonduIcon />,
      company: "Yondu, Inc.",
      position: "Senior Software Engineer",
      location: "BGC, Philippines"
    },
    {
      icon: <WtwIcon />,
      company: "Willis Towers Watson",
      position: "Software Engineer",
      location: "BGC, Philippines"
    }
  ]; 

  return (
    <div className="font-light">
      <h1 className="color-[#E8E8E8] text-[32px] md:text-[42px] md:mb-10">
        Work Experience
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between md:mt-10">
        {works.map((work: Work, index: number) => (
          <div key={index} className="flex-[50%] mt-10">
            {work.icon}
            <div className="text-[24px] md:text-[32px] mt-4 text-[#E8E8E8]">
              {work.company}
            </div>
            <div className="text-[#7FEE91] text-[20px] md:text-[24px] mt-1">
              {work.position}
            </div>
            <div className="text-[#ABABAB] text-[20px] md:text-[24px] mt-1">
              {work.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}