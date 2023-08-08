import OneguruIcon from "../../public/oneguru-icon.svg"
import PickoIcon from "../../public/picko-icon.svg"

type WorkItem =  {
  icon: any;
  title: string;
  link: string;
  description: string;
  technologies: string[];
};

export default function FeaturedWorks() {
  const workItems: WorkItem[] = [
    {
      icon: <OneguruIcon />,
      title: "OneGuru",
      link: "oneguru.io",
      description: "An interactive learning platform for UI/UX enthusiasts. By taking our interactive test, you'll learn how to apply best practices when designing a UI. The app is powered by ReactJS",
      technologies: [
        "ReactJS", "NodeJS", "MongoDB"
      ]
    },
    {
      icon: <PickoIcon />,
      title: "Picko",
      link: "picko.ph",
      description: "A multi channel e-commerce platform that focuses on selling car cleaning products. The app is powered by Nuxt and NodeJS.",
      technologies: [
        "VueJS", "NodeJS", "MongoDB"
      ]
    },
  ];

  return (
    <div className="font-light">
      <h1 className="text-[#E8E8E8] text-[32px] md:text-[42px] md:mb-10 font-medium">
        Featured Works
      </h1>
      {workItems.map((work: WorkItem, index: number) => (
        <div key={index} className="border-b last:border-none border-[#9D9D9D] py-[60px]">
          <div className="flex">
            {work.icon}
            <div className="ml-[20px]">
              <div className="text-[24px] md:text-[32px] text-white">
                {work.title}
              </div>
              <div className="WorkItem_Heading_Link">
                <a 
                  href={`https://${work.link}`} 
                  target="_blank" 
                  className="text-[#ABABAB] text-[24px] underline"
                >
                  {work.link}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 md:text-[26px] text-[20px] text-[#D6D6D6] leading-[45px] w-full md:w-[80%]">
            {work.description}
          </div>

          <div className="flex gap-[15px] mt-4">
            {work.technologies.map((tech: string, techIndex: number) => (
              <div key={techIndex} className="bg-[#12342E] text-[#84E9B2] rounded-md py-[0.5rem] px-[0.8rem]">
                {tech}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}