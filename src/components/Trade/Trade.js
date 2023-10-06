import React, {useState} from "react";
import "./Trade.css";
import { useMobileWidth } from "../../hooks/useMobileWidth";
import {Tabs} from "../Tabs";
import {Input} from "../Input";
import {HelpText} from "../HelpText";
import {Button} from "../Button";
import {InfoBox} from "../InfoBox";
import {CandlestickChart} from "../CandlestickChart";

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

const Trade = (
    {
      prices = [],
      rightSideRedElements= [],
      rightSideGreenElements= [],
      bottomSideElements= [],
      mainCurrency = '',
      subCurrency = '',
      tradeTypeFormTabs = [],
      tradeTypeFormActive = '',
      myTradeTypeTabs = [],
      myTradeType = '',
    }) => {
  const [orderBookInfoArray, setOrderBookInfoArray] = useState([]);
  const [orderBookInfoStatus, setOrderBookInfoStatus] = useState(false);
  const [orderBookInfoY, setOrderBookInfoY] = useState(0);
  const [orderBookInfoColor, setOrderBookInfoColor] = useState(null);
  const [orderBookInfoIndex, setOrderBookInfoIndex] = useState(null);
  const { width } = useMobileWidth();
  const changeHandler = (i, e) => {
    console.log(i.target.value);
  };
  const handleRightElementHover = (event,index, color) => {
    setOrderBookInfoIndex(index);
    const element = event.target; // The element being hovered over
    const rect = element.getBoundingClientRect(); // Get its position
    console.log(`Hovered Element - X: ${rect.x}, Y: ${rect.y}`);
    setOrderBookInfoY(rect.y);
    let sumAmount = 0;
    let sumTotal = 0;
    let totalPrice = 0;
    if(color == 'red') {
      console.log(rightSideRedElements.length)
      for(let i = rightSideRedElements.length; i > index; i--) {

        sumAmount = sumAmount + rightSideRedElements[i - 1].amount;
        sumTotal = sumTotal + rightSideRedElements[i - 1].total;
        totalPrice += rightSideRedElements[i - 1].price;
        console.log(rightSideRedElements[i - 1])
        console.log(index)
      }
      totalPrice = totalPrice / (rightSideRedElements.length - index);
      setOrderBookInfoColor('red');
    }
    if(color == 'green') {
      console.log(rightSideRedElements.length)
      for(let i = 0; i < index + 1; i++) {

        sumAmount = sumAmount + rightSideRedElements[i].amount;
        sumTotal = sumTotal + rightSideRedElements[i].total;
        totalPrice += rightSideRedElements[i].price;
        console.log(rightSideRedElements[i])
        console.log(index)
      }
      totalPrice = totalPrice / (index + 1);
      setOrderBookInfoColor('green');
    }
    const orderBookInfo = [
      {
        title: "Avg.Price:",
        amount: totalPrice,
        icon: false
      },
      {
        title: `Sum ${mainCurrency}:`,
        amount: sumAmount,
        icon: false
      },
      {
        title: `Sum ${subCurrency}:`,
        amount: sumTotal,
        icon: false
      }
    ]
    setOrderBookInfoArray(orderBookInfo);
    setOrderBookInfoStatus(true);
  };

  return (
    <div className="trade-main-bg">
      <div className="trade-content-container">
        <div className="trade-order-book-info" style={{top: `${orderBookInfoY}px`}}>
          <InfoBox
              type="reward-box"
              active={orderBookInfoStatus}
              cardBody={orderBookInfoArray}
              customStyle={{ width: "100%" }}
          />
        </div>
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
            {prices.map(({ title, data, change }, index) => (
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
        <div className="trade-left-side">
          <div className="card-slider-navigation">
            {accountsData?.map((item, index) => {
              const activeIndex = accountsData.findIndex(
                (acc) => "cross10x" === acc.account_category,
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
                    "cross10x" !== item?.account_category ? "trade-main-func-active" : ""
                  }`}
                  key={index}
                >
                  <div
                    className={`card-slider-navigation_item ${
                      "cross10x" === item?.account_category ? "active" : ""
                    } ${width >= 767 && borderRadiusClass}`}
                    onClick={() => setAccountType(item?.account_category)}
                  >
                    <p className="font-16">
                      {item?.account_category === "main"
                        ? "main"
                        : item?.account_category}{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="trade-left-side-body">
            <div className="trade-left-side-body-inner scroll">
              <div className="trade-left-side-item">
                <Tabs type={"two-component-tabs"} />
                <Tabs type={"text-tabs"} customStyles={{marginTop: '10px'}} activeTab={tradeTypeFormActive} tabsData={tradeTypeFormTabs}/>
                <div className="trade-transfer-btn">
                  Transfer
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.99 11L3 15L6.99 19V16H14V14H6.99V11ZM21 9L17.01 5V8H10V10H17.01V13L21 9Z" fill="#C38C5C"/>
                  </svg>
                </div>
                <div className="trade-avalible-status">
                  <span>Avbl</span>
                  0.00000 USDT
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 16.2497H17.5V17.9163H12.5V12.9163H14.1667V15.1913C15.6917 13.9663 16.6667 12.0997 16.6667 9.99967C16.6667 6.60801 14.1167 3.79967 10.8334 3.39134V1.70801C15.0417 2.12467 18.3334 5.67467 18.3334 9.99967C18.3334 12.4913 17.2334 14.7247 15.5 16.2497ZM3.33335 9.99967C3.33335 7.89967 4.30835 6.02467 5.83335 4.80801V7.08301H7.50002V2.08301H2.50002V3.74967H4.50002C3.60969 4.52941 2.8963 5.49044 2.40764 6.56835C1.91899 7.64627 1.66636 8.81617 1.66669 9.99967C1.66669 14.3247 4.95835 17.8747 9.16669 18.2913V16.608C5.88335 16.1997 3.33335 13.3913 3.33335 9.99967Z" fill="#C38C5C"/>
                    <path d="M10.5556 9.44379V6.66602H9.44446V9.44379H6.66669V10.5549H9.44446V13.3327H10.5556V10.5549H13.3334V9.44379H10.5556Z" fill="#C38C5C"/>
                  </svg>
                </div>

                <div className="exchange-input-wrapper" style={{marginTop: '20px'}}>
                  <Input
                      type={"default"}
                      label={"Price"}
                      subLabel={""}
                      placeholder={"0.0000"}
                      onChange={changeHandler}
                      btns={false}
                      icon={true}
                      statusCard={
                        <HelpText
                            status={"error"}
                            title={"your text"}
                            fontSize={"font-12"}
                            icon={true}
                        />
                      }
                      customStyles={{ width: "100%" }}
                  />
                  {(
                      <span className="font-14 exchange-input-right">
                      USDT
                    </span>
                  )}
                </div>
                <div className="exchange-input-wrapper" style={{marginTop: '20px'}}>
                  <Input
                      type={"default"}
                      label={"Amount"}
                      subLabel={""}
                      placeholder={"0.0000"}
                      onChange={changeHandler}
                      btns={false}
                      icon={true}
                      statusCard={
                        <HelpText
                            status={"error"}
                            title={"your text"}
                            fontSize={"font-12"}
                            icon={true}
                        />
                      }
                      customStyles={{ width: "100%" }}
                  />
                  {(
                      <span className="font-14 exchange-input-right">
                    A1
                  </span>
                  )}
                </div>
                <div className="exchange-input-wrapper" style={{marginTop: '20px'}}>
                  <Input
                      type={"range"}
                      customStyles={{ width: "100%" }}
                      min={0}
                      max={100}
                      step={1}
                      disabled={false}
                      value={0}
                      // onChange={amountProgressOnchange}
                  />
                </div>
                <div className="exchange-input-wrapper" style={{marginTop: '20px'}}>
                  <Input
                      type={"default"}
                      label={"Total"}
                      subLabel={""}
                      placeholder={"0.0000"}
                      onChange={changeHandler}
                      btns={false}
                      icon={true}
                      statusCard={
                        <HelpText
                            status={"error"}
                            title={"your text"}
                            fontSize={"font-12"}
                            icon={true}
                        />
                      }
                      customStyles={{ width: "100%" }}
                  />
                  {(
                      <span className="font-14 exchange-input-right">
                    USDT
                  </span>
                  )}
                </div>
                <Button
                    label={"Buy ATR"}
                    size={"btn-lg"}
                    type={"btn-primary"}
                    arrow={"arrow-none"}
                    element={"button"}
                    customStyles={{ width: "100%",marginTop: '30px' }}
                    onChange={console.log('hi')}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="trade-middle-side">
          <div className="trade-middle-side-top">
            <div className="trade-middle-chart-nav">
              <div className="trade-middle-chart-btns">
                <div className="trade-middle-chart-btn">
                  1s
                </div>
                <div className="trade-middle-chart-btn">
                  15m
                </div>
                <div className="trade-middle-chart-btn">
                  4H
                </div>
                <div className="trade-middle-chart-btn">
                  1D
                </div>
                <div className="trade-middle-chart-btn">
                  1W
                </div>
              </div>
            </div>
            {/*<CandlestickChart/>*/}
          </div>
          <div className="trade-middle-side-bottom">
            <div className="trade-middle-side-bottom-half">
              <Tabs type={"text-tabs"} customStyles={{marginBottom: '20px'}} activeTab={myTradeType} tabsData={myTradeTypeTabs}/>
              <div className="trade-bottom-side-ttl">
                <div className="trade-right-th txt-left">
                  Price ({subCurrency})
                </div>
                <div className="trade-right-th">
                  Amount ({mainCurrency})
                </div>
                <div className="trade-right-th">
                  Time
                </div>
              </div>
              <div className="trade-middle-side-bottom-content scroll">
                {bottomSideElements.map((item,index) => {
                  return(
                      <div key={index} className={`trade-right-td-item trade-bottom-td-item ${item.rise ? 'green' : 'red'}`}>
                        <div className="trade-right-td txt-left">
                          {item.price}
                        </div>
                        <div className="trade-right-td">
                          {item.amount}
                        </div>
                        <div className="trade-right-td">
                          {item.time}
                        </div>
                      </div>
                  )
                })}
              </div>
            </div>
            <div className="trade-middle-side-bottom-half">
              <div className="trade-search-input">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 15.0582L11.8253 10.8835C12.9097 9.55723 13.4429 7.86489 13.3145 6.15654C13.1862 4.44818 12.4061 2.85452 11.1357 1.70518C9.86528 0.555838 8.2017 -0.0612406 6.48907 -0.0184194C4.77644 0.0244018 3.14578 0.723847 1.93439 1.93524C0.722992 3.14663 0.0235473 4.77729 -0.0192739 6.48993C-0.0620951 8.20256 0.554984 9.86613 1.70432 11.1366C2.85366 12.407 4.44733 13.187 6.15568 13.3154C7.86404 13.4437 9.55637 12.9106 10.8826 11.8262L15.0573 16.0002L16 15.0582ZM6.66664 12.0002C5.61181 12.0002 4.58066 11.6874 3.7036 11.1013C2.82654 10.5153 2.14295 9.68235 1.73929 8.70781C1.33562 7.73327 1.23 6.66091 1.43579 5.62635C1.64158 4.59178 2.14953 3.64147 2.89541 2.8956C3.64129 2.14971 4.5916 1.64176 5.62616 1.43598C6.66073 1.23019 7.73308 1.33581 8.70762 1.73947C9.68216 2.14314 10.5151 2.82673 11.1011 3.70379C11.6872 4.58085 12 5.612 12 6.66683C11.9984 8.08083 11.436 9.43646 10.4361 10.4363C9.43628 11.4362 8.08064 11.9986 6.66664 12.0002Z" fill="white"/>
                </svg>
                <input type="text"/>

              </div>
              <div className="trade-bottom-side-ttl">
                <div className="trade-right-th txt-left">
                  Price ({subCurrency})
                </div>
                <div className="trade-right-th">
                  Amount ({mainCurrency})
                </div>
                <div className="trade-right-th">
                  Time
                </div>
              </div>
              <div className="trade-middle-side-bottom-content scroll">
                {bottomSideElements.map((item,index) => {
                  return(
                      <div key={index} className={`trade-right-td-item trade-bottom-td-item ${item.rise ? 'green' : 'red'}`}>
                        <div className="trade-right-td txt-left">
                          {item.price}
                        </div>
                        <div className="trade-right-td">
                          {item.amount}
                        </div>
                        <div className="trade-right-td">
                          {item.time}
                        </div>
                      </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="trade-right-side">
          <div className="trade-right-side-body">
            <div className="trade-right-side-ttl">
              <div className="trade-right-th txt-left">
                Price ({subCurrency})
              </div>
              <div className="trade-right-th">
                Amount ({mainCurrency})
              </div>
              <div className="trade-right-th">
                Total
              </div>
            </div>
            <div className="trade-right-side-half">
              <div className="trade-right-side-half-inner scroll">
                {rightSideRedElements.map((item,index) => {
                  return(
                      <div onMouseLeave={() => {setOrderBookInfoIndex(null),setOrderBookInfoStatus(false),setOrderBookInfoColor(null)}} onMouseEnter={(e) => {handleRightElementHover(e, index, 'red')}} className="trade-right-td-item red">
                        <div className="trade-right-td-line" style={{width: `${item.percent}%`}}></div>
                        <div className={`trade-right-td-select ${orderBookInfoColor == 'red' && index >= orderBookInfoIndex ? 'active' : ''} ${orderBookInfoColor == 'red' && index == orderBookInfoIndex ? 'corner' : ''}`}></div>
                        <div className="trade-right-td txt-left">
                          {item.price}
                        </div>
                        <div className="trade-right-td">
                          {item.amount}
                        </div>
                        <div className="trade-right-td">
                          {item.total}
                        </div>
                      </div>
                  )
                })}
              </div>
            </div>
            <div className="trade-right-side-ttl">
              <div className="trade-right-side-price red">
                $1,245.0
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.77223 4.41569L7.47863 2.12208L6.07817 0.714481C5.79282 0.429562 5.40606 0.269531 5.00282 0.269531C4.59957 0.269531 4.21281 0.429562 3.92746 0.714481L0.226255 4.41569C-0.259618 4.90156 0.0904962 5.73041 0.769289 5.73041H9.2292C9.91514 5.73041 10.2581 4.90156 9.77223 4.41569Z" fill="#67BE7A"/>
                </svg>
              </div>
            </div>
            <div className="trade-right-side-half">
              <div className="trade-right-side-half-inner scroll">
                {rightSideGreenElements.map((item,index) => {
                  return(
                      <div onMouseLeave={() => {setOrderBookInfoIndex(null),setOrderBookInfoStatus(false),setOrderBookInfoColor(null)}} onMouseEnter={(e) => {handleRightElementHover(e, index, 'green')}} className="trade-right-td-item green">
                        <div className="trade-right-td-line" style={{width: `${item.percent}%`}}></div>
                        <div className={`trade-right-td-select ${orderBookInfoColor == 'green' && index <= orderBookInfoIndex ? 'active' : ''} ${orderBookInfoColor == 'green' && index == orderBookInfoIndex ? 'corner' : ''}`}></div>
                        <div className="trade-right-td txt-left">
                          {item.price}
                        </div>
                        <div className="trade-right-td">
                          {item.amount}
                        </div>
                        <div className="trade-right-td">
                          {item.total}
                        </div>
                      </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
