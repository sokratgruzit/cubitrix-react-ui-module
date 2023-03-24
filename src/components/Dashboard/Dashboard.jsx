import React, { useState, useEffect } from "react";
import { DashboardCard, DashboardCardRings, TriangleArrow } from "../../assets/svgs";

import { useMobileWidth } from "../../hooks/useMobileWidth";
import { Button } from "../Button";
import { TopCoinCard } from "./components/TopCoinCard/TopCoinCard.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./Dashboard.css";
import { TopCoinsSliderBtns } from "./components/TopCoinsSliderBtns/TopCoinsSliderBtns";
import { SelectedCoinChart } from "./components/SelectedCoinChart/SelectedCoinChart";
import { CoinsTable } from "./components/CoinsTable/CoinsTable";

export const Dashboard = ({ topCoins, coinsList, loadCoinsList }) => {
  const { width } = useMobileWidth();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});

  useEffect(() => {
    if (topCoins.length > 0) setSelectedOption(topCoins[0]);
  }, [topCoins]);

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
        <div className="selected-coin-chart-section">
          <header className="selected-coin-info">
            <div>
              <img src={selectedOption.image} className="top-coin-image-lg" />
            </div>
            <div className="selected-coin-stats">
              <div className="selected-coin-title">
                <p>{selectedOption.name}</p>
                <button
                  className="select-coin-button"
                  onClick={() => setSelectOpen((prev) => !prev)}
                >
                  {selectedOption?.symbol?.toUpperCase()}
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

              <div className="selected-coin-price-wrap">
                <h3>${selectedOption.current_price}</h3>
                <div>
                  <TriangleArrow fill={"272C57"} />- 17%
                </div>
              </div>
            </div>
            {selectOpen && (
              <div className="select-coin-wrap">
                {topCoins?.map((coin) => (
                  <div
                    key={coin.name}
                    className="select-coin-option"
                    onClick={() => {
                      setSelectOpen(false);
                      setSelectedOption(coin);
                    }}
                  >
                    {coin.symbol.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </header>
          <div className="selected-coin-main-info">
            <div className="selected-chart-wrapper">
              <SelectedCoinChart chartData={selectedOption} />
            </div>
            <div className="selected-token-market-info">
              <div className="selected-coin-market-wrap">
                <div className="coin-market-wrap-stats">
                  <p className="coin-market-cap-ttl">Market Cap</p>
                  <div className="coin-market-price">
                    <h3>${selectedOption?.market_cap}</h3>
                    <p>18%</p>
                  </div>
                  <h4>24H Volume / Market Cap</h4>
                  <p className="coin-market-24h-vol">0.0829</p>
                </div>
                <div className="coin-market-value-wrap">
                  <div className="coin-market-value-title">
                    <h4>Value</h4>
                    <span>24H</span>
                  </div>
                  <div className="coin-market-value">
                    <p>$42,420,094,218</p>
                    <span>1.42%</span>
                  </div>
                </div>
              </div>
              <div className="selected-coin-circulating-wrap">
                <h3>Circulating Supply</h3>
                <div className="circulating-supply-row">
                  <h4>
                    {selectedOption?.circulating_supply}{" "}
                    {selectedOption?.symbol?.toUpperCase()}
                  </h4>
                  <p>92%</p>
                </div>
                <span className="circulating-supply-progressbar">
                  <span style={{ width: "92%" }}></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="coins-table-section">
        <CoinsTable coinsList={coinsList} loadCoinsList={loadCoinsList} />
      </section>
    </main>
  );
};
