import { TextAnimate } from "@/components/ui/text-animate";

export default function HeroAbout() {
  return (
    <div className="flex flex-col gap-5 items-center pt-30 w-full">
      <div className="flex flex-col gap-1 items-center w-full">
        <p className="text-low-color">About</p>

        <div className="md:text-7xl text-4xl text-center font-medium">
          <TextAnimate animation="blurInUp" by="character" once>
            Get to
          </TextAnimate>
          <div className="flex items-center md:gap-3 gap-1 flex-wrap justify-center">
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              delay={0.6}
              className="mr-1"
              as={"span"}>
              know
            </TextAnimate>
            {"  "}
            <TextAnimate
              delay={0.8}
              className="text-main-color"
              animation="blurInUp"
              by="character"
              once
              as={"span"}>
              me better
            </TextAnimate>
          </div>
        </div>
      </div>
      <TextAnimate
        animation="fadeIn"
        by="word"
        as="p"
        delay={0.6}
        once
        className="text-low-color md:w-130 w-full text-center">
        I’m Ibrahim Saleh, a Frontend Developer who builds modern, scalable, and
        user-focused web experiences using React, Next.js, and clean UI
        principles.
      </TextAnimate>
    </div>
  );
}
