//CSSの読み込み
import "./scss/style.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

const overlay = document.querySelector(".overlay");
console.log(overlay);

tl.to(".overlay", {
  scrollTrigger: {
    trigger: ".about",
    start: `top top`,
    endTrigger: ".aboutEndText",
    end: "center center",
    scrub: 0.5,
    markers: true,
    // pin: true,
    // onEnter: () => {
    //   const overlay = document.querySelector(".overlay");
    //   overlay.style.position = "fixed";
    // },
  },
  width: "30%",
  height: "30%",
  borderRadius: "32px",
});

gsap.to(".overlay", {
  scrollTrigger: {
    trigger: ".aboutArea",
    start: "100px top",
    end: "100px top",
    markers: true,
    onEnter: function () {
      console.log("onEnter");
      // overlay.classList.add("absolute");
      overlay.style.position = "absolute";
    },
    onEnterBack: function () {
      console.log("onEnterBack");
      // overlay.classList.remove("absolute");
      overlay.style.position = "fixed";
    },
  },
});
