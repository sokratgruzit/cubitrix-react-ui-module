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
}) => {
  const swiperRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [slidePercentage, setSlidePercentage] = useState(0);
  const [showLockedAmount, setShowLockedAmount] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const { width } = useMobileWidth();

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;

      const updateNavigation = () => {
        setIsPrevDisabled(swiperInstance.isBeginning);
        setIsNextDisabled(swiperInstance.isEnd);

        const activeSlideIndex = swiperInstance.activeIndex;

        const percentage = (activeSlideIndex / (swiperInstance.slides.length - 1)) * 100;
        setSlidePercentage(percentage);

        setIsEnd(swiperInstance.isEnd);
      };

      swiperInstance.on("slideChange", updateNavigation);

      return () => {
        swiperInstance.off("slideChange", updateNavigation);
      };
    }
  }, [swiperRef]);

  useEffect(() => {
    if (isEnd) {
      setSlidePercentage(100);
    }
  }, [isEnd]);

  const moveNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const movePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const cardFooterData = [
    {
      title: "Deposit",
      svg: <AccountType type={"top-up"} className="card-slider-card_footer-item-svg" />,
    },
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

  const mainAcc = useMemo(() => {
    const item =
      accountsData && accountsData?.find((item) => item?.account_category === "main");
    return {
      address: item?.address,
      balance: item?.balance,
      account_category: item?.account_category,
      totalStaked: item?.totalStaked,
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
          ref={swiperRef}
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
                      {accountType === "main" ? "ATAR" : accountType.toUpperCase()}
                    </span>
                    {tier && (
                      <span
                        className={`tier-card ${tier === "gold" ? "gold-tier" : ""} ${
                          tier === "diamond" ? "diamond-tier" : ""
                        } ${tier === "vip" ? "vip-tier" : ""} ${
                          tier === "basic" ? "basic-tier" : ""
                        }`}
                      >
                        {tier?.toUpperCase()}
                      </span>
                    )}
                  </h4>
                </div>
                <div className="main-card-content-wrapper">
                  <p className="card-slider-card_content">
                    {accountType === "trade" ? (
                      showLockedAmount ? (
                        <>
                          Locked:{" "}
                          {(chosenAcc?.balance - mainAcc?.totalStaked)?.toLocaleString(
                            "en-US",
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          )}
                        </>
                      ) : (
                        chosenAcc?.balance?.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      )
                    ) : (
                      chosenAcc?.balance?.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    )}
                  </p>
                  {accountType === "trade" && (
                    <Button
                      label={showLockedAmount ? "Amount" : "Locked"}
                      size={"btn-sm"}
                      type={"btn-primary"}
                      element={"button"}
                      onClick={() => setShowLockedAmount((prev) => !prev)}
                      customStyles={{
                        width: "70px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "34px",
                        fontSize: "12px",
                      }}
                      // disabled={accountUpdateLoading}
                    />
                  )}
                </div>
              </div>
              <div className="card-slider-card_footer">
                {cardFooterData?.map((item, index) => {
                  if (accountType === "main" && item.title === "Deposit") return;
                  if (
                    accountType !== "main" &&
                    (item.title === "Withdraw" || item.title === "Exchange")
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
                          handleWithdraw(chosenAcc);
                        } else if (item.title === "Transfer") {
                          handleTransfer(chosenAcc);
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
                      <p className="card-slider-card_content">
                        {value?.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                    <div className="card-slider-card_footer">
                      {cardFooterData?.map((item, footerIndex) => {
                        if (item.title === "Deposit" || item.title === "Transfer") return;

                        return (
                          <div
                            className="card-slider-card_footer-item"
                            key={footerIndex}
                            onClick={() => {
                              if (item.title === "Deposit") {
                                handleDeposit(accountsData[index]);
                              } else if (item.title === "Withdraw") {
                                handleWithdraw(accountsData[index], key);
                              } else if (item.title === "Exchange") {
                                handleExchange(accountsData[index], key);
                              } else if (item.title === "Transfer") {
                                handleTransfer(accountsData[index]);
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
              onClick={movePrev}
              // className={isPrevDisabled ? "card-slider-cards-mover-icons_active" : ""}
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
              onClick={moveNext}
              // className={isNextDisabled ? "card-slider-cards-mover-icons_active" : ""}
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
