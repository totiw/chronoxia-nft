import { useEffect } from "react";
import constants from "../constants";
export default function Rarity() {
  useEffect(() => {
    // MEDIA QUERY
    var query = window.matchMedia("(max-width: 768px)");
    query.addEventListener("change", () => {
      constants.textAppear("rarityDots", "rarityMore", query);
    });

    const rings = document.querySelectorAll(".ring");
    constants.rarityHover(rings);
  }, []);
  return (
    <>
      <div className="rarity">
        <h2 className="reveal" delay={3}>
          Rarity
        </h2>
        <div className="container">
          <div className="left">
            {/* <h2>Crypto, Gaming, Sociality</h2> */}
            <p className="reveal" delay={1.5}>
              The Chronoxia Project is an ecosystem that includes a game project
              and a collection of NFT sets. The core asset in this game is the
              player's gear (NFT). All game gear is for better and rarer
              players. Player gear will be divided into five classes, namely
              common, uncommon, rare, very rare, and exclusive. In addition,
              these NFTs of player gear have certain additional decorations on
              the output of game resources, which also leads to a good
              decoration collection value.
              <span id="rarityDots">...</span>
            </p>

            <span id="rarityMore" className="reveal" delay={1.5}>
              <p>Gear rarity class divisions include:</p>
              <ul>
                <li>A total of 59.5% fall into the common class</li>
                <li>A total of 24.5% fall into the uncommon class</li>
                <li>A total of 9.8% fall into the rare class</li>
                <li>A total of 4.9% fall into the super rare class</li>
                <li>A total of 1.3% fall into the exclusive class</li>
              </ul>
            </span>
            <button
              onClick={() => {
                constants.readMore("rarityBtn", "rarityDots", "rarityMore");
              }}
              className="button reveal"
              id="rarityBtn"
              delay={2}
            >
              Read more
            </button>
          </div>
          <div className="right reveal" delay={5.8}>
            <div className="chart">
              <div className="chart-text">
                <h2 className="percent">100%</h2>
                <h2 className="rare">Rarity</h2>
              </div>
              {/* <Image src={char} alt="map" width={220} height={280} /> */}
              <svg
                width="350"
                height="350"
                viewBox="0 0 334 334"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M126.906 310.661C124.257 320.156 129.801 330.102 139.524 331.724C157.105 334.657 175.08 334.762 192.765 332C216.343 328.319 238.858 319.626 258.794 306.509C278.729 293.392 295.622 276.155 308.334 255.959C321.046 235.763 329.282 213.077 332.487 189.429C335.692 165.781 333.792 141.721 326.914 118.87C320.037 96.019 308.341 74.9071 292.617 56.9569C276.892 39.0066 257.502 24.635 235.755 14.8101C219.443 7.4407 202.088 2.75776 184.361 0.904869C174.557 -0.119964 166.565 7.99202 166.592 17.8499C166.619 27.7078 174.668 35.5526 184.439 36.8619C197.058 38.553 209.397 42.0749 221.058 47.343C238.156 55.0676 253.401 66.3671 265.764 80.4802C278.128 94.5933 287.323 111.192 292.73 129.159C298.138 147.125 299.632 166.042 297.112 184.634C294.592 203.227 288.116 221.064 278.122 236.943C268.127 252.822 254.846 266.374 239.172 276.687C223.498 287 205.795 293.834 187.258 296.729C174.615 298.703 161.784 298.814 149.17 297.085C139.403 295.746 129.556 301.166 126.906 310.661Z"
                  fill="#F9B27F"
                  fillOpacity={0.95}
                  className="ring"
                  onMouseEnter={constants.rarity}
                  percent={59.5}
                  rarity="Common"
                />
                <path
                  d="M18.7684 125.503C11.8175 123.557 4.55137 127.61 3.15471 134.692C-4.21675 172.068 1.39565 210.995 19.2934 244.921C37.1911 278.848 66.1518 305.458 101.163 320.475C107.797 323.321 115.244 319.611 117.562 312.776L120.714 303.482C123.032 296.646 119.334 289.285 112.763 286.298C86.4444 274.333 64.696 253.933 51.0923 228.146C37.4886 202.359 32.9296 172.891 37.9133 144.413C39.1576 137.303 35.1693 130.095 28.2184 128.149L18.7684 125.503Z"
                  fill="#51D666"
                  className="ring"
                  onMouseEnter={constants.rarity}
                  percent={24.5}
                  rarity="Uncommon"
                />
                <path
                  d="M68.6229 48.6086C64.0098 43.057 55.7287 42.2611 50.5547 47.2941C35.9388 61.5118 24.0491 78.2879 15.4765 96.7886C12.4418 103.338 15.9363 110.888 22.7027 113.401L31.5865 116.701C38.3529 119.214 45.8175 115.73 48.9904 109.246C55.2192 96.5189 63.4667 84.8818 73.4118 74.7883C78.4778 69.6466 79.2927 61.4491 74.6796 55.8975L68.6229 48.6086Z"
                  fill="#408FEB"
                  className="ring"
                  onMouseEnter={constants.rarity}
                  percent={9.8}
                  rarity="Rare"
                />
                <path
                  d="M118.257 20.9906C115.972 14.1439 108.543 10.3989 101.896 13.2128C95.1285 16.0778 88.5572 19.3865 82.2253 23.1173C76.0063 26.7814 74.5912 34.9793 78.7304 40.8927L84.1062 48.573C88.2454 54.4864 96.3677 55.8615 102.663 52.3297C106.092 50.4057 109.606 48.6365 113.193 47.0274C119.779 44.0736 123.512 36.7297 121.226 29.883L118.257 20.9906Z"
                  fill="#7C51D6"
                  className="ring"
                  onMouseEnter={constants.rarity}
                  percent={4.9}
                  rarity="Super Rare"
                />
                <path
                  d="M155.36 13.5103C154.814 6.31288 148.524 0.868325 141.391 1.9752C140.032 2.18618 138.675 2.41395 137.321 2.65847C130.217 3.94127 126.05 11.1412 127.884 18.1224L130.567 28.3342C132.239 34.6974 138.749 38.4436 145.237 37.3545C151.726 36.2653 156.656 30.5988 156.158 24.0385L155.36 13.5103Z"
                  fill="#FDB221"
                  className="ring"
                  onMouseEnter={constants.rarity}
                  percent={1.3}
                  rarity="Exclusive"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
