import ExpertiseLeft from "./ExpertiseLeft";
import ExpertiseRight from "./ExpertiseRight";

export default function Expertise() {
  return (
    <div className="bg-whiteShade">
      <div className="flex md:flex-row flex-col py-28 w-[90%] mx-auto justify-between">
        <ExpertiseLeft />
        <ExpertiseRight />
      </div>
    </div>
  );
}
