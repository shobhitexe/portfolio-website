import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function imageRevealAnimation(imageRef: HTMLDivElement) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    imageRef,
    { scale: 0 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: imageRef,
        scrub: 2,
        start: "10% bottom",
        end: "30% bottom",
      },
    }
  );
}
