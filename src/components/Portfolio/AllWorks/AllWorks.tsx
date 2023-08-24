import WorksGrid from "@/components/UI/WorksGrid/WorksGrid";
import { AllWorksData } from "./AllWorksConstants";
import { useEffect, useState } from "react";

export default function AllWorks() {
  return (
    <div className="w-[90%] pb-24 mx-auto">
      <WorksGrid worksArray={AllWorksData} />
    </div>
  );
}
