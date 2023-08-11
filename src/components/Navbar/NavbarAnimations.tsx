import { gsap } from "gsap";

export function navBarAnimation(navbarRef: HTMLDivElement) {
  gsap.fromTo(
    navbarRef,
    { opacity: 0 },
    { opacity: 1, duration: 3, delay: 0.5 }
  );
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

export function navLinksEnterAnimation(titleRef: HTMLDivElement, idx: number) {
  gsap.to(titleRef.children[idx].children[0].children[1]!, {
    translateY: 0,
    rotateX: 0,
    opacity: 1,
    duration: 0.2,
  });

  gsap.to(titleRef.children[idx].children[0].children[0]!, {
    translateY: -20,
    rotateX: 90,
    opacity: 0,
    duration: 0.2,
  });

  gsap.to(titleRef.children[idx].children[0].children[2]!, {
    opacity: 0,
    translateY: -15,
    translateX: 15,
    duration: 0.2,
  });

  gsap.to(titleRef.children[idx].children[0].children[3]!, {
    opacity: 1,
    translateY: 0,
    translateX: 0,
    duration: 0.2,
  });
}

export function navLinksExitAnimation(titleRef: HTMLDivElement, idx: number) {
  gsap.to(titleRef.children[idx].children[0].children[1]!, {
    translateY: 20,
    rotateX: -90,
    opacity: 0,
    duration: 0.2,
  });

  gsap.to(titleRef.children[idx].children[0].children[0]!, {
    translateY: 0,
    rotateX: 0,
    opacity: 1,
    duration: 0.2,
  });

  gsap.to(titleRef.children[idx].children[0].children[2]!, {
    opacity: 1,
    translateY: 0,
    translateX: 0,
    duration: 0.2,
  });

  gsap.to(titleRef.children[idx].children[0].children[3]!, {
    opacity: 0,
    translateY: 15,
    translateX: -15,
    duration: 0.2,
  });
}

export function navHeadingOpenAnimation(
  navHeadingRef: HTMLDivElement,
  isNavOpen: boolean
) {
  const timeline = gsap.timeline();

  if (isNavOpen) {
    timeline
      .to(navHeadingRef.children[0]!, {
        translateY: -15,
        opacity: 0,
        duration: 0.01,
        rotateX: 90,
      })
      .to(navHeadingRef.children[1]!, {
        translateY: 0,
        opacity: 1,
        duration: 0.01,
        rotateX: 0,
      });
  } else {
    timeline
      .to(navHeadingRef.children[1]!, {
        translateY: 15,
        opacity: 0,
        duration: 0.01,
        rotateX: 90,
      })
      .to(navHeadingRef.children[0]!, {
        translateY: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.01,
      });
  }
}

export function navBarSliderOpenAnimation(
  navBarRef: HTMLDivElement,
  titleRef: HTMLDivElement
) {
  const timeline = gsap.timeline();

  timeline.fromTo(
    navBarRef,
    { opacity: 0, translateY: -200, height: "auto" },
    {
      opacity: 1,
      translateY: 0,
      duration: 0.5,
      height: "100%",
    }
  );

  Array.from(titleRef.children!).map((title, idx) => {
    gsap.fromTo(
      title.children[0].children[0],
      { translateY: 50, opacity: 0 },
      { opacity: 1, translateY: 0, duration: idx * 0.2 + 0.2, delay: 0.4 }
    );
  });
}
