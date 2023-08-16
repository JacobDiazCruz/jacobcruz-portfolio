export default function Footer() {
  return (
    <div>
      <div className="font-light">
        <div className="text-[#E8E8E8] text-[32px] md:text-[42px] font-medium">
          Let’s get in touch
        </div>
        <div className="text-[#E8E8E8] text-[18px] md:text-[24px] underline mt-5 md:mt-[30px] flex items-center gap-[30px]">
          <div>
            <a href="mailto:carljacobdiazcruz@gmail.com">Email</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/jacob-cruz-b3404b165/" target="_blank">LinkedIn</a>
          </div>
          <div>
            <a href="https://github.com/JacobDiazCruz" target="_blank">Github</a>
          </div>
        </div>
        <div className="text-[16px] md:text-[18px] text-[#D6D6D6] mt-[50px]">
          © 2023 Jacob Cruz. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}