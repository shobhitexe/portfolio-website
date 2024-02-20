import {
  ProjectHero,
  ProjectImages,
  ProjectInfo,
  ProjectSlider,
} from "@/components";

import { ProjectsData } from "../data/ProjectsData";
import { redirect } from "next/navigation";

export default async function page({ params }: { params: { name: string } }) {
  const data = ProjectsData[params.name];

  if (!data) {
    redirect("/404");
  }

  return (
    <div>
      <ProjectHero heroData={data.head} />
      <ProjectInfo desc={data.desc} links={data.links} />
      <ProjectImages images={data.images} />
      <ProjectSlider currPage={params.name} />
    </div>
  );
}
