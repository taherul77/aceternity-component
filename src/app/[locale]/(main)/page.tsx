import { AppleCardsCarouse } from "@/components/ui/AppleCardsCarouse/AppleCardsCarouse";
import BackgroundBeamsWithCollisionComp from "@/components/ui/BackgroundBeamsWithCollisionComp/BackgroundBeamsWithCollision";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import ThreeDCard from "@/components/ui/ThreeDCard/ThreeDCard";

const page = () => {
  return (
    <div className="flex flex-col justify-center ">
      <MacbookScroll></MacbookScroll>
      {/* <div className="my-10">
        <ThreeDCard></ThreeDCard>
      </div> */}
	  <AppleCardsCarouse/>
	  <BackgroundBeamsWithCollisionComp/>
    </div>
  );
};

export default page;
