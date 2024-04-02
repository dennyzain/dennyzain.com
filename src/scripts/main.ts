import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const toContactEl = document.querySelector("#scroll-down") as HTMLButtonElement;

toContactEl.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1.7,
    scrollTo: { y: "#contacts" },
    ease: "power4.inOut",
  });
});

gsap.set("text.circles__text", { transformOrigin: "50% 50%" });
gsap.to("text.circles__text", {
  duration: 12,
  ease: "none",
  rotation: "+=360",
  repeat: -1,
});
const tl = gsap.timeline({});

tl.from(
  ".o1",
  {
    duration: 2,
    skewX: -30,
    yPercent: 100,
    xPercent: 50,
    ease: "power4",
    stagger: 0.1,
    blur: 10,
  },
  "<0.25",
);

tl.fromTo(
  ".o2",
  {
    skewX: 0,
    opacity: 0,
    yPercent: 100,
    xPercent: 50,
    blur: 10,
  },
  {
    skewX: -25,
    opacity: 1,
    yPercent: 0,
    xPercent: 0,
    ease: "power4",
    stagger: 0.1,
    blur: 0,
    duration: 2,
  },
  "<0.25",
);
