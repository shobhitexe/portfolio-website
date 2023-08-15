type expertiseCardsType = {
  title: string;
  image: string;
  tags: string[];
  desc: string;
};

export const expertiseCards: expertiseCardsType[] = [
  {
    title: "React JS",
    image: "/images/skills/react.svg",
    tags: ["Dynamic", "Versatile", "Responsive"],
    desc: "I use ReactJS to develop my website, leveraging its component-based architecture. This approach streamlines development by enabling modular design and simplified maintenance.",
  },
  {
    title: "Typescript",
    image: "/images/skills/typescript.svg",
    tags: ["Typed", "Robust", "Productive"],
    desc: "I use TypeScript for robust development. It brings strong typing, better tooling, and improved collaboration, resulting in higher code quality and efficiency.",
  },
  {
    title: "Tailwind CSS",
    image: "/images/skills/tailwind.svg",
    tags: ["Utility-first", "Customizable", "Modular"],
    desc: "I use Tailwind CSS to construct the website. Its utility classes expedite styling, ensuring consistency and responsive design, ultimately enhancing development efficiency and aesthetics.",
  },
  {
    title: "Mongo DB",
    image: "/images/skills/mongodb.svg",
    tags: ["NoSQL", "Scalable", "Document-oriented"],
    desc: "MongoDB enhances data management. Its flexible, NoSQL structure enables dynamic schema updates, horizontal scaling, and efficient querying, fostering agile development and seamless scalability for applications.",
  },
  {
    title: "Express JS",
    image: "/images/skills/node.svg",
    tags: ["Minimalistic", "Flexible", "Fast"],
    desc: "Express.js empowers backend development with its minimalist framework. It eases route handling, middleware integration, and API creation, resulting in streamlined development and efficient server-side processes.",
  },
];
