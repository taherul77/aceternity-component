import { AppleCardsCarouse } from "@/components/ui/AppleCardsCarouse/AppleCardsCarouse";
import BackgroundBeamsWithCollisionComp from "@/components/ui/BackgroundBeamsWithCollisionComp/BackgroundBeamsWithCollision";
import BackgroundLinesComp from "@/components/ui/BackgroundLines/BackgroundLinesComp";
import CardSpotlightComp from "@/components/ui/CardSpotlightComp/CardSpotlightComp";
import CompareAtuoplay from "@/components/ui/CompareAtuoplay/CompareAtuoplay";
import CompareComp from "@/components/ui/CompareComp/CompareComp";
import CoverSpeed from "@/components/ui/CoverSpeed/CoverSpeed";
import ExpandableCardComp from "@/components/ui/ExpandableCardComp/ExpandableCardComp";
import ExpandableCardGrid from "@/components/ui/ExpandableCardGrid/ExpandableCardGrid";
import FeaturesSectionComp from "@/components/ui/FeaturesSectionComp/FeaturesSectionComp";
import FileUploadComp from "@/components/ui/FileUploadComp/FileUploadComp";
import FloatingDockComp from "@/components/ui/FloatingDockComp/FloatingDockComp";
import FocusCardsComp from "@/components/ui/FocusCardsComp/FocusCardsComp";
import GoogleGeminiEffectComp from "@/components/ui/GoogleGeminiEffectComp/GoogleGeminiEffectComp";
import LensComp from "@/components/ui/LensComp/LensComp";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import ThreeDCard from "@/components/ui/ThreeDCard/ThreeDCard";
import TracingBeamComp from "@/components/ui/TracingBeamComp/TracingBeamComp";

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
      <div className="flex flex-col justify-center items-center py-5">
        <CompareAtuoplay></CompareAtuoplay>
        <CoverSpeed />
      </div>
      <ExpandableCardComp />
      <ExpandableCardGrid />


      <FeaturesSectionComp/>
      <FileUploadComp/>
      <FloatingDockComp/>
      <FocusCardsComp></FocusCardsComp>
      <LensComp></LensComp>
      <GoogleGeminiEffectComp/>
      <TracingBeamComp/>
    </div>
  );
};

export default page;
