import { NextResponse } from "next/server";
import { projectType } from "../projectsType";

const sleekcustomImageBaseUrl: string = "/images/Projects/sleekcustom";

const sleekcustomData: projectType = {
  head: {
    title: "Sleek Custom",
    stack: "ReactJs",
    type: "Freelancing work",
    time: "July 23 - July 23",
    headImage: "bg-sleekcustom",
  },
  desc: {
    descHead:
      "IN THIS PROJECT, I HAD THE OPPORTUNITY TO REDESIGN THE WEBSITE FOR A CAR DETAILING SERVICES BUSINESS, AIMING TO HIGHLIGHT THEIR SERVICES AND OFFERINGS.",
    descPara:
      "In this project, I skillfully designed a responsive website using ReactJS and TypeScript. The website boasts seamless adaptability to diverse devices and user-friendly navigation. Incorporating interactive elements, the final product received high praise from the client, affirming the project's success in effectively showcasing their services.",
  },
  links: { liveSite: "https://www.sleekcustoms.com/" },
  images: [
    `${sleekcustomImageBaseUrl}/sleekcustom1.png`,
    `${sleekcustomImageBaseUrl}/sleekcustom2.png`,
    `${sleekcustomImageBaseUrl}/sleekcustom3.png`,
    `${sleekcustomImageBaseUrl}/sleekcustom4.png`,
    `${sleekcustomImageBaseUrl}/sleekcustom5.png`,
    `${sleekcustomImageBaseUrl}/sleekcustom6.png`,
  ],
};

export async function GET() {
  return NextResponse.json(sleekcustomData, { status: 200 });
}
