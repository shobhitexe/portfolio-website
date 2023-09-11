import type { NextApiRequest, NextApiResponse } from "next";
import { projectType } from "./projectsType";

const vpnwizardBaseUrl: string = "/images/Projects/vpnwizard";

const vpnwizardData: projectType = {
  head: {
    title: "Vpn Wizard",
    stack: "HTML/CSS/JS",
    type: "Freelancing work",
    time: "Mar 2023 - Mar 2023",
    headImage: "vpnwizard",
  },
  desc: {
    descHead:
      "I DESIGNED A SLEEK AFFILIATE VPN PRODUCT LANDING PAGE USING HTML, CSS, AND JAVASCRIPT. IT'S USER-FRIENDLY, FEATURES STRATEGIC POPUP ADS, AND SATISFIED THE CLIENT. THE PAGE BOOSTS CLICK-THROUGH RATES AND CONVERSIONS EFFECTIVELY.",
    descPara:
      "I crafted a polished landing page for my client's affiliate VPN products, employing HTML, CSS, and JavaScript. The result is a seamless and visually appealing design that captivates visitors. I strategically integrated JavaScript to introduce popup ads, elevating the promotional aspect of the page. My client expressed contentment with the final product, commending its aesthetics and functionality. This landing page now operates as a successful platform for showcasing affiliate VPN products, leading to notable increases in click-through rates and conversions. It effectively combines style and substance to engage users and drive business growth.",
  },
  links: { liveSite: "https://vpnwizard.co/" },
  images: [
    `${vpnwizardBaseUrl}/vpnwizard1.png`,
    `${vpnwizardBaseUrl}/vpnwizard2.png`,
    `${vpnwizardBaseUrl}/vpnwizard3.png`,
    `${vpnwizardBaseUrl}/vpnwizard4.png`,
  ],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json(vpnwizardData);
}
