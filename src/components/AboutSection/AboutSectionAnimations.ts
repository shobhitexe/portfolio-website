import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function paragraphsRevealAnimation(paraRef: HTMLDivElement) {
  gsap.registerPlugin(ScrollTrigger);
  Array.from(paraRef.children!).map((para, idx) => {
    if (idx == 2) return;

    gsap.fromTo(
      para,
      { opacity: 0, translateY: 150 },
      {
        opacity: 1,
        translateY: 0,

        scrollTrigger: {
          trigger: para,
          scrub: 2,
          start: "10% bottom",
          end: "30% bottom",
        },
      }
    );
  });
}

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
