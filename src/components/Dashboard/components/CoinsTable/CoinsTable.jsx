import React, { useState, useEffect } from "react";

// components
import { Table } from "../../../Table";

// hooks
import { useMobileWidth } from "../../../../hooks/useMobileWidth";

// css
import "./CoinsTable.css";
import { TriangleArrow } from "../../../../assets/svgs";

export const CoinsTable = ({ coinsList, loadCoinsList }) => {
  const [coinsData, setCoinsData] = useState(coinsList);
  useEffect(() => {
    setCoinsData(coinsList);
  }, [coinsList]);

  // const [coinsData, setCoinsData] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [mobileExpand, setMobileExpand] = useState(false);
  const { width } = useMobileWidth();

  let mobileExpandFunc = (id) => {
    if (width <= 1300) {
      if (id !== mobileExpand) {
        setMobileExpand(id);
      } else {
        setMobileExpand(null);
      }
    }
  };

  let mobile = width <= 1300;

  let coinsTableTh = [
    {
      name: "Market",
      width: 15,
      mobileWidth: `${width <= 500 ? 100 : 45}`,
      id: 0,
    },
    {
      name: "Index Price",
      width: 15,
      mobileWidth: 45,
      id: 1,
      className: `${width <= 500 ? "table-coin-none" : ""}`,
    },
    {
      name: "24h Change",
      width: 15,
      id: 2,
    },
    {
      name: "1h Funding",
      width: 15,
      id: 3,
    },
    {
      name: "Open Interest",
      width: 15,
      id: 2,
    },
    {
      name: "24h Volume",
      width: 15,
      id: 2,
    },
    {
      name: "24h Trades",
      width: 15,
      id: 2,
    },
  ];

  useEffect(() => {
    if (page > 1)
      loadCoinsList(
        page,
        () => setLoading(true),
        () => {
          setTimeout(() => {
            setLoading(false);
          }, 200);
        },
      );
  }, [page]);

  const formatNumber = (num) => {
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
      notation: "compact",
      compactDisplay: "short",
    });
  };

  let coinsTableData;
  coinsTableData = coinsData?.map((item, index) => {
    return (
      <div
        className={`table-parent ${mobileExpand == item.id ? "active" : ""}`}
        key={index}
        onClick={() => {
          mobileExpandFunc(item.id);
        }}
      >
        <div className="table">
          <div
            className={`td col ${
              coinsTableTh[0].mobileWidth ? true : false
            } table-coin-row`}
            style={{
              width: `${mobile ? coinsTableTh[0].mobileWidth : coinsTableTh[0].width}%`,
            }}
          >
            <img className="table-coin-img" src={item.image} />
            <div className={"table-coin-column"} style={{ gap: "2px" }}>
              <span className="font-16">{item.name}</span>
              <span className="font-14" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                {item.symbol.toUpperCase()}
              </span>
            </div>
          </div>
          {width >= 500 && (
            <div
              className={`td ${coinsTableTh[1].mobileWidth ? true : false}`}
              style={{
                width: `${mobile ? coinsTableTh[1].mobileWidth : coinsTableTh[1].width}%`,
              }}
            >
              <span> ${item.current_price}</span>
            </div>
          )}
          <div
            className={`td ${coinsTableTh[2].mobileWidth ? true : false} table-coin-row`}
            style={{
              width: `${mobile ? coinsTableTh[2].mobileWidth : coinsTableTh[2].width}%`,
            }}
          >
            <span className="top-coins-card-price-change-wrap">
              <TriangleArrow
                className={
                  item.price_change_percentage_24h > 0
                    ? "arrow-positive-change"
                    : "arrow-negative-change"
                }
              />
              <p
                className={
                  item.price_change_percentage_24h > 0
                    ? "positive-change"
                    : "negative-change"
                }
              >
                {Math.abs(item.price_change_24h).toFixed(4)}%
              </p>
            </span>
            {/* <span>{item.price_change_percentage_24h.toFixed(3).split(".")}%</span>
            <span>${item.price_change_24h.toFixed(2).split(".")}</span> */}
          </div>
          <div
            className={`td ${coinsTableTh[3].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? coinsTableTh[3].mobileWidth : coinsTableTh[3].width}%`,
            }}
          >
            <span>-</span>
          </div>
          <div
            className={`td col ${
              coinsTableTh[4].mobileWidth ? true : false
            } table-coin-column`}
            style={{
              width: `${mobile ? coinsTableTh[4].mobileWidth : coinsTableTh[4].width}%`,
            }}
          >
            <p className="table-coin-row" style={{ gap: "5px" }}>
              <span>{item.circulating_supply}</span>
              <span className="coins-table-coin font-12">
                {item.symbol.toUpperCase()}
              </span>
            </p>
            <p>{formatNumber(item.circulating_supply * item.current_price)}</p>
          </div>
          <div
            className={`td col ${coinsTableTh[5].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? coinsTableTh[5].mobileWidth : coinsTableTh[4].width}%`,
            }}
          >
            <span>${item.total_volume}</span>
          </div>
          <div
            className={`td col ${coinsTableTh[6].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? coinsTableTh[6].mobileWidth : coinsTableTh[4].width}%`,
              paddingRight: "0",
            }}
          >
            <span>${item.high_24h}</span>
          </div>
        </div>
        <div className="table-more" />
        <div className="icon-place">
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
            {width < 500 && (
              <div className="td">
                <div className="mobile-ttl">{coinsTableTh[1].name}</div>
                <div className="table-coin-column">
                  <span>${item.current_price}</span>
                </div>
              </div>
            )}
            <div className="td">
              <div className="mobile-ttl">{coinsTableTh[2].name}</div>
              <div className="table-coin-column">
                <span>{item.price_change_percentage_24h.toFixed(3).split(".")}%</span>
                <span>${item.price_change_24h.toFixed(2).split(".")}</span>
              </div>
            </div>
            <div className="td">
              <div className="mobile-ttl">{coinsTableTh[3].name}</div>
              <span>-</span>
            </div>
            <div className="td">
              <div className="mobile-ttl">{coinsTableTh[4].name}</div>
              <div className="table-coin-column">
                <p className="table-coin-row">
                  <span>{item.circulating_supply}</span>
                  <span className="coins-table-coin font-12">
                    {item.symbol.toUpperCase()}
                  </span>
                </p>
                <p>{formatNumber(item.circulating_supply * item.current_price)}</p>
              </div>
            </div>
            <div className="td">
              <div className="mobile-ttl">{coinsTableTh[5].name}</div>
              <span>${item.total_volume}</span>
            </div>
            <div className="td">
              <div className="mobile-ttl">{coinsTableTh[6].name}</div>
              <span>${item.high_24h}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const marketCardsData = [
    {
      title: "Trading Volume",
      value: "$1,698,420,238",
      description: "Exchanged in the last 24h",
    },
    {
      title: "Trading Volume",
      value: "$698,420,238",
      description: "In open positions on Complend",
    },
    {
      title: "Trading Volume",
      value: "420,238",
      description: "Executed in the last 24h",
    },
  ];

  return (
    <div className={"coins-table-container"}>
      <header className={"coins-table-header"}>
        <h2>Marketing Value</h2>
      </header>
      <div className={"coins-table-cards"}>
        {marketCardsData.map((item, index) => (
          <div className="coins-market-card" key={index}>
            <p>
              <span className="font-14">{item.title}</span>
              <span className="font-20">{item.value}</span>
            </p>
            <p className="font-14">{item.description}</p>
          </div>
        ))}
      </div>
      <Table
        type={"table-version"}
        tableHead={coinsTableTh}
        mobile={mobile}
        tableData={
          coinsData.length > 0
            ? coinsTableData
            : [
                <div key={"ts"} className="coins-list-no-data">
                  Loading ...
                </div>,
              ]
        }
        customStyles={{ position: "relative" }}
      />
      {coinsData.length > 0 && (
        <>
          <div className={"coins-table-bg"} />
          <button
            className="coins-table-more-btn font-14"
            onClick={() => setPage((prev) => prev + 1)}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </>
      )}
    </div>
  );
};
