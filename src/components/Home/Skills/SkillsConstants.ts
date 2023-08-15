type skillsType = {
  title: string;
  logo: string;
};

const skillsBaseUrl: string = "/images/skills";

export const skills: skillsType[] = [
  { title: "TypeScript", logo: `${skillsBaseUrl}/typescript.svg` },
  { title: "ReactJs", logo: `${skillsBaseUrl}/react.svg` },
  { title: "TailwindCSS", logo: `${skillsBaseUrl}/tailwind.svg` },
  { title: "MongoDB", logo: `${skillsBaseUrl}/mongodb.svg` },
  { title: "ExpressJs", logo: `${skillsBaseUrl}/node.svg` },
];
