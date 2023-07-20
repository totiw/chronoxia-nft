// import { useRef, useEffect } from "react";
export default function Roadmap() {
  return (
    <>
      <div className="roadmap">
        <h2 className="reveal" delay={3}>
          Roadmap
        </h2>
        <div className="container">
          <div className="line"></div>
          <div className="phases">
            <div className="phase reveal" delay={3}>
              <h2 className="phase-title">Phase 1</h2>
              <div className="phase-circle">
                <h4>P1</h4>
              </div>
              <div className="phase-detail">
                <ul>
                  <li>PRE ALPHA LAUNCH</li>
                  <li>TEAM EXPANSION</li>
                  <li>MARKETING INITIATIVES</li>
                  <li>STARTER PACKS SALE</li>
                  <li>BRAND PARTNERSHIP</li>
                </ul>
              </div>
            </div>
            <div className="phase reveal" delay={4}>
              <h2 className="phase-title">Phase 2</h2>
              <div className="phase-circle">
                <h4>P2</h4>
              </div>
              <div className="phase-detail">
                <ul>
                  <li>GAME LAUNCH</li>
                  <li>INDIVIDUAL MISSION</li>
                  <li>FIRST BRAND</li>
                  <li>CLASSIFICATION GAME</li>
                  <li>ITEM NFTs</li>
                </ul>
              </div>
            </div>
            <div className="phase reveal" delay={5}>
              <h2 className="phase-title">Phase 3</h2>
              <div className="phase-circle">
                <h4>P3</h4>
              </div>
              <div className="phase-detail">
                <ul>
                  <li>AMBASSADOR PROGRAM</li>
                  <li>MARKETPLACE V1</li>
                  <li>SEASON 1</li>
                  <li>MARKET IN GAME</li>
                  <li>MULTIPLAYER</li>
                </ul>
              </div>
            </div>
            <div className="phase reveal" delay={6}>
              <h2 className="phase-title">Phase 4</h2>
              <div className="phase-circle">
                <h4>P4</h4>
              </div>
              <div className="phase-detail">
                <ul>
                  <li>MARKETPLACE V2</li>
                  <li>JOB ROLES</li>
                  <li>TOURNAMENTS</li>
                  <li>PROPERTIES</li>
                  <li style={{ opacity: "none" }}>PROPERTIES</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
