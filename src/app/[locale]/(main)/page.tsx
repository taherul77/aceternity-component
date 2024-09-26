import { AppleCardsCarouse } from "@/components/ui/AppleCardsCarouse/AppleCardsCarouse";
import BackgroundBeamsWithCollisionComp from "@/components/ui/BackgroundBeamsWithCollisionComp/BackgroundBeamsWithCollision";
import BackgroundLinesComp from "@/components/ui/BackgroundLines/BackgroundLinesComp";
import CardSpotlightComp from "@/components/ui/CardSpotlightComp/CardSpotlightComp";
import CompareAtuoplay from "@/components/ui/CompareAtuoplay/CompareAtuoplay";
import CompareComp from "@/components/ui/CompareComp/CompareComp";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import ThreeDCard from "@/components/ui/ThreeDCard/ThreeDCard";

const page = () => {
  return (
    <div className="flex flex-col justify-center ">
      <MacbookScroll></MacbookScroll>
      <div className="my-10">
        <ThreeDCard></ThreeDCard>
      </div>
      <AppleCardsCarouse />
      <BackgroundBeamsWithCollisionComp />
      <BackgroundLinesComp />
      <div className="flex justify-center w-full mx-auto gap-10">
        <CardSpotlightComp></CardSpotlightComp>
        <CompareComp></CompareComp>
      </div>
      <div className="flex justify-center items-center py-5">
        <CompareAtuoplay></CompareAtuoplay>
      </div>
    </div>
  );
};

export default page;
