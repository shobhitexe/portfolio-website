import blockestate from "./blockestate";
import master from "./master";
import sleekcustom from "./sleekcustom";
import vpnwizard from "./vpnwizard";

export type projectType = {
  head: {
    title: string;
    stack: string;
    type: string;
    time: string;
    headImage: string;
  };
  desc: { descHead: string; descPara: string };
  links: { liveSite?: string; github?: string };
  images: string[];
};

export const ProjectsData: Record<string, projectType> = {
  blockestate,
  master,
  sleekcustom,
  vpnwizard,
};
