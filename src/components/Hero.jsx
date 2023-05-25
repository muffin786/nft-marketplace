import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import nft5 from "./nft5.webp";

const Hero = () => {
  let navigate = useNavigate();

  const goExplore = () => {
    navigate("/explore");
  };
  const goCreate = () => {
    navigate("/create");
  };

  return (
    <div id="hero">
      <Header />

      <h1 id="header-text-first"> NFT </h1>
      <h1 id="header-text-first">MARKETPLACE</h1>
      <h5 id="header-text-second">BASED ON</h5>
      <h5 id="header-text-second">KALPTANTRA</h5>

      <div id="hero-buttons">
        <button id="explore" onClick={goExplore}>
          Explore NFTs
        </button>
        <button id="create" onClick={goCreate}>Create NFT</button>
      </div>
      {/* <img id='hero-background' src={nft5}/> */}
    </div>
  );
};

export default Hero;
