import Image from "next/image";
import char from "../../public/assets/char.webp";
import rumput from "../../public/assets/rumput.webp";
export default function About() {
  return (
    <>
      <div className="about">
        <div className="char">
          <Image
            src={char}
            fill="true"
            className="reveal"
            delay={5}
            alt="character"
          />
        </div>
        <div className="rumput">
          <Image src={rumput} fill="true" alt="rumput" />
        </div>
        <div className="container">
          <h2 className="reveal" delay={3}>
            About The Game
          </h2>
          <p className="reveal" delay={3.5}>
            Chronoxia is actually the name of a place that is not limited by
            time. The beings who live here are skilled smiths. They are experts
            in making war equipment that comes from any material from the
            ordinary to the unique, and comes from various ages.
          </p>
          <p className="reveal" delay={4}>
            The material obtained also has an interesting story of each.
            Chronoxia doesn't want its goods to be only physical, therefore
            converts some equipment into digital form known as "NFT".
          </p>
        </div>
      </div>
    </>
  );
}
