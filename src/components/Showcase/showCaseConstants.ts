export type showCaseImagesType = {
  image: string;
  alt: string;
};

const showCaseImagesBaseUrl: string = "/images/showcase";

export const showCaseImages: showCaseImagesType[] = [
  { image: `${showCaseImagesBaseUrl}/master.png`, alt: "master" },
  { image: `${showCaseImagesBaseUrl}/blockestate.png`, alt: "blockestate" },
  { image: `${showCaseImagesBaseUrl}/vpnwizard.png`, alt: "vpnwizard" },
  { image: `${showCaseImagesBaseUrl}/sleekcustom.png`, alt: "sleekcustom" },
  { image: `${showCaseImagesBaseUrl}/metadecrypt.png`, alt: "metadecrypt" },
];
