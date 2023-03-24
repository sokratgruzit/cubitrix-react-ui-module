import React, { useState, useEffect } from "react";
import { DashboardCard, DashboardCardRings } from "../../assets/svgs";

import { useMobileWidth } from "../../hooks/useMobileWidth";
import { Button } from "../Button";
import { TopCoinCard } from "./components/TopCoinCard/TopCoinCard.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./Dashboard.css";
import { TopCoinsSliderBtns } from "./components/TopCoinsSliderBtns/TopCoinsSliderBtns";

export const Dashboard = ({}) => {
  const { width } = useMobileWidth();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h",
    )
      .then((response) => response.json())
      .then((data) => setTopCoins(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="dashboard-main">
      <header className="dashboard-header">
        <div className="dashboard-main-card">
          <div className="dashboard-card-info">
            <h1>
              Buy
              <DashboardCardRings />
              Sell & Trade
            </h1>
            <h2>
              Crypto
              <Button
                label={"Get Started"}
                size={"btn-sm"}
                type={"btn-primary"}
                arrow={"arrow-none"}
                element={"button"}
                onClick={() => disconnect()}
                customStyles={{ margin: "0" }}
              />
            </h2>
            <p>Trade, buy, staking and loan cryptocurrency at Complend</p>
          </div>
          <div className="dashboard-cards-wrapper">
            <DashboardCard className="dashboard-cards-svg" />
          </div>
        </div>
      </header>
      <section className="top-coins">
        <header className="top-cons-header">
          <h3>Top Coins</h3>
          <TopCoinsSliderBtns swiperInstance={swiperInstance} />
        </header>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className="mySwiper2"
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {topCoins?.map((item, index) => (
            <SwiperSlide key={index}>
              <TopCoinCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};
