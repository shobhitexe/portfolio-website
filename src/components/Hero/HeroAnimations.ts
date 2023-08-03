import { gsap } from "gsap";

export function animatePortfolioButtonIn(
  portfolioButtonDiv: HTMLHeadingElement
) {
  gsap.fromTo(
    portfolioButtonDiv,
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2, ease: "elastic.out(0.5, 0.4)" }
  );
}

export function animateResumeDivIn(resumeDiv: HTMLDivElement) {
  gsap.fromTo(
    resumeDiv,
    { scale: 0.9, opacity: 0, rotate: 40 },
    {
      scale: 1,
      opacity: 1,
      rotate: 0,
      duration: 1,
    }
  );
}

export function animatePortfolioButtonHover(
  portfolioButtonDiv: HTMLHeadingElement,
  portfolioPara: HTMLParagraphElement
) {
  const timeline = gsap.timeline();

  timeline
    .to(portfolioButtonDiv, {
      width: "100%",
      height: "100%",
      duration: 0.5,
    })
    .fromTo(
      portfolioPara,
      {
        scale: 0.9,
        translateX: 50,
        opacity: 0,
      },
      {
        display: "flex",
        scale: 1,
        duration: 0.5,
        opacity: 1,
        translateX: 0,
      }
    );
}

// export function animatePortfolioButtonLeave(
//   portfolioButtonDiv: HTMLHeadingElement,
//   portfolioPara: HTMLParagraphElement
// ) {
//   const timeline = gsap.timeline();
//   timeline
//     .to(portfolioPara, { display: "none", opacity: 0 })
//     .to(portfolioButtonDiv, { width: "auto", height: "auto" });
// }

export function animateResumeButtonHover(
  resumeButton: HTMLDivElement,
  resumeDiv: HTMLDivElement
) {
  const timeline = gsap.timeline();

  timeline.to(resumeDiv, { rotate: -12, duration: 0.5 }).to(resumeButton, {
    height: "auto",
    width: "auto",
    duration: 0.4,
  });

  gsap.to(resumeButton, { rotate: 12, duration: 0.2 });
}

export function animateGitDiv(gitImage: Element, gitText: Element) {
  const timeline = gsap.timeline();

  timeline.to(gitText, { opacity: 0, display: "none" }).to(gitImage, {
    width: "80%",
    height: "80%",
  });
}
