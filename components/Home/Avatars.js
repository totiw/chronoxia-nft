import Image from "next/image";
import char from "../../public/assets/char.webp";
import char1 from "../../public/assets/char1.webp";
import char2 from "../../public/assets/dragon-slayer.webp";
export default function Avatars() {
  return (
    <>
      <div className="avatars">
        <h2 className="reveal" delay={3}>
          Avatars
        </h2>

        <div className="overview-container">
          <div className="overview">
            <div className="overview-item reveal">
              <Image src={char} alt="map" delay={3} width={200} height={280} />
            </div>
            <div className="overview-item reveal">
              <Image src={char1} alt="map" delay={4} width={230} height={280} />
            </div>
            <div className="overview-item reveal">
              <Image src={char2} alt="map" delay={5} />
            </div>
            <div className="overview-item reveal">
              <Image src={char} alt="map" delay={6} width={200} height={280} />
            </div>
            <div className="overview-item reveal">
              <Image src={char1} alt="map" delay={7} width={230} height={280} />
            </div>
            <div className="overview-item reveal">
              <Image src={char2} alt="map" delay={8} />
            </div>
          </div>
          <div className="overview">
            <div className="overview-item reveal">
              <Image src={char} alt="map" delay={3} width={200} height={280} />
            </div>
            <div className="overview-item reveal">
              <Image src={char1} alt="map" delay={4} width={230} height={280} />
            </div>
            <div className="overview-item reveal">
              <Image src={char2} alt="map" delay={5} />
            </div>
            <div className="overview-item reveal">
              <Image src={char} alt="map" delay={6} width={200} height={280} />
            </div>
            <div className="overview-item reveal">
              <Image src={char1} alt="map" delay={7} width={230} height={280} />
            </div>
            <div className="overview-item reveal">
              <Image src={char2} alt="map" delay={8} />
            </div>
          </div>
          {/* <div className="overview">
            <div className="overview-item reveal">
              <Image src={char} alt="map" width={220} height={280} delay={3} />
            </div>
            <div className="overview-item reveal">
              <Image src={char} alt="map" width={220} height={280} delay={4} />
            </div>
            <div className="overview-item reveal">
              <Image src={char} alt="map" width={220} height={280} delay={5} />
            </div>
            <div className="overview-item reveal">
              <Image src={char} alt="map" width={220} height={280} delay={6} />
            </div>
            <div className="overview-item reveal">
              <Image src={char} alt="map" width={220} height={280} delay={7} />
            </div>
            <div className="overview-item reveal">
              <Image src={char} alt="map" width={220} height={280} delay={8} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
