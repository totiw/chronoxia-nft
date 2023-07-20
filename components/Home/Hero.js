import Image from "next/image";
import colloseum1 from "../../public/assets/colloseum1.webp";
import colloseum2 from "../../public/assets/colloseum2.webp";
import awan1 from "../../public/assets/awan1.webp";
import awan2 from "../../public/assets/awan2.webp";
import awan3 from "../../public/assets/awan3.webp";
import awan4 from "../../public/assets/awan4.webp";
import awan5 from "../../public/assets/awan5.webp";
import burung1 from "../../public/assets/burung1.webp";
import burung2 from "../../public/assets/burung2.webp";
export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="birds">
          <div className="birds-left scroll" ratex={0.3} ratey={-0.1}>
            <Image src={burung1} fill="true" alt="bird" priority />
          </div>
          <div className="birds-right scroll" ratex={-0.15} ratey={0}>
            <Image src={burung2} fill="true" alt="bird" priority />
          </div>
        </div>
        <div className="clouds">
          <div className="cloud layer" speed={5} scale={1}>
            <Image src={awan1} fill="true" alt="awan" priority />
          </div>
          <div className="cloud layer" speed={1.8} scale={1}>
            <Image src={awan2} fill="true" alt="awan" priority />
          </div>
          <div className="cloud layer" speed={0.5} scale={1}>
            <Image src={awan3} fill="true" alt="awan" priority />
          </div>
          <div className="cloud layer" speed={2.4} scale={1}>
            <Image src={awan4} fill="true" alt="awan" priority />
          </div>
          <div className="cloud layer" speed={3} scale={1}>
            <Image src={awan5} fill="true" alt="awan" priority />
          </div>
        </div>
        <div className="colloseums">
          <div className="colloseums-left scroll" ratey={0.3} ratex={-0.1}>
            <Image src={colloseum2} fill="true" alt="colloseum" priority />
          </div>
          <div className="colloseums-right scroll" ratey={0.19} ratex={0.1}>
            <Image src={colloseum1} fill="true" alt="colloseum" priority />
          </div>
        </div>
        <div className="circle"></div>
      </div>
    </>
  );
}
