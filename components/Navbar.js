import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/chronoxia3.webp";
import map from "../public/assets/map.webp";
import metamask from "../public/assets/metamask.webp";
import coinbase from "../public/assets/coinbase.webp";
import walletConnect from "../public/assets/wallet.webp";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import constants from "./constants";

export default function Navbar() {
  const imgsWallet = {
    metamask: metamask,
    coinbase: coinbase,
    walletconnect: walletConnect,
  };
  const { activate, deactivate, active, account } = useWeb3React();
  const [wallet, setwallet] = useState("metamask");

  const CoinbaseWallet = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/39d28ef90f764164a9355a67fa8ff935`,
    // url: `https://rpc.ankr.com/eth`,
    appName: "Chronoxia",
    supportedChainIds: [1, 3, 4, 5, 42],
  });

  const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/39d28ef90f764164a9355a67fa8ff935`,
    // url: `https://rpc.ankr.com/eth`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
  });

  const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  });

  const toggleWallete = () => {
    document.querySelector(".wallets").classList.toggle("active");
  };

  function getIdWallet(id) {
    let front = id.substring(0, 3);
    let back = id.substring(id.length - 4, id.length);

    return `${front}...${back}`;
  }

  useEffect(() => {
    const register = async () => {
      if (active) {
        // displayClose();
        const { data } = await axios.post(
          `${constants.SERVER_BACKEND}auth/register`,
          {
            wallet: account,
          }
        );
      }
    };

    register();
  }, [active]);
  // let display1 = active ? "none" : "inline";
  let display2 = active ? "inline" : "none";
  let display3 = active ? "none" : "flex";
  return (
    <>
      <div className="wallets">
        <span
          className="account-name"
          style={{ display: active ? "inline" : "none" }}
        >
          {getIdWallet(active ? account : "Connect")}
        </span>
        <h2>
          {active ? "" : "My Wallet"}
          <span
            style={{ display: display2, cursor: "pointer" }}
            onClick={() => {
              document
                .querySelector(".account-details")
                .classList.toggle("active");
            }}
          >
            My Wallet <BsChevronDown className="account-dropdown" />
          </span>
        </h2>
        <div className="account-details">
          <button className="wallet">
            <Image
              src={imgsWallet[wallet]}
              alt="metamask"
              width={25}
              height={25}
            />
            {wallet}
          </button>
          <button
            className="wallet"
            onClick={() => {
              deactivate();
              document
                .querySelector(".account-details")
                .classList.toggle("active");
            }}
          >
            <FiLogOut className="account-dropdown" />
            Logout
          </button>
        </div>
        <hr />

        <div className="wallets-button">
          <h2 style={{ display: display2 }}>CONNECTED</h2>
          <button
            className="wallet"
            onClick={() => {
              activate(CoinbaseWallet).then(() => {
                setwallet("coinbase");
              });
            }}
            style={{ display: display3 }}
          >
            <Image src={coinbase} alt="coinbase" fill="true" />
            Coinbase
          </button>
          <button
            className="wallet"
            onClick={() => {
              activate(WalletConnect).then(() => {
                setwallet("walletconnect");
              });
            }}
            style={{ display: display3 }}
          >
            <Image src={walletConnect} alt="wallet" fill="true" />
            WalletConnect
          </button>
          <button
            className="wallet"
            onClick={() => {
              if (window.ethereum) {
                activate(Injected).then(() => {
                  setwallet("metamask");
                });
              } else {
                window.open("https://metamask.io/download/", "_blank");
                window.location.reload();
              }
            }}
            style={{ display: display3 }}
          >
            <Image src={metamask} alt="metamask" fill="true" />
            Metamask
          </button>
        </div>
        <div className="wallets-bottom">
          <div className="account-name"></div>
        </div>
      </div>
      <div className="map">
        <Image src={map} fill="true" placeholder="blur" alt="map" priority />
      </div>
      <div className="navbar">
        <div className="coming-soon">
          <h4>Coming Soon..</h4>
        </div>
        <div className="container">
          <div className="left">
            <div className="links">
              <Link href="/about" prefetch={false}>
                <a className="nav-link" aria-label="about">
                  About
                </a>
              </Link>
              <Link href="/vision" prefetch={false}>
                <a className="nav-link" aria-label="vision">
                  Vision
                </a>
              </Link>
              <Link href="/trailer" prefetch={false}>
                <a className="nav-link" aria-label="trailer">
                  Trailer
                </a>
              </Link>
              <Link href="/seasons" prefetch={false}>
                <a className="nav-link" aria-label="seasons">
                  Map
                </a>
              </Link>
              <Link href="/community" prefetch={false}>
                <a className="nav-link" aria-label="community">
                  Community
                </a>
              </Link>
            </div>
          </div>
          <div className="logo">
            <a
              href="navbar"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <Image
                src={logo}
                alt="Logo Mesail Creative Hub"
                width={2048} //automatically provided
                height={415} //automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
                priority
              />
            </a>
          </div>
          <div className="right">
            <div className="buttons">
              <Link href="/" prefetch={false}>
                <a aria-label="contact">Contact</a>
              </Link>
              <Link href="/navbar" prefetch={false}>
                <a
                  aria-label="marketplace"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  onMouseOver={() => {
                    document
                      .querySelector(".coming-soon")
                      .classList.add("active");
                  }}
                  onMouseLeave={() => {
                    document
                      .querySelector(".coming-soon")
                      .classList.remove("active");
                  }}
                >
                  Marketplace
                </a>
              </Link>
              <button
                className="button shiny"
                onClick={() => {
                  toggleWallete();
                  if (
                    document
                      .querySelector(".account-details")
                      .classList.contains("active")
                  ) {
                    document
                      .querySelector(".account-details")
                      .classList.remove("active");
                  }
                }}
              >
                {active ? "My Wallet" : "Connect Wallet"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
