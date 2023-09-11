import type { NextApiRequest, NextApiResponse } from "next";
import { projectType } from "./projectsType";

const masterBaseUrl: string = "/images/Projects/master";

const masterData: projectType = {
  head: {
    title: "Master",
    stack: "ReactJs",
    type: "Freelancing work",
    time: "June 2023 - June 2023",
    headImage: "master",
  },
  desc: {
    descHead:
      "I CREATED THE FRONT-END FOR MASTER MEMECOIN IN REACTJS, FEATURING SLEEK TAILWIND STYLING AND DYNAMIC ANIMATIONS POWERED BY FRAMER MOTION",
    descPara:
      "I developed Master MemeCoin's frontend using ReactJS, employing Tailwind for polished styling and Framer Motion for lively animations. It's a visually captivating and user-friendly crypto coin interface.",
  },
  links: { github: "https://github.com/shobhitexe/Master-memecoin" },
  images: [
    `${masterBaseUrl}/master1.png`,
    `${masterBaseUrl}/master2.png`,
    `${masterBaseUrl}/master3.png`,
    `${masterBaseUrl}/master4.png`,
  ],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json(masterData);
}
