// import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "../../public/assets/chrx-banner.webp";
export default function Trailer() {
  return (
    <>
      <div className="trailer">
        <h2 className="outline scroll" ratex={0} ratey={0.115} delay={6}>
          CHRONOXIA
        </h2>
        <div className="container">
          <div className="left">
            <h2 className="reveal" delay={3}>
              CHRONOXIA
            </h2>
            <p className="reveal" delay={5}>
              Chronoxia is a gaming ecosystem built on a blockchain platform and
              includes a collection of NFT sets. Players get games by gathering,
              exploring, communicating with other players, destroying BOSS, etc.
              Players can develop by exploring and forging their items to be
              superior to other players. Players will start in Chronoxia and
              gather with other players. Before the game starts, each player can
              communicate with each other to explore or fight in which universe.
              Each universe will later become a season to explore.
            </p>
          </div>
          <div className="right reveal" delay={5}>
            <Link href="https://youtu.be/xGIrwF8mNU8" prefetch={false}>
              <a target="_blank" aria-label="trailer">
                <div className="btn">
                  <div
                    className="play"
                    // onClick={trailerVideo}
                  >
                    <span style={{ $i: 1 }}></span>
                    <span style={{ $i: 2 }}></span>
                    <span style={{ $i: 3 }}></span>
                    <span style={{ $i: 4 }}></span>
                    <span style={{ $i: 5 }}></span>
                  </div>
                </div>
              </a>
            </Link>
            <Image src={banner} alt="chrx-banner" className="banner" />
          </div>
        </div>
      </div>
    </>
  );
}
