import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function scrollShowcaseAnimation(gridRef: HTMLDivElement) {
  gsap.registerPlugin(ScrollTrigger);

  Array.from(gridRef.children!).map((element, idx) => {
    gsap.fromTo(
      element,
      { translateY: idx === 1 ? -500 : 0 },
      {
        translateY: idx === 1 ? 0 : -700,
        duration: 5,
        ease: "power1.out",
        scrollTrigger: {
          scrub: 5,
        },
      }
    );
  });
}
