import { projectType } from "@/app/api/projects/projectsType";
import {
  ProjectHero,
  ProjectImages,
  ProjectInfo,
  ProjectSlider,
} from "@/components";

import { redirect } from "next/navigation";

async function fetchProjectData(name: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/projects/${name}`, {
      method: "GET",
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return redirect("/404");
  }
}

export default async function page({ params }: { params: { name: string } }) {
  const data: projectType = await fetchProjectData(params.name);

  return (
    <div>
      <ProjectHero heroData={data.head} />
      <ProjectInfo desc={data.desc} links={data.links} />
      <ProjectImages images={data.images} />
      <ProjectSlider currPage={params.name} />
    </div>
  );
}
