import { gsap } from "gsap";

export function heroRevealAnimation(
  buttonRef: HTMLDivElement,
  heroParaRef: HTMLDivElement
) {
  gsap.fromTo(
    buttonRef,
    { opacity: 0 },
    { opacity: 1, duration: 3, delay: 0.5 }
  );
  gsap.fromTo(
    heroParaRef,
    { opacity: 0 },
    { opacity: 1, duration: 3, delay: 1 }
  );
}
