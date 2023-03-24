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
  const [selectOpen, setSelectOpen] = useState(false);
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h",
    )
      .then((response) => response.json())
      .then((data) => {
        setTopCoins(data);
        console.log(data);
      })
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
        <header className="top-coins-header">
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
        <div>
          <header className="selected-coin-info">
            <div>
              eth
              <button onClick={(prev) => setSelectOpen(!prev)}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.86334 6.78867L8.48717 8.16484L7.6469 9.0094C7.47569 9.18035 7.24363 9.27637 7.00169 9.27637C6.75974 9.27637 6.52769 9.18035 6.35648 9.0094L4.13575 6.78867C3.84423 6.49715 4.0543 5.99984 4.46157 5.99984H9.53752C9.94908 5.99984 10.1549 6.49715 9.86334 6.78867Z" />
                </svg>
              </button>
            </div>
            {selectOpen && <div className="select-coin">shit</div>}
          </header>
        </div>
      </section>
    </main>
  );
};
