import { blockestateBaseUrl } from "@/app/projects/data/blockestate";
import { masterBaseUrl } from "@/app/projects/data/master";
import { sleekcustomImageBaseUrl } from "@/app/projects/data/sleekcustom";
import { tradeboxBaseUrl } from "@/app/projects/data/tradebox";
import { vpnwizardBaseUrl } from "@/app/projects/data/vpnwizard";

export type showCaseImagesType = {
  image: string;
  alt: string;
};

const showCaseImagesBaseUrl: string = "/images/showcase";

export const showCaseImages: showCaseImagesType[] = [
  { image: `${showCaseImagesBaseUrl}/master.png`, alt: "master" },
  { image: `${masterBaseUrl}/master2.png`, alt: "master2" },
  { image: `${masterBaseUrl}/master3.png`, alt: "master3" },
  { image: `${masterBaseUrl}/master4.png`, alt: "master4" },

  { image: `${showCaseImagesBaseUrl}/blockestate.png`, alt: "blockestate" },
  { image: `${blockestateBaseUrl}/blockestate2.png`, alt: "blockestate2" },
  { image: `${blockestateBaseUrl}/blockestate3.png`, alt: "blockestate3" },
  { image: `${blockestateBaseUrl}/blockestate4.png`, alt: "blockestate4" },
  { image: `${blockestateBaseUrl}/blockestate5.png`, alt: "blockestate5" },

  { image: `${showCaseImagesBaseUrl}/vpnwizard.png`, alt: "vpnwizard" },
  { image: `${vpnwizardBaseUrl}/vpnwizard2.png`, alt: "vpnwizard2" },
  { image: `${vpnwizardBaseUrl}/vpnwizard3.png`, alt: "vpnwizard3" },
  { image: `${vpnwizardBaseUrl}/vpnwizard4.png`, alt: "vpnwizard4" },

  { image: `${showCaseImagesBaseUrl}/sleekcustom.png`, alt: "sleekcustom" },
  { image: `${sleekcustomImageBaseUrl}/sleekcustom2.png`, alt: "sleekcustom2" },
  { image: `${sleekcustomImageBaseUrl}/sleekcustom3.png`, alt: "sleekcustom3" },
  { image: `${sleekcustomImageBaseUrl}/sleekcustom4.png`, alt: "sleekcustom4" },
  { image: `${sleekcustomImageBaseUrl}/sleekcustom5.png`, alt: "sleekcustom5" },
  { image: `${sleekcustomImageBaseUrl}/sleekcustom6.png`, alt: "sleekcustom6" },

  { image: `${showCaseImagesBaseUrl}/metadecrypt.png`, alt: "metadecrypt" },
  { image: `${showCaseImagesBaseUrl}/secufin.png`, alt: "secufin" },
  { image: `${showCaseImagesBaseUrl}/xtend.png`, alt: "xtend" },

  { image: `${tradeboxBaseUrl}/tradebox.png`, alt: "tradebox" },
];
