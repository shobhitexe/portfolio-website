import { gsap } from "gsap";

export function pageHeadRevealAnimation(heroParaRef: HTMLDivElement) {
  gsap.fromTo(
    heroParaRef,
    { opacity: 0 },
    { opacity: 1, duration: 3, delay: 1 }
  );
}
