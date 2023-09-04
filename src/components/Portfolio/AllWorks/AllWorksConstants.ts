export type AllWorksType = {
  title: string;
  image: string;
  alt: string;
};

const WorksBaseUrl: string = "/images/showcase";

export const AllWorksData: AllWorksType[] = [
  {
    title: "SLEEK CUSTOM",
    image: `${WorksBaseUrl}/sleekcustom.png`,
    alt: "sleekcustom",
  },
  {
    title: "VPN WIZARD",
    image: `${WorksBaseUrl}/vpnwizard.png`,
    alt: "vpnwizard",
  },
  {
    title: "BlockEstate",
    image: `${WorksBaseUrl}/blockestate.png`,
    alt: "blockestate",
  },
  {
    title: "Master memecoin",
    image: `${WorksBaseUrl}/master.png`,
    alt: "master",
  },
  {
    title: "MetaDecrypt",
    image: `${WorksBaseUrl}/metadecrypt.png`,
    alt: "metadecrypt",
  },
];
