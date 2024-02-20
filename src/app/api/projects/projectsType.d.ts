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
