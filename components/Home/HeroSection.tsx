import { TextAnimate } from "@/components/ui/text-animate";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-5 items-center pt-30">
      <div className="flex flex-col gap-1 items-center">
        <p className="text-low-color">Home</p>

        <div className="md:text-7xl text-4xl text-center font-medium">
          <TextAnimate animation="blurInUp" by="character" once>
            Hi, I’m Ibrahim, a
          </TextAnimate>
          <p className="flex items-center gap-1 flex-wrap justify-center">
            <TextAnimate
              delay={0.3}
              className="text-main-color"
              animation="blurInUp"
              by="character"
              once
              as={"span"}>
              creative
            </TextAnimate>
            <TextAnimate
              delay={0.6}
              animation="blurInUp"
              by="character"
              once
              as={"span"}>
              developer
            </TextAnimate>
          </p>
        </div>
      </div>

      <TextAnimate
        animation="fadeIn"
        by="word"
        as="p"
        delay={0.6}
        once
        className="text-low-color md:w-140 w-full text-center">
        I bring value to web development projects by merging technical expertise
        with creativity and aesthetics.
      </TextAnimate>
    </div>
  );
}
