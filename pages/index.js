import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Hero = dynamic(() => import("../components/Home/Hero"));
const About = dynamic(() => import("../components/Home/About"));
const Vision = dynamic(() => import("../components/Home/Vision"));
const Trailer = dynamic(() => import("../components/Home/Trailer"));
const Seasons = dynamic(() => import("../components/Home/Seasons"));
const Avatars = dynamic(() => import("../components/Home/Avatars"));
const Rarity = dynamic(() => import("../components/Home/Rarity"));
const Roadmap = dynamic(() => import("../components/Home/Roadmap"));
export default function Home() {
  const buttonPlay = useRef();
  useEffect(() => {
    var media = window.matchMedia("(min-width: 1200px)");

    document.addEventListener("mousemove", parallaxMouse);
    function parallaxMouse(e) {
      this.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("speed");
        const scale = layer.getAttribute("scale");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        if (media.matches) {
          layer.style.transform = `scale(${scale}) translateX(${x}px) translateY(${y}px)`;
        }
      });
    }

    document.querySelectorAll(".nav-link").forEach((nav) => {
      nav.addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.target.getAttribute("href");
        let scrollTarget = document.getElementsByClassName(
          target.replace("/", "")
        );
        window.scrollTo({
          top: scrollTarget[0].offsetTop - 80,
          behavior: "smooth",
        });
        // target.scrollIntoView({ behavior: "smooth" });
      });
    });

    window.addEventListener("scroll", () => {
      const target = document.querySelectorAll(".scroll");

      let jarakAtas = window.pageYOffset;

      // Parallax vertikal
      for (let index = 0; index < target.length; index++) {
        let topOffset = jarakAtas * target[index].getAttribute("ratey");
        let leftOffset = jarakAtas * target[index].getAttribute("ratex");
        target[
          index
        ].style.transform = `translate3d(${leftOffset}px, ${topOffset}px, 0px)`;
      }

      // REVEAL ELEMENT
      let reveals = document.querySelectorAll(".reveal");

      let windowHeight = window.innerHeight;
      for (let i = 0; i < reveals.length; i++) {
        const delay = reveals[i].getAttribute("delay");
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
          setTimeout(() => {
            reveals[i].classList.add("active");
          }, delay * 100);
        }
      }
    });
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Vision />
      <Trailer buttonPlay={buttonPlay} />
      <Seasons />
      <Avatars />
      <Rarity />
      <Roadmap />
    </>
  );
}
