import { gsap } from "gsap";

export function navBarAnimation(navbarRef: HTMLDivElement) {
  gsap.fromTo(navbarRef, { opacity: 0 }, { opacity: 1, duration: 3 });
}

export function navOpenBtnAnimation(
  navBtnRef: HTMLDivElement,
  isNavOpen: boolean
) {
  if (isNavOpen) {
    [0, 1].map((num) => {
      gsap.to(navBtnRef.children[num]!, {
        translateY: num === 0 ? -2 : 2,
        duration: 0.5,
      });
    });
  } else {
    [0, 1].map((num) => {
      gsap.to(navBtnRef.children[num]!, {
        translateY: 0,
        duration: 0.5,
      });
    });
  }
}
