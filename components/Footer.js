import { useRef, useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaDiscord,
  FaTelegramPlane,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  const [coming, setComing] = useState(false);
  const ref = useRef();
  const handleClick = () => {
    coming === false ? setComing(true) : setComing(false);
  };

  useEffect(() => {
    coming === false
      ? ref.current.classList.remove("active")
      : ref.current.classList.add("active");
  }, [coming]);

  return (
    <>
      <div className="coming-soons" ref={ref}>
        <button onClick={handleClick}>X</button>
        <h4>Coming Soon..</h4>
        <blockquote>we're working on it</blockquote>
        <div className="socials">
          <a href="/" className="social fb">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/chronoxia_nft" className="social tw">
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/chronoxia_nft/"
            className="social ig"
          >
            <AiFillInstagram />
          </a>
          <a href="https://discord.gg/PqsJYugp" className="social dc">
            <FaDiscord />
          </a>
          <a href="https://t.me/ChronoxiaOfficial" className="social tg">
            <FaTelegramPlane />
          </a>
        </div>
      </div>
      <div className="footer community">
        <h2>see you on the universe</h2>
        <div className="container">
          <div className="socials">
            <a href="/" className="social fb">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/chronoxia_nft" className="social tw">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/chronoxia_nft/"
              className="social ig"
            >
              <AiFillInstagram />
            </a>
            <a href="https://discord.gg/PqsJYugp" className="social dc">
              <FaDiscord />
            </a>
            <a href="https://t.me/ChronoxiaOfficial" className="social tg">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
        <button className="download-game" onClick={handleClick}>
          Download Game
        </button>
        <p>©2022 BY CHRONOXIA.MCHUB.IO ALL RIGHTS RESERVED</p>
      </div>
    </>
  );
}
