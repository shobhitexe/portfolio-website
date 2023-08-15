type selectedWorksType = { title: string; image: string; alt: string };

const selectedWorksBaseUrl: string = "/images/showcase";

export const selectedWorks: selectedWorksType[] = [
  {
    title: "SLEEK CUSTOM",
    image: `${selectedWorksBaseUrl}/sleekcustom.png`,
    alt: "sleekcustom",
  },
  {
    title: "VPN WIZARD",
    image: `${selectedWorksBaseUrl}/vpnwizard.png`,
    alt: "vpnwizard",
  },
];
