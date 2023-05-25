import react from "react";
import Hero from "../components/Hero";
import "../styles/Home.css";
import CardList from "../components/CardList";
import CardList2 from "../components/CardList2";

import { hotDropsData } from "../constants/MockupData";



const Home = () => {


  return (
    <div id="home">
      <Hero list={hotDropsData} />

      <p id="card-list-header-text"> Trending Auctions ----------------------------------------------------- </p>
      <div id="list-container">
        <CardList list={hotDropsData} />
      </div>
      <p id="card-list-header-text"> Marketplace ----------------------------------------------------------- </p>
      <div id="list-container">
        <CardList2 list={hotDropsData} />
      </div>
      
    </div>
   
  );
};

export default Home;
