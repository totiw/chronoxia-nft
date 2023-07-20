import Image from "next/image";
import map from "../../public/assets/map.webp";
import char from "../../public/assets/dragon-slayer.webp";
export default function Seasons() {
  return (
    <>
      <div className="seasons">
        <div className="char">
          <Image src={char} alt="map" className="reveal" />
        </div>
        <h2 className="reveal" delay={3}>
          Map Season
        </h2>
        <div className="container">
          <div className="cards">
            <div className="card reveal" delay={5}>
              <Image src={map} alt="map" width={360} height={280} />
              <h2 className="card-title">Season 1</h2>
              <p>Medieval</p>
            </div>
            <div className="card reveal" delay={5.8}>
              <Image src={map} alt="map" />
              <h2 className="card-title">Season 2</h2>
              <p>Unknown</p>
              <div>?</div>
            </div>
            <div className="card reveal" delay={6.5}>
              <Image src={map} alt="map" />
              <h2 className="card-title">Season 3</h2>
              <p>Unknown</p>
              <div>?</div>
            </div>
            <div className="card reveal" delay={7}>
              <Image src={map} alt="map" />
              <h2 className="card-title">Season 4</h2>
              <p>Unknown</p>
              <div>?</div>
            </div>
            <div className="card reveal" delay={8}>
              <Image src={map} alt="map" />
              <h2 className="card-title">Season 5</h2>
              <p>Unknown</p>
              <div>?</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
