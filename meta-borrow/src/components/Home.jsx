import React from "react";

const Home = () => {
  return (
    <>
      <section id="hero-image">
        <div className="hero-marketing-text ">
          <h1>
            <span className="font-bold">MONETIZE</span> YOUR{" "}
            <span className="font-bold">GAMING</span> ASSETS
          </h1>
          <h5>
            MetaBorrow serves as a multi chain renting protocol that lets you
            unlock the true potential of your in-game digital assets.
          </h5>
          <h5 className="">
            MetaBorrow’s mission is to accelerate the transition of crypto and
            non-crypto games towards a decentralised future by lending and
            borrowing the gaming assets using the staking mechanisms.
          </h5>

          <h5 className="">
            MetaBorrow is committed to empowering the gaming experience by
            helping gamers generate income through their gaming assets and save
            money at the same time by letting gamers rent in-game assets instead
            of buying them.
          </h5>

          <button onclick="readMore()">Read More</button>
        </div>
      </section>
    </>
  );
};

export default Home;
