import { useEffect, useState } from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { useMobileWidth } from "../hooks/useMobileWidth";
import { NoHistoryIcon, InfoCircleIcon, Signals, Favourites } from "../assets/svgs";
import translates from "../translates.json";

import { Table } from "../components/Table";
import { Button } from "../components/Button";

import "../assets/css/main-theme.css";

const stories = storiesOf("Trade", module);

stories.add("Trade Table", () => {
  const [mobileExpand, setMobileExpand] = useState(null);
  const { width } = useMobileWidth();
  let mobile = width <= 1200;

  const data = [
    {
      symbol: "AUDCAD",
      sell: 0.19032,
      sellRise: false,
      buy: 0.23233,
      buyRise: true,
      signal: <Signals color="#c38c5c" />,
      sellBtn: <Button
        element={"button"}
        size={"btn-lg"}
        type={"btn-secondary"}
        label={"Sell"}
        active={true}
        customStyles={{
          height: "30px",
        }}
        onClick={() => console.log("sell")}
      />,
      buyBtn: <Button
        element={"button"}
        size={"btn-lg"}
        type={"btn-secondary"}
        label={"Buy"}
        active={true}
        customStyles={{
          height: "30px",
        }}
        onClick={() => console.log("buy")}
      />,
      charge: 0.04,
      chargeRise: true,
      info: <InfoCircleIcon color="#c38c5c" width="100%" height="100%" />,
      favourites: true,
      _id: "65855f2c52403094f73cd9c0",
    },
    {
      symbol: "BTCUSD",
      sell: 0.19032,
      sellRise: false,
      buy: 0.23233,
      buyRise: true,
      signal: <Signals color="#c38c5c" />,
      sellBtn: <Button
        element={"button"}
        size={"btn-lg"}
        type={"btn-secondary"}
        label={"Sell"}
        active={true}
        customStyles={{
          height: "30px",
        }}
        onClick={() => console.log("sell")}
      />,
      buyBtn: <Button
        element={"button"}
        size={"btn-lg"}
        type={"btn-secondary"}
        label={"Buy"}
        active={true}
        customStyles={{
          height: "30px",
        }}
        onClick={() => console.log("buy")}
      />,
      charge: 0.01,
      chargeRise: false,
      info: <InfoCircleIcon color="#c38c5c" width="100%" height="100%" />,
      favourites: false,
      _id: "65855eff52403094f73cd984",
    },
  ];

  const transactionHeader = [
    {
      name: "Symbol",
      mobileWidth: 100 / 3,
      width: 100 / 9,
      id: 0,
      height: "40px",
    },
    {
      name: "Sell",
      mobileWidth: 100 / 3,
      width: 100 / 9,
      id: 1,
      height: "40px",
    },
    {
      name: "Signal",
      mobileWidth: 100 / 3,
      width: 100 / 9,
      id: 2,
      height: "40px",
    },
    {
      name: "",
      mobileWidth: 100 / 3,
      width: 100 / 8,
      id: 3,
      height: "40px",
    },
    {
      name: "",
      mobileWidth: 100 / 3,
      width: 100 / 8,
      id: 4,
      height: "40px",
    },
    {
      name: "Buy",
      mobileWidth: 100 / 3,
      width: 100 / 9,
      id: 5,
      height: "40px",
    },
    {
      name: "Charge, %",
      mobileWidth: 100 / 3,
      width: 100 / 9,
      id: 4,
      height: "40px",
    },
    {
      name: "",
      mobileWidth: 100 / 3,
      width: 5,
      id: 4,
      height: "40px",
    },
    {
      name: "",
      mobileWidth: 100 / 3,
      width: 5,
      id: 4,
      height: "40px",
    },
  ];

  const handleSignal = (id) => {
    console.log(id)
  };

  const handleSellBuy = (symbol) => {
    console.log(symbol);
  };

  const handleFavourites = (id, status) => {
    console.log(id, status);
  };

  let mobileExpandFunc = (id) => {
    if (width <= 1200) {
      if (id !== mobileExpand) {
        setMobileExpand(id);
      } else {
        setMobileExpand(null);
      }
    }
  };

  const transactionsTableEmpty = {
    label: "No data",
    icon: <NoHistoryIcon />,
  };

  let tableData;
  tableData = data?.map((item, index) => {
    let symbol = item?.symbol.toUpperCase();
    let sell = item?.sell;
    let sellRise = item?.sellRise;
    let signal = item?.signal;
    let sellBtn = item?.sellBtn;
    let buyBtn = item?.buyBtn;
    let buy = item?.buy;
    let buyRise = item?.buyRise;
    let charge = item?.charge;
    let chargeRise = item?.chargeRise;
    let info = item?.info;
    let favourites = item?.favourites;
    let expandBtnStyle = { height: "40px" };

    if (!mobile) expandBtnStyle = { display: "none" };

    return (
      <div
        className={`table-parent ${
          mobileExpand == item._id ? "active" : ""
        } dashboard-table-parent`}
        key={index}
        onClick={mobile ? () => mobileExpandFunc(item._id) : null}
      >
        <div className="table">
          <div
            className={`td col ${
              transactionHeader[index].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              width: `${
                mobile ? transactionHeader[index].mobileWidth : transactionHeader[index].width
              }%`,
            }}
          >
            <span>{symbol}</span>
          </div>
          <div
            className={`td ${
              transactionHeader[index].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              color: sellRise ? "rgba(103, 190, 122, 0.6)" : "rgba(232, 116, 80, 0.6)",
              width: `${
                mobile ? transactionHeader[index].mobileWidth : transactionHeader[index].width
              }%`
            }}
          >
            {sell}
          </div>
          <div
            className={`td ${
              transactionHeader[index].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              width: `${
                mobile ? transactionHeader[index].mobileWidth : transactionHeader[index].width
              }%`
            }}
          > 
            <span 
              onClick={() => handleSignal(item?._id)}
              style={{ width: "24px", height: "24px" }}
            >
              {signal}
            </span>
          </div>
          <div
            className={`td ${
              transactionHeader[index].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              width: `${
                mobile ? transactionHeader[index].mobileWidth : transactionHeader[index].width
              }%`
            }}
          >
            {sellBtn}
          </div>
          <div
            className={`td ${
              transactionHeader[index].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              width: `${
                mobile ? transactionHeader[index].mobileWidth : transactionHeader[index].width
              }%`
            }}
          >
            {buyBtn}
          </div>
          <div
            className={`td ${
              transactionHeader[index].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              color: buyRise ? "rgba(103, 190, 122, 0.6)" : "rgba(232, 116, 80, 0.6)",
              width: `${
                mobile ? transactionHeader[index].mobileWidth : transactionHeader[index].width
              }%`
            }}
          >
            {buy}
          </div>
          <div
            className={`td ${
              transactionHeader[index].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              color: chargeRise ? "rgba(103, 190, 122, 0.6)" : "rgba(232, 116, 80, 0.6)",
              width: `${
                mobile ? transactionHeader[index].mobileWidth : transactionHeader[index].width
              }%`
            }}
          >
            {charge}
          </div>
          <div
            className={`td ${
              transactionHeader[index].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              width: `${
                mobile ? transactionHeader[index].mobileWidth : transactionHeader[index].width
              }%`
            }}
          >
            <span
              onClick={() => handleSellBuy(symbol)}
              style={{ width: "28px", height: "28px" }}
            >
              {info}
            </span>
          </div>
          <div
            className={`td ${
              transactionHeader[index].mobileWidth ? true : false
            } dashboard-td`}
            style={{
              width: `${
                mobile ? transactionHeader[index].mobileWidth : transactionHeader[index].width
              }%`
            }}
          >
            <span 
              style={{
                width: "24px",
                height: "24px"
              }}
              onClick={() => handleFavourites(item._id, favourites)}
            >
              <Favourites favourites={favourites} color="#c38c5c" width="100%" height="100%" />
            </span>
          </div>
        </div>
        <div 
          className="icon-place" 
          style={expandBtnStyle}
        >
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="table-mobile">
          <div className="table-mobile-content">
            <div className="td">
              <div className="mobile-ttl">{transactionHeader[0].name}</div>
              <span>{symbol}</span>
            </div>
            <div className="td">
              <div className="mobile-ttl">{transactionHeader[1].name}</div>
              <span>{sell}</span>
            </div>
            <div className="td">
              <div className="mobile-ttl">{transactionHeader[5].name}</div>
              <span>{buy}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <BrowserRouter>
      <Table
        tableData={tableData}
        tableFooter={null}
        tableHead={transactionHeader}
        customStyles={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.01)",
          backdropFilter: "blur(5px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
        customHeadStyles={{
          height: "81px",
          alignItems: "center",
        }}
        tableEmptyData={transactionsTableEmpty}
        tableEmpty={transactionsTableEmpty}
        translates={translates}
        // loading={loading}
      />
    </BrowserRouter>
  );
});
