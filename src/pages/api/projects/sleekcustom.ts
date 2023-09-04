import type { NextApiRequest, NextApiResponse } from "next";
import { projectType } from "./projectsType";

const sleekcustomData: projectType = {
  head: {
    title: "Sleek Custom",
    stack: "ReactJs",
    type: "Freelancing work",
    time: "July 23 - July 23",
    headImage: "sleekcustom",
  },
  desc: {
    descHead:
      "IN THIS PROJECT, I HAD THE OPPORTUNITY TO REDESIGN THE WEBSITE FOR A CAR DETAILING SERVICES BUSINESS, AIMING TO HIGHLIGHT THEIR SERVICES AND OFFERINGS.",
    descPara:
      "In a freelance project, I skillfully designed a responsive website using ReactJS and TypeScript. The website boasts seamless adaptability to diverse devices and user-friendly navigation. Incorporating interactive elements, the final product received high praise from the client, affirming the project's success in effectively showcasing their services.",
  },
  links: { liveSite: "https://www.sleekcustoms.com/" },
  images: [],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json(sleekcustomData);
}
