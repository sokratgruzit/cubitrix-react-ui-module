import React from "react";
import { Button } from "../../../Button";
import "./TopCoins.css";

import EthCard from "../../../../assets/img/dashboard/coinCards/EthCard.png";
import { DashboardCoinsLeverageCard, DashboardCoinsBuy } from "../../../../assets/svgs";

export const TopCoins = ({ startTrade }) => {
  return (
    <section className="top-coins-section">
      <header className="top-coins-header">
        <h1 className="top-coins-title" data-aos="fade-up" data-aos-delay="20">
          Top
          <span>
            <svg
              width="42"
              height="51"
              viewBox="0 0 42 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1374 5.37123L25.6947 6.26794L25.7016 6.27127L26.1374 5.37123ZM32.3759 17.5606L33.3437 17.8123L33.3451 17.8067L32.3759 17.5606ZM30.0411 21.9775L29.2798 21.329L28.222 22.5709L29.8086 22.9501L30.0411 21.9775ZM35.3965 24.7585L34.7243 25.4989L34.7303 25.5043L35.3965 24.7585ZM38.2603 36.5782L37.3094 36.2685L37.3073 36.275L38.2603 36.5782ZM34.1912 42.673L33.5229 41.9291L33.5204 41.9314L34.1912 42.673ZM9.96516 43.9475L9.12302 43.4083L8.59446 44.2337L9.40917 44.7787L9.96516 43.9475ZM13.8568 37.8699L14.4276 37.0489L13.5748 36.4559L13.0147 37.3307L13.8568 37.8699ZM16.6021 29.5517L15.6362 29.8106L15.895 30.7765L16.8609 30.5177L16.6021 29.5517ZM14.896 23.1846L14.6372 22.2186L13.6713 22.4774L13.9301 23.4434L14.896 23.1846ZM24.0591 19.1218L23.2118 18.5907L23.2072 18.5982L24.0591 19.1218ZM21.7399 11.3721L21.3055 12.2728L21.3136 12.2766L21.7399 11.3721ZM9.18875 18.0715L8.74494 18.9676L9.65371 19.4177L10.091 18.5027L9.18875 18.0715ZM3.06878 15.0404L2.16818 14.6058L1.73793 15.4972L2.62496 15.9366L3.06878 15.0404ZM7.98824 8.38413L8.64924 9.13454L8.65417 9.13014L7.98824 8.38413ZM15.793 5.47797C19.413 4.50801 22.6952 4.7872 25.6947 6.26792L26.5801 4.47453C23.1015 2.75732 19.3149 2.46372 15.2754 3.54612L15.793 5.47797ZM25.7016 6.27127C28.7101 7.72798 30.5731 9.94178 31.3777 12.9449L33.3096 12.4272C32.345 8.82732 30.0705 6.16456 26.5732 4.47118L25.7016 6.27127ZM31.3777 12.9449C31.7682 14.4021 31.7778 15.8531 31.4067 17.3145L33.3451 17.8067C33.8005 16.0136 33.7886 14.2149 33.3096 12.4272L31.3777 12.9449ZM31.4081 17.3089C31.03 18.7629 30.3258 20.1012 29.2798 21.329L30.8023 22.626C32.0329 21.1814 32.8853 19.575 33.3437 17.8123L31.4081 17.3089ZM29.8086 22.9501C31.7282 23.4089 33.3597 24.2601 34.7243 25.4989L36.0686 24.018C34.4407 22.5403 32.5019 21.5375 30.2736 21.0049L29.8086 22.9501ZM34.7303 25.5043C36.1033 26.7305 37.0125 28.2012 37.4767 29.9335L39.4085 29.4159C38.8415 27.2996 37.7199 25.4928 36.0626 24.0126L34.7303 25.5043ZM37.4767 29.9335C38.0484 32.0672 37.9927 34.1709 37.3094 36.2685L39.2111 36.8879C40.0144 34.4218 40.0803 31.9231 39.4085 29.4159L37.4767 29.9335ZM37.3073 36.275C36.643 38.3627 35.3948 40.2472 33.5229 41.9292L34.8596 43.4168C36.9641 41.526 38.4285 39.3473 39.2132 36.8814L37.3073 36.275ZM33.5204 41.9314C31.6812 43.595 29.4181 44.7972 26.7053 45.5241L27.223 47.4559C30.2077 46.6562 32.7626 45.3137 34.8621 43.4146L33.5204 41.9314ZM26.7053 45.5241C20.6792 47.1387 15.3136 46.3221 10.5212 43.1164L9.40917 44.7787C14.7175 48.3296 20.6845 49.2079 27.223 47.4559L26.7053 45.5241ZM10.8073 44.4868L14.6989 38.4092L13.0147 37.3307L9.12302 43.4083L10.8073 44.4868ZM13.286 38.691C17.1324 41.3651 21.0788 42.2476 25.0565 41.1817L24.5389 39.2499C21.2344 40.1353 17.8869 39.4539 14.4276 37.0489L13.286 38.691ZM25.0565 41.1817C27.4946 40.5284 29.3979 39.3287 30.6577 37.5275L29.0188 36.3813C28.0856 37.7155 26.6285 38.69 24.5389 39.2499L25.0565 41.1817ZM30.6577 37.5275C31.9131 35.7325 32.2948 33.7691 31.7437 31.7123L29.8118 32.2299C30.2009 33.6822 29.9562 35.0409 29.0188 36.3813L30.6577 37.5275ZM31.7437 31.7123C31.2413 29.8374 30.0999 28.4086 28.3742 27.4676L27.4167 29.2235C28.6747 29.9094 29.4548 30.8976 29.8118 32.2299L31.7437 31.7123ZM28.3742 27.4676C26.6119 26.5066 24.602 26.3729 22.4275 26.9556L22.9451 28.8874C24.7324 28.4085 26.1953 28.5575 27.4167 29.2235L28.3742 27.4676ZM22.4275 26.9556L16.3433 28.5858L16.8609 30.5177L22.9451 28.8874L22.4275 26.9556ZM17.5681 29.2929L15.862 22.9257L13.9301 23.4434L15.6362 29.8106L17.5681 29.2929ZM15.1549 24.1505L20.3618 22.7553L19.8442 20.8234L14.6372 22.2186L15.1549 24.1505ZM20.3618 22.7553C22.3879 22.2124 23.955 21.2008 24.911 19.6454L23.2072 18.5982C22.586 19.6087 21.5157 20.3755 19.8442 20.8234L20.3618 22.7553ZM24.9064 19.653C25.874 18.1095 26.0894 16.3832 25.5992 14.5539L23.6674 15.0715C24.0265 16.4116 23.8591 17.5581 23.2118 18.5907L24.9064 19.653ZM25.5992 14.5539C25.0973 12.6806 23.9324 11.3 22.1663 10.4675L21.3136 12.2766C22.556 12.8622 23.3201 13.7754 23.6674 15.0715L25.5992 14.5539ZM22.1743 10.4713C20.4078 9.61941 18.4283 9.52562 16.3023 10.0953L16.8199 12.0271C18.5803 11.5555 20.0533 11.6689 21.3055 12.2728L22.1743 10.4713ZM16.3023 10.0953C12.857 11.0184 10.207 13.6219 8.2865 17.6403L10.091 18.5027C11.8501 14.822 14.115 12.7519 16.8199 12.0271L16.3023 10.0953ZM9.63257 17.1754L3.5126 14.1443L2.62496 15.9366L8.74494 18.9676L9.63257 17.1754ZM3.96937 15.4751C5.2193 12.8853 6.78246 10.7789 8.64922 9.13452L7.32725 7.63373C5.23511 9.4766 3.51863 11.8077 2.16818 14.6058L3.96937 15.4751ZM8.65417 9.13014C10.4912 7.49026 12.8585 6.26426 15.793 5.47797L15.2754 3.54612C12.0974 4.39766 9.43403 5.75306 7.3223 7.63812L8.65417 9.13014Z"
                fill="#45F4EA"
              />
            </svg>
          </span>
          Coins
        </h1>
        <p className="top-coins-info" data-aos="fade-up" data-aos-delay="20">
          Trade, buy, staking and loan cryptocurrency at Complend
        </p>
      </header>
      <div className="top-coins-main" data-aos="fade-up" data-aos-delay="20">
        <img
          src={require("../../../../assets/img/dashboard/coinCards/EthCard.png")}
          alt=""
          className="ethCard"
        />

        <img
          src={require("../../../../assets/img/dashboard/coinCards/BitcoinCard.png")}
          alt=""
          className="BitcoinCard"
        />
        <img
          src={require("../../../../assets/img/dashboard/coinCards/TetherCard.png")}
          alt=""
          className="TetherCard"
        />
        <DashboardCoinsLeverageCard className={"coins-leverage-card"} />
        <DashboardCoinsBuy className={"coins-buy-card"} />
      </div>
      <span data-aos="fade-up" data-aos-delay="20" className="btn-started-wrap">
        <Button
          label={"Start Trade"}
          size={"btn-lg"}
          type={"btn-primary"}
          arrow={"arrow-none"}
          element={"button"}
          onClick={startTrade}
          className={"start-trade-btn"}
        />
      </span>
      <div className="bg-gradient"></div>
      <img
        src={require("../../../../assets/img/dashboard/TopCoinsIcon.png")}
        alt=""
        className="top-coins-coin"
        data-aos="fade-right"
        data-aos-delay="50"
      />
      <img
        src={require("../../../../assets/img/dashboard/ball.svg")}
        className={"dashboard-header-ball-img"}
        data-aos="fade-left"
        data-aos-delay="1200"
      />
      <img
        src={require("../../../../assets/img/dashboard/silverCoin.png")}
        className={"silver-coin"}
        data-aos="fade-left"
        data-aos-delay="200"
      />
    </section>
  );
};
