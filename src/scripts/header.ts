/* eslint-disable @typescript-eslint/no-misused-promises */
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const audio = document.querySelector("audio") as HTMLAudioElement;
const icon = document.querySelector("#sound") as HTMLButtonElement;
const statusOff = document.querySelector("#sound-off") as HTMLSpanElement;
const statusOn = document.querySelector("#sound-on") as HTMLSpanElement;
const btnNavOpen = document.querySelector("#btn-nav-open") as HTMLButtonElement;
const btnNavClose = document.querySelector(
  "#btn-nav-close",
) as HTMLButtonElement;
const navMenu = document.querySelector("#nav-menu") as HTMLDivElement;
const allLinksNav = document.querySelectorAll(".link-item");
const logoEl = document.querySelector("#logo") as HTMLButtonElement;
const btnContactNavs = document.querySelectorAll("#to-contact") as NodeList;

interface PropsType {
  progress: number;
  limit: number;
  scroll: number;
  velocity: number;
  direction: string;
}

const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  gestureOrientation: "vertical",
  touchMultiplier: 2,
  infinite: false,
});

lenis.on("scroll", ({ progress }: PropsType) => {
  const elDate = document.getElementById("date") as HTMLSpanElement;
  elDate.innerHTML = `${Math.round(progress * 100)}`;
});

function raf(time: number): void {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function navMenuOpen(): void {
  navMenu.classList.toggle("tw-hidden");
  gsap.fromTo("#btn-nav-open", { opacity: 1 }, { opacity: 0, duration: 0.6 });
  gsap.fromTo(
    ".link-item",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 0.9, stagger: 0.1 },
  );
  gsap.fromTo(
    "#nav-menu",
    {
      x: "-500",
    },
    {
      x: "0",
      duration: 1,
      ease: "power4.out",
    },
  );
}

function navMenuClose(): void {
  gsap.fromTo("#btn-nav-open", { opacity: 0 }, { opacity: 1, duration: 0.6 });
  gsap.to(".link-item", {
    opacity: 0,
    x: -100,
    duration: 0.9,
    stagger: 0.1,
    immediateRender: true,
  });
  gsap.fromTo(
    "#nav-menu",
    { x: "0" },
    {
      x: "-500",
      duration: 0.8,
      ease: "power4.in",
      onComplete: () => {
        navMenu.classList.toggle("tw-hidden");
      },
    },
  );
}

// function setDate() {
//   const date = new Date();
//   const dateLocaleTime = date.toLocaleTimeString("en-US", {
//     minute: "2-digit",
//     hour: "2-digit",
//     second: "2-digit",
//   });
//   const elDate = document.getElementById("date") as HTMLSpanElement;
//   elDate.innerHTML = dateLocaleTime;
// }

btnContactNavs.forEach((btn) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1.7,
      scrollTo: { y: "#contacts" },
      ease: "power4.inOut",
    });
  });
});

logoEl.addEventListener("click", () =>
  gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power4.inOut" }),
);

btnNavOpen.addEventListener("click", (e: Event) => {
  e.preventDefault();
  navMenuOpen();
});

btnNavClose.addEventListener("click", (e: Event) => {
  e.preventDefault();
  navMenuClose();
});

allLinksNav.forEach((link) => {
  link.addEventListener("click", () => {
    navMenuClose();
  });
});

icon.addEventListener("click", async () => {
  if (audio.paused) {
    await audio.play();
    statusOff.classList.add("tw-hidden");
    statusOn.classList.remove("tw-hidden");
  } else {
    audio.pause();
    statusOff.classList.remove("tw-hidden");
    statusOn.classList.add("tw-hidden");
  }
});
