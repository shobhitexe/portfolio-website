import type { NextApiRequest, NextApiResponse } from "next";
import { projectType } from "./projectsType";

const blockestateBaseUrl: string = "/images/Projects/blockestate";

const blockestateData: projectType = {
  head: {
    title: "Blockestate",
    stack: "ReactJs/Solidity",
    type: "College Major Project",
    time: "Feb 2023 - Apr 2023",
    headImage: "blockestate",
  },
  desc: {
    descHead:
      "BLOCKESTATE, IS MY COLLEGE MINOR PROJECT, IT HARNESSES BLOCKCHAIN FOR DECENTRALIZED REAL ESTATE TRANSACTIONS, ELIMINATING INTERMEDIARIES, ENHANCING EFFICIENCY, TRUST, AND COST-EFFECTIVENESS.",
    descPara:
      "BlockEstate, my college minor project, is a real estate platform developed using JavaScript, React, Solidity, Hardhat, and Tailwind CSS. This innovative project focuses on blockchain technology to create a decentralized system for secure and transparent property transactions. By combining these technologies",
  },
  links: {
    liveSite: "https://blockestate.tech/",
    github: "https://github.com/shobhitexe/BlockEstate",
  },
  images: [
    `${blockestateBaseUrl}/blockestate1.png`,
    `${blockestateBaseUrl}/blockestate2.png`,
    `${blockestateBaseUrl}/blockestate3.png`,
    `${blockestateBaseUrl}/blockestate4.png`,
    `${blockestateBaseUrl}/blockestate5.png`,
    `${blockestateBaseUrl}/blockestate6.png`,
  ],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json(blockestateData);
}
