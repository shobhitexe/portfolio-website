import { gsap } from "gsap";

export function navbarAnimation(navBarRef: HTMLDivElement) {
  gsap.fromTo(
    navBarRef,
    { width: 0, scale: 0, opacity: 0 },
    { width: "auto", scale: 1, duration: 1, opacity: 1 }
  );
}

export function navRouteAnimation(navHeadingRef: HTMLDivElement) {
  gsap.fromTo(
    navHeadingRef.children[0].children[1],
    { translateY: 10, opacity: 0, rotateX: -10 },
    { translateY: 0, opacity: 1, rotateX: 0 }
  );
}

export function navHeadingAnimation(navHeadingRef: HTMLDivElement) {
  const arr = navHeadingRef.children[1].children;

  Array.from(arr).map((head, idx) => {
    gsap.fromTo(
      head,
      { opacity: 0, translateX: -idx * 10 },
      { opacity: 1, translateX: 0, duration: idx * 0.1 }
    );
  });
}
