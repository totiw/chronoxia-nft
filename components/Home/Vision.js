import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import char from "../../public/assets/char1.webp";
import wing from "../../public/assets/wing.webp";
import constants from "../constants";

export default function Vision() {
  useEffect(() => {
    var query = window.matchMedia("(max-width: 768px)");
    query.addEventListener("change", () => {
      constants.textAppear("visionDots", "visionMore", query);
    });
  }, []);
  return (
    <>
      <div className="wing">
        <Image
          src={wing}
          alt="map"
          // width={1275}
          // height={832}
          className="reveal"
          delay={3}
        />
      </div>
      <div className="vision">
        <h2 className="reveal" delay={2}>
          Vision
        </h2>
        <h2 className="outline scroll" ratex={0} ratey={0.115} delay={3}>
          CHRONOXIA
        </h2>
        <div className="container">
          <div className="left">
            <h2 className="reveal" delay={3}>
              NFT, Game, Society
            </h2>
            <p className="reveal" delay={4}>
              Chronoxia is a game with Role Playing Game (RPG) model. While it
              looks like a typical online multiplayer game, Chronoxia utilizes
              blockchain technology to create inter player transaction, players
              can trade items and weapons while also be able to own the
              authentic copy of the Digital Asset this is achievable thanks to
              the Blockchain technology specifically NFT (Non-Fungible Token).
              <span id="visionDots">...</span>
            </p>

            <span id="visionMore">
              <p className="reveal" delay={4.5}>
                In the future version of MyRichFarm, players could control their
                own 3D characters to interact with others. They can build
                families with someone you love , go to clubs with your mates,
                mine for tokens and make friends all around the world. Players
                can not only applaud the beautiful NFT decorations of others,
                but also display their own NFTs and personal value on the stage
                . The player who has the largest group of fans could have
                substantial rewards. And meanwhile, he/she is qualified to
                participate the designing and presell of new NFTs.
              </p>
            </span>
            <button
              onClick={() => {
                constants.readMore("visionBtn", "visionDots", "visionMore");
              }}
              className="button visionBtn reveal"
              id="visionBtn"
              delay={5}
            >
              Read more
            </button>
            <Link
              href="https://drive.google.com/file/d/105yuhy4rbio2nszKjN9MJiQDYO9LByp8/view?usp=sharing"
              prefetch={false}
            >
              <a target="_blank" aria-label="whitepaper">
                <span>White Paper</span>
              </a>
            </Link>
          </div>
          <div className="right reveal" delay={5}>
            <div className="char layer" speed={1} scale={1.38}>
              <Image src={char} alt="map" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
