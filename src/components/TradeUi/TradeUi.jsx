import React, {useState} from "react";
import "./Trade.css";
import {useMobileWidth} from "../../hooks/useMobileWidth";
import {Tabs} from "../Tabs";
import {Input} from "../Input";
import {HelpText} from "../HelpText";
import {Button} from "../Button";
import {InfoBox} from "../InfoBox";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {Link} from "react-router-dom";

export const TradeUi = ({
  prices,
  mainCurrency,
  subCurrency,
  links,
  eliteMemberBtnLabel,
  eliteMemberBtnDisabled,
  buyTabs,
  buyActiveTab,
}) => {
  const [orderBookInfoArray, setOrderBookInfoArray] = useState([]);
  const [orderBookInfoStatus, setOrderBookInfoStatus] = useState(false);
  const [orderBookInfoY, setOrderBookInfoY] = useState(0);
  const [orderBookInfoColor, setOrderBookInfoColor] = useState(null);
  const [orderBookInfoIndex, setOrderBookInfoIndex] = useState(null);
  const {width} = useMobileWidth();
  const [navigation, setNavigation] = useState(false);
  const changeHandler = (i, e) => {
    console.log(i.target.value);
  };
  const accountsData = [
    {
      address: "0xc2e42a2338ad2ef5b247c4027b0b29ccfc672eb9",
      balance: 688,
      account_category: "spot",
      assets: {
        btc: 0,
        eth: 0,
        usdt: 0,
        gold: 0,
        platinum: 0,
      },
    },
    {
      address: "0xc2e42a2338ad2ef5b247c4027b0b29ccfc672eb9",
      balance: 688,
      account_category: "cross3x",
      assets: {
        btc: 0,
        eth: 0,
        usdt: 0,
        gold: 0,
        platinum: 0,
      },
    },
    {
      address: "0xc2e42a2338ad2ef5b247c4027b0b29ccfc672eb9",
      balance: 688,
      account_category: "cross10x",
      assets: {
        btc: 0,
        eth: 0,
        usdt: 0,
        gold: 0,
        platinum: 0,
      },
    },
  ];

  let becomeEliteOnClick = () => {
    console.log("hi");
  };
  let openMenu = (event) => {
    if (width > 1025) {
      if (event) {
        setNavigation(true);
      } else {
        setNavigation(false);
      }
    }
  };
  return (
    <div className="dashboard-content-container trade-content-container">
      <div
        className={`dashboard-sidebar-container ${navigation ? "open" : ""}`}
        onMouseEnter={() => {
          openMenu(true);
        }}
        onMouseLeave={() => {
          openMenu(false);
        }}
      >
        <div className="dashboard-sidebar-links">
          {links?.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`${
                width <= 1025 ? "font-12" : "font-14"
              } dashboard-sidebar-link ${
                location.pathname === item.to ? "active" : ""
              }`}
            >
              {item.svg}
              <span className="dashboard-sidebar__horisontal-link">
                {item.label}
              </span>
              <span className="dashboard-sidebar__vertical-link">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        <div
          className="sidebar-footer"
          style={{display: `${width <= 1025 ? "none" : "flex"}`}}
        >
          <div className="sidebar-footer-support font-16">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 22.3199C7.72 22.3199 7.43 22.2499 7.17 22.1099C6.6 21.8099 6.25 21.2099 6.25 20.5699V19.1499C3.23 18.8399 1.25 16.6199 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.8799 20.44 19.1899 17 19.1899H13.23L8.97 22.0299C8.68 22.2199 8.34 22.3199 8 22.3199ZM7 3.17994C4.42 3.17994 2.75 4.84994 2.75 7.42994V13.4299C2.75 16.0099 4.42 17.6799 7 17.6799C7.41 17.6799 7.75 18.0199 7.75 18.4299V20.5599C7.75 20.6899 7.83 20.7499 7.88 20.7799C7.93 20.8099 8.03 20.8399 8.14 20.7699L12.59 17.8099C12.71 17.7299 12.86 17.6799 13.01 17.6799H17.01C19.59 17.6799 21.26 16.0099 21.26 13.4299V7.42994C21.26 4.84994 19.59 3.17994 17.01 3.17994H7Z"
                fill="rgba(255, 255, 255)"
              />
              <path
                d="M11.9998 12.1104C11.5898 12.1104 11.2498 11.7704 11.2498 11.3604V11.1504C11.2498 9.99035 12.0998 9.42035 12.4198 9.20035C12.7898 8.95035 12.9098 8.78035 12.9098 8.52035C12.9098 8.02035 12.4998 7.61035 11.9998 7.61035C11.4998 7.61035 11.0898 8.02035 11.0898 8.52035C11.0898 8.93035 10.7498 9.27035 10.3398 9.27035C9.92984 9.27035 9.58984 8.93035 9.58984 8.52035C9.58984 7.19035 10.6698 6.11035 11.9998 6.11035C13.3298 6.11035 14.4098 7.19035 14.4098 8.52035C14.4098 9.66035 13.5698 10.2304 13.2598 10.4404C12.8698 10.7004 12.7498 10.8704 12.7498 11.1504V11.3604C12.7498 11.7804 12.4098 12.1104 11.9998 12.1104Z"
                fill="rgba(255, 255, 255)"
              />
              <path
                d="M12 14.6001C11.9016 14.6002 11.8042 14.5809 11.7133 14.5434C11.6224 14.5059 11.5397 14.4508 11.4701 14.3814C11.4004 14.3119 11.3452 14.2294 11.3074 14.1386C11.2696 14.0478 11.2501 13.9504 11.25 13.8521C11.2499 13.7537 11.2691 13.6563 11.3066 13.5653C11.3442 13.4744 11.3992 13.3918 11.4687 13.3221C11.5381 13.2525 11.6206 13.1972 11.7114 13.1594C11.8023 13.1217 11.8996 13.1022 11.998 13.1021C12.1966 13.1018 12.3873 13.1804 12.5279 13.3207C12.6686 13.461 12.7477 13.6514 12.748 13.8501C12.7483 14.0487 12.6696 14.2393 12.5293 14.38C12.3891 14.5206 12.1986 14.5998 12 14.6001Z"
                fill="rgba(255, 255, 255)"
              />
            </svg>
            <div className="dashboard-sidebar__vertical-link">
              Help & Support
            </div>
            <div className="dashboard-sidebar__horisontal-link">
              Help & Support
            </div>
          </div>

          <Button
            label={eliteMemberBtnLabel}
            status={"warning"}
            element={"help-button"}
            icon={false}
            onClick={becomeEliteOnClick}
            customStyles={{width: "100%"}}
            disabled={eliteMemberBtnDisabled}
          />

          <div className="sidebar-footer-copyright font-14">
            <Link to="#">&copy; 2023 All rights reserved</Link>
          </div>
        </div>
      </div>
      <div
        className={`dashboard-main-container noPR ${navigation ? "open" : ""}`}
      >
        <div className="trade-content-container">
          <div className="trade-top-info-row">
            <div className="trade-top-info-title">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9979 3.33496V15.657L30.4126 20.3108L19.9979 3.33496Z"
                  fill="white"
                  fillOpacity="0.6"
                />
                <path
                  d="M19.9969 3.33496L9.58075 20.3108L19.9969 15.657V3.33496Z"
                  fill="white"
                />
                <path
                  d="M19.9982 28.2977V36.6703L30.4199 22.252L19.9982 28.2977Z"
                  fill="white"
                  fillOpacity="0.6"
                />
                <path
                  d="M19.9969 36.6703V28.2963L9.58075 22.252L19.9969 36.6703Z"
                  fill="white"
                />
                <path
                  d="M19.9979 26.3583L30.4126 20.3111L19.9979 15.6602V26.3583Z"
                  fill="white"
                  fillOpacity="0.4"
                />
                <path
                  d="M9.58075 20.3111L19.9969 26.3583V15.6602L9.58075 20.3111Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>
              {mainCurrency}-{subCurrency}
            </div>
            <div className="trade-top-info-prices">
              {prices.map(({title, data, change}, index) => (
                <div className="trade-top-info-block" key={index}>
                  <p className="font-12">{title}</p>
                  <div className="trade-top-info-data">
                    {change === "up" ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.86334 8.4877L8.48717 7.11153L7.6469 6.26697C7.47569 6.09602 7.24363 6 7.00169 6C6.75974 6 6.52769 6.09602 6.35648 6.26697L4.13575 8.4877C3.84423 8.77922 4.0543 9.27652 4.46157 9.27652H9.53752C9.94908 9.27652 10.1549 8.77922 9.86334 8.4877Z"
                          fill="#67BE7A"
                        />
                      </svg>
                    ) : change === "down" ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.86334 5.5123L8.48717 6.88847L7.6469 7.73303C7.47569 7.90398 7.24363 8 7.00169 8C6.75974 8 6.52769 7.90398 6.35648 7.73303L4.13575 5.5123C3.84423 5.22078 4.0543 4.72348 4.46157 4.72348H9.53752C9.94908 4.72348 10.1549 5.22078 9.86334 5.5123Z"
                          fill="#E87450"
                        />
                      </svg>
                    ) : (
                      ""
                    )}
                    <span
                      className={`font-16 ${
                        change === "up"
                          ? "positive-change"
                          : change === "down"
                          ? "negative-change"
                          : ""
                      }`}
                    >
                      {data}
                    </span>
                  </div>
                </div>
              ))}
              <button className="trade-type-change">
                ETH
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.66 7.33301L2 9.99967L4.66 12.6663V10.6663H9.33333V9.33301H4.66V7.33301ZM14 5.99967L11.34 3.33301V5.33301H6.66667V6.66634H11.34V8.66634L14 5.99967Z"
                    fill="#C38C5C"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="trade-middle-side">
            <div className="trade-middle-side-top">
              <div className="trade-middle-chart-nav">
                <div className="trade-middle-chart-btns">
                  <div className="trade-middle-chart-btn">1s</div>
                  <div className="trade-middle-chart-btn">15m</div>
                  <div className="trade-middle-chart-btn">4H</div>
                  <div className="trade-middle-chart-btn">1D</div>
                  <div className="trade-middle-chart-btn">1W</div>
                </div>
              </div>
              {/*<CandlestickChart/>*/}
            </div>
            <div className="trade-middle-side-bottom"></div>
          </div>
          <div className="trade-left-side">
            <div className="trade-left-side__ttl">
              <span className="main_ttl">AUDCAD</span>
              <span>Kiwi</span>
            </div>
            <div className="card-slider-navigation">
              {buyTabs?.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      item.onClick(item.name);
                    }}
                  >
                    <div
                      className={`card-slider-navigation_item ${
                        buyActiveTab == item.name ? "active" : ""
                      }`}
                      // onClick={() => setAccountType(item?.account_category)}
                    >
                      <p>{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="trade-left-side-body">
              <div className="trade-left-side-body-inner scroll">
                <div className="trade-left-side-item">
                  <Tabs type={"two-component-tabs"} />
                  <div className="trade-flex-inputs">
                    <Input
                      type={"plus_minus"}
                      customStyles={{
                        width: "50%",
                      }}
                      min={5000}
                      max={500000}
                      step={5000}
                      decrimnet={() => console.log("-")}
                      incrimnet={() => console.log("+")}
                      label={"Amount Lot"}
                      // value={amountProgressValue}
                      // onChange={amountProgressOnchange}
                    />
                    <Input
                      type={"plus_minus"}
                      customStyles={{
                        width: "50%",
                      }}
                      min={5000}
                      max={500000}
                      step={5000}
                      decrimnet={() => console.log("-")}
                      incrimnet={() => console.log("+")}
                      label={"Lot"}
                      // value={amountProgressValue}
                      // onChange={amountProgressOnchange}
                    />
                  </div>
                  <Button
                    label={"Buy ATR"}
                    size={"btn-lg"}
                    type={"btn-primary"}
                    arrow={"arrow-none"}
                    element={"button"}
                    customStyles={{width: "100%", marginTop: "30px"}}
                    onChange={console.log("hi")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
