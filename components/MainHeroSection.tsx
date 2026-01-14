import { TextAnimate } from "@/components/ui/text-animate";
type Props = {
  page: string;
  Toptitle: string;
  Secondtitle?: string;
  ShineyTxt: string;
  smallParagraph: string;
};
export default function MainHeroSection({
  ShineyTxt,
  page,
  smallParagraph,
  Toptitle,
  Secondtitle,
}: Props) {
  return (
    <section className="flex flex-col gap-5 items-center pt-30 w-full">
      <div className="flex flex-col gap-1 items-center">
        <p className="text-low-color">{page}</p>

        <div className="lg:text-7xl md:text-5xl text-4xl text-center font-medium">
          <TextAnimate animation="blurInUp" by="character">
            {Toptitle}
          </TextAnimate>
          <div className="flex items-center gap-0.5 text-center justify-center">
            {Secondtitle && (
              <TextAnimate
                delay={0.3}
                animation="blurInUp"
                by="character"
                as={"span"}>
                {Secondtitle}
              </TextAnimate>
            )}
            {"  "}
            <TextAnimate
              delay={0.4}
              className="text-main-color"
              animation="blurInUp"
              by="character"
              as={"span"}>
              {ShineyTxt}
            </TextAnimate>
          </div>
        </div>
      </div>

      <TextAnimate
        animation="fadeIn"
        by="word"
        as="p"
        delay={0.6}
        className="text-low-color md:w-140 w-full text-center">
        {smallParagraph}
      </TextAnimate>
    </section>
  );
}
