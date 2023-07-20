import { NextSeo } from "next-seo";
import "../styles/style.scss";
import Layout from "../components/layout";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEffect } from "react";

import TagManager from "react-gtm-module";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-W3S6QFJ" });
  }, []);

  function getLibrary(provider) {
    return new Web3Provider(provider);
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout>
        <NextSeo
          title="Chronoxia NFT | A Place beyond Time"
          description="Chronoxia is a Game that utilizes the Blockchain
      Technology, Specifically NFT to drive social and
      in game transaction ecosystem, The game allows
      player to earn, collect, and trade in game items
      as NFT with other players as they gather to chat
      and do battles."
        />
        <Component {...pageProps} />
      </Layout>
    </Web3ReactProvider>
  );
}
