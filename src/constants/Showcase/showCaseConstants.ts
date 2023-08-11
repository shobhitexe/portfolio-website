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
];

export const showCaseImagesRows = [
  [...showCaseImages.sort(() => Math.random() - 0.5)],
  [...showCaseImages.sort(() => Math.random() - 0.5)],
  [...showCaseImages.sort(() => Math.random() - 0.5)],
];
