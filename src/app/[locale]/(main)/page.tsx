import { CardDemo } from "@/components/ui/CardDemo/CardDemo";
import AnimatedModalComp from "@/components/ui/AnimatedModalComp/AnimatedModalComp";
import AnimatedTooltipPreviewComp from "@/components/ui/AnimatedTooltipPreviewComp/AnimatedTooltipPreviewComp";
import { AppleCardsCarouse } from "@/components/ui/AppleCardsCarouse/AppleCardsCarouse";
import AuroraBackgroundComp from "@/components/ui/AuroraBackgroundComp/AuroraBackgroundComp";
import BackgroundBeamsComp from "@/components/ui/BackgroundBeamsComp/BackgroundBeamsComp";
import BackgroundBeamsWithCollisionComp from "@/components/ui/BackgroundBeamsWithCollisionComp/BackgroundBeamsWithCollision";
// import BackgroundGradientAnimationComponent from "@/components/ui/BackgroundGradientAnimationComponent/BackgroundGradientAnimationComponent";
import BackgroundLinesComp from "@/components/ui/BackgroundLines/BackgroundLinesComp";
import BentoGridComp from "@/components/ui/BentoGridComp/BentoGridComp";
import BentoGridThirdComp from "@/components/ui/BentoGridThirdComp/BentoGridThirdComp";
import CanvasRevealEffectComp from "@/components/ui/CanvasRevealEffectComp/CanvasRevealEffectComp";
import CardSpotlightComp from "@/components/ui/CardSpotlightComp/CardSpotlightComp";
import CardStackComp from "@/components/ui/CardStackComp/CardStackComp";
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
import CardDemoCpmp1 from "@/components/ui/CardDemoCpmp1/CardDemoCpmp1";
import ContentCardComp from "@/components/ui/ContentCardComp/ContentCardComp";
import HeroScrollComp from "@/components/ui/HeroScrollComp/HeroScrollComp";
import FlipWordsComp from "@/components/ui/FlipWordsComp/FlipWordsComp";
import GlobeComponent from "@/components/ui/GlobeComponent/GlobeComponent";
import GlowingBackgroundStarsCardComp from "@/components/ui/GlowingBackgroundStarsCardComp/GlowingBackgroundStarsCardComp";
import HeroParallaxComp from "@/components/ui/HeroParallaxComp/HeroParallaxComp";
import InfiniteMovingCardsComp from "@/components/ui/InfiniteMovingCardsComp/InfiniteMovingCardsComp";
import LampComp from "@/components/ui/LampComp/LampComp";
import LayoutGridCom from "@/components/ui/LayoutGridComp/LayoutGridCom";
import LinkPreviewComp from "@/components/ui/LinkPreviewComp/LinkPreviewComp";
import MeteorsComp from "@/components/ui/MeteorsComp/MeteorsComp";
import MovingBorderComp from "@/components/ui/MovingBorderComp/MovingBorderComp";
import ParallaxScrollComp from "@/components/ui/ParallaxScrollComp/ParallaxScrollComp";
import PlaceholdersAndVanishInputComp from "@/components/ui/PlaceholdersAndVanishInputComp/PlaceholdersAndVanishInputComp";

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

      <FeaturesSectionComp />
      <FileUploadComp />
      <FloatingDockComp />
      <FocusCardsComp></FocusCardsComp>
      <LensComp></LensComp>
      <GoogleGeminiEffectComp />
      <TracingBeamComp />
      <AnimatedModalComp></AnimatedModalComp>

      <AnimatedTooltipPreviewComp />

      <AuroraBackgroundComp />

      <BackgroundBeamsComp />

      {/* <BackgroundGradientAnimationComponent/> */}
      <BentoGridComp />
      <BentoGridThirdComp />

      <CanvasRevealEffectComp></CanvasRevealEffectComp>

      <CardStackComp />

      <div className="flex justify-center items-center gap-10 px-10 py-10">
        <CardDemo />
        <CardDemoCpmp1 />

        <ContentCardComp />
      </div>
      <HeroScrollComp />
      <FlipWordsComp />
      <GlobeComponent />
      <GlowingBackgroundStarsCardComp />

      <HeroParallaxComp/>

      <InfiniteMovingCardsComp/>


      <LampComp/>

      <LayoutGridCom/>
      <LinkPreviewComp/>
      <MeteorsComp/>
      <MovingBorderComp/>

      <ParallaxScrollComp/>

      <PlaceholdersAndVanishInputComp/>
    </div>
  );
};

export default page;
