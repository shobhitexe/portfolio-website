import {
  ProjectHero,
  ProjectImages,
  ProjectInfo,
  ProjectSlider,
} from "@/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { projectType } from "../api/projects/projectsType";

export default function Project() {
  const router = useRouter();

  const [projectData, setprojectData] = useState<projectType>({
    head: {
      title: "",
      stack: "",
      type: "",
      time: "",
      headImage: "",
    },
    desc: { descHead: "", descPara: "" },
    links: { liveSite: "", github: "" },
    images: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/projects/${router.query.slug}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setprojectData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (router.query.slug) {
      fetchData();
    }
  }, [router.query.slug]);

  return (
    <div>
      <ProjectHero heroData={projectData.head} />
      <ProjectInfo desc={projectData.desc} links={projectData.links} />
      <ProjectImages images={projectData.images} />
      <ProjectSlider currPage={router.query.slug} />
    </div>
  );
}
