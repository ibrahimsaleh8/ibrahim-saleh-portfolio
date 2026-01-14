"use client";
import { TextAnimate } from "../ui/text-animate";
import TeachnologeisCard from "./TeachnologeisCard";

export default function TechnologySection() {
  return (
    <div className="py-16 flex flex-col gap-10 items-center w-full">
      <div className="flex items-center justify-center text-center flex-col lg:text-6xl md:text-5xl text-4xl gap-0.5">
        <TextAnimate animation="blurIn" by="character" as={"p"}>
          Some of the techs I like to
        </TextAnimate>
        <TextAnimate
          animation="blurIn"
          by="character"
          as={"p"}
          className="text-main-color"
          delay={0.3}>
          work with
        </TextAnimate>
      </div>

      <TeachnologeisCard />
    </div>
  );
}
