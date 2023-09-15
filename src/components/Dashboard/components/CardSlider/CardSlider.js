import React, { useEffect, useMemo, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./CardSlider.css";
import { Account, AccountType } from "../../../../assets/svgs";
import { useMobileWidth } from "../../../../hooks/useMobileWidth";

import { Pagination, Navigation } from "swiper";
import { Button } from "../../../Button";

export const CardSlider = ({
  accounts,
  cardImgs,
  handleDeposit,
  handleWithdraw,
  handleExchange,
  handleTransfer,
  accountType,
  setAccountType,
  tier,
  extensions,
  stakedTotal,
  handleStake,
}) => {
  const { width } = useMobileWidth();

  const cardFooterData = [
    {
      title: "Transfer",
      svg: <AccountType type={"transfer"} className="card-slider-card_footer-item-svg" />,
    },
    {
      title: "Withdraw",
      svg: <AccountType type={"withraw"} className="card-slider-card_footer-item-svg" />,
    },
    {
      title: "Exchange",
      svg: <AccountType type={"exchange"} className="card-slider-card_footer-item-svg" />,
    },
    {
      title: "Stake",
      svg: (
        <AccountType type={"stake"} className="card-slider-card_footer-item-svg-stake" />
      ),
    },
  ];

  const accountsData = useMemo(() => {
    const data = accounts?.filter(
      (item) =>
        item?.account_category !== "external" &&
        item?.account_category !== "system" &&
        (item?.account_category === "main"
          ? extensions["dashboard"] === "true"
          : extensions[item?.account_category] === "true" &&
            extensions[`${item?.account_category}Admin`] === "true"),
    );

    return data;
  }, [accounts, accountType, extensions]);

  // const accountsData = [
  //   {
  //     address: '0xc2e42a2338ad2ef5b247c4027b0b29ccfc672eb9',
  //     balance: 688,
  //     account_category: 'main',
  //     assets: {
  //       btc: 0,
  //       eth: 0,
  //       usdt: 0,
  //       gold: 0,
  //       platinum: 0,
  //     },
  //   },
  //   {
  //     address: '0xc2e42a2338ad2ef5b247c4027b0b29ccfc672eb9',
  //     balance: 688,
  //     account_category: 'loan',
  //     assets: {
  //       btc: 0,
  //       eth: 0,
  //       usdt: 0,
  //       gold: 0,
  //       platinum: 0,
  //     },
  //   },
  //   {
  //     address: '0xc2e42a2338ad2ef5b247c4027b0b29ccfc672eb9',
  //     balance: 688,
  //     account_category: 'trade',
  //     assets: {
  //       btc: 0,
  //       eth: 0,
  //       usdt: 0,
  //       gold: 0,
  //       platinum: 0,
  //     },
  //   },
  // ]

  const assets = useMemo(() => {
    if (accountType === "main") {
      return accountsData?.find((item) => item?.account_category === "main")?.assets;
    } else {
      return [];
    }
  }, [accounts, accountType]);

  const chosenAcc = useMemo(() => {
    const item =
      accountsData &&
      accountsData?.find((item) => item?.account_category === accountType);
    return {
      address: item?.address,
      balance: item?.balance,
      account_category: item?.account_category,
    };
  }, [accounts, accountType]);

  const isAccountTypeFirstItem = useMemo(
    () => accountsData?.[0]?.account_category !== accountType,
    [accounts, accountType],
  );

  return (
    <div className="card-slider-wrapper">
      <div className="card-slider-navigation-wrapper">
        <div className="card-slider-navigation">
          {accountsData?.map((item, index) => {
            const activeIndex = accountsData.findIndex(
              (acc) => accountType === acc.account_category,
            );
            const isLeftOfActive = index === activeIndex - 1;
            const isRightOfActive = index === activeIndex + 1;
            const borderRadiusClass = isLeftOfActive
              ? "left-border-radius"
              : isRightOfActive
              ? "right-border-radius"
              : "";

            return (
              <div
                className={`${
                  accountType !== item?.account_category
                    ? "card-slider-navigation_item_container"
                    : ""
                }`}
                key={index}
              >
                <div
                  className={`card-slider-navigation_item ${
                    accountType === item?.account_category ? "active" : ""
                  } ${width >= 767 && borderRadiusClass}`}
                  onClick={() => setAccountType(item?.account_category)}
                >
                  <p className="font-16">
                    {item?.account_category === "main" ? "main" : item?.account_category}{" "}
                    {width > 767 ? "account" : ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div onClick={handleDeposit} className="card-slider-navigation_item-deposit">
          <svg
            className="card-slider-navigation_item-deposit-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#fff"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#C38C5C"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 12h12M12 18V6"
            ></path>
          </svg>
          <p className="font-16">Deposit</p>
        </div>
      </div>

      <div
        className={`card-slider-content ${
          isAccountTypeFirstItem && width > 767 ? "card-slider-content-wrap" : ""
        }`}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          className="card-slider-cards-container"
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".card-slider-cards-mover-icons_next",
            prevEl: ".card-slider-cards-mover-icons_prev",
          }}
          pagination={{
            type: "progressbar",
          }}
        >
          <SwiperSlide>
            <div className="card-slider-card">
              <img src={cardImgs["atar"]} className="card-slider-bg-img" />
              <div className="card-slider-card_header-container">
                <div className="card-slider-card_header">
                  <Account type={"atar"} />
                  <h4 className="font-16 title_wrapper_card">
                    <span className="font-16">
                      {accountType === "main" ? "A1" : accountType.toUpperCase()}
                    </span>
                    {tier && (
                      <span
                        className={`tier-card ${
                          tier === "Stellar Standard" ? "gold-tier" : ""
                        } ${tier === "Expert Edge" ? "diamond-tier" : ""} ${
                          tier === "Platinum Privilege" ? "vip-tier" : ""
                        } ${tier === "Novice Navigator" ? "basic-tier" : ""}`}
                      >
                        {tier?.toUpperCase()}
                      </span>
                    )}
                  </h4>
                </div>
                <div className="main-card-content-wrapper">
                  <p
                    className={`card-slider-card_content ${
                      accountType === "trade" ? "card-slider-trade_content" : ""
                    }`}
                  >
                    {chosenAcc?.balance?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  {accountType === "trade" && (
                    <span
                      style={{
                        fontSize: "12px",
                        lineHeight: "130%",
                        color: "rgba(255,255,255,0.3)",
                      }}
                    >
                      {stakedTotal?.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  )}
                </div>
              </div>
              <div className="card-slider-card_footer">
                {cardFooterData?.map((item, index) => {
                  if (item.title === "Stake") return;
                  if (
                    accountType !== "main" &&
                    (item.title === "Withdraw" ||
                      item.title === "Exchange" ||
                      item.title === "Deposit")
                  )
                    return;

                  return (
                    <div
                      className={`${
                        item?.title === "Deposit"
                          ? "card-slider-card_footer-item active"
                          : "card-slider-card_footer-item"
                      }`}
                      key={index}
                      onClick={() => {
                        if (item.title === "Withdraw") {
                          handleWithdraw(chosenAcc, "ATAR");
                        } else if (item.title === "Transfer") {
                          handleTransfer(chosenAcc, "ATAR");
                        } else if (item.title === "Exchange") {
                          handleExchange(chosenAcc, "ATAR");
                        }
                      }}
                    >
                      {item.svg}
                      <p className="font-10">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
          {assets &&
            Object.entries(assets)?.map(([key, value], index) => {
              if (key?.includes("Staked")) return;
              return (
                <SwiperSlide key={index}>
                  <div
                    className={`card-slider-card ${
                      value === 0 ? "card-slider-faded" : ""
                    }`}
                  >
                    <img src={cardImgs[key]} className="card-slider-bg-img" />
                    <div className="card-slider-card_header-container">
                      <div className="card-slider-card_header">
                        <Account type={key} />
                        <h4 className="font-16">{key.toUpperCase()}</h4>
                      </div>
                      <div className="main-card-content-wrapper">
                        <p
                          className={`card-slider-card_content ${
                            assets?.[`${key}Staked`] > 0
                              ? "card-slider-trade_content"
                              : ""
                          }`}
                        >
                          {value?.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                        {assets?.[`${key}Staked`] > 0 && (
                          <span
                            style={{
                              fontSize: "12px",
                              lineHeight: "130%",
                              color: "rgba(255,255,255,0.3)",
                            }}
                          >
                            {assets?.[`${key}Staked`]?.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="card-slider-card_footer card-slider-card_footer-currency">
                      {cardFooterData?.map((item, footerIndex) => {
                        return (
                          <div
                            className="card-slider-card_footer-item card-slider-card_footer-item-currency"
                            key={footerIndex}
                            onClick={() => {
                              if (item.title === "Withdraw") {
                                handleWithdraw(accountsData[index], key);
                              } else if (item.title === "Exchange") {
                                handleExchange(accountsData[index], key);
                              } else if (item.title === "Transfer") {
                                handleTransfer(accountsData[index], key);
                              } else if (item.title === "Stake") {
                                handleStake(accountsData[index], key);
                              }
                            }}
                          >
                            {item.svg}
                            <p className="font-10">{item.title}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className="card-slider-cards-mover">
          <div className="card-slider-cards-mover-icons">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="card-slider-cards-mover-icons_prev"
            >
              <path
                d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.4999 12H3.66992"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="card-slider-cards-mover-icons_next"
            >
              <path
                d="M14.43 5.92993L20.5 11.9999L14.43 18.0699"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.50008 12H20.3301"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
