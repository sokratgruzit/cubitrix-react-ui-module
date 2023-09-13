import { useState } from "react";

// hooks
import { useMobileWidth } from "../../hooks/useMobileWidth";

// components
import { AccountSummary } from "../AccountSummary";
import { Button } from "../Button";
import { Table } from "../Table";
import { Visual } from "../Visual";

// svgs
import { AddSquareIcon } from "../../assets/svgs";

// styles
import "../../assets/css/main-theme.css";
import "./Staking.css";
import { Footer } from "../Footer";

export const Staking = ({
  accountSummaryData,
  tableHead,
  stakersRecord,
  loading,
  stackContractInfo,
  handlePopUpOpen,
  tableEmptyData,
  isFetching,
  hasMoreData,
  infiniteScrollRef,
  unstakeLoading,
  harvestLoading,
  isActive,
  currencyStakes = [],
  currencyStakesLoading,
  currencyStakesTableHead,
}) => {
  const [mobileExpand, setMobileExpand] = useState(null);
  const { width, mobile } = useMobileWidth();

  const [selectedTab, setSelectedTab] = useState("staking");

  let tableData = null;

  if (selectedTab === "staking") {
    tableData = stakersRecord.map((item, index) => {
      if (item.unstaked) return false;
      return (
        <div
          className={`table-parent ${mobileExpand === index ? "active" : ""}`}
          key={index}
        >
          <div
            className={"table"}
            style={{
              width: "calc(100% - 50px)",
              cursor: "pointer",
            }}
            onClick={() => {
              mobileExpandFunc(index);
            }}
          >
            {tableHead?.slice(0, 4).map((i, index) => (
              <div
                key={index}
                className={`td col ${i.mobileWidth ? true : false}`}
                style={{ width: `${mobile ? i.mobileWidth : i.width}%` }}
              >
                <span>
                  {
                    [
                      (item.amount / 10 ** 18)?.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }),
                      item.staketime,
                      item.unstaketime,
                      parseFloat(item.realtimeRewardPerBlock).toFixed(10),
                    ][index]
                  }
                </span>
              </div>
            ))}
          </div>
          <div className="table-more" />
          <div
            className="icon-place"
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() => {
              mobileExpandFunc(index);
            }}
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
          <div className="table-mobile" style={{ display: "block", cursor: "initial" }}>
            <div className="table-mobile-content">
              {width <= 1300 && (
                <>
                  {[0, 1].map((index) => (
                    <div className="td" key={index}>
                      <div className="mobile-ttl">{tableHead[index].name}</div>
                      <span>
                        {index === 1 && item.staketime}
                        {index === 2 && item.unstaketime}
                      </span>
                    </div>
                  ))}
                </>
              )}
              {width <= 400 && (
                <>
                  {[2].map((index) => (
                    <div className="td" key={index}>
                      <div className="mobile-ttl">{tableHead[index].name}</div>
                      <span>{parseFloat(item?.realtimeRewardPerBlock).toFixed(10)}</span>
                    </div>
                  ))}
                </>
              )}
              <>
                {[3].map((index) => (
                  <div className="td" key={index}>
                    <div className="mobile-ttl">Earn Reward</div>
                    <span>ATR</span>
                  </div>
                ))}
              </>
              <div className="table-buttons">
                {[4, 5].map((index1) => (
                  <div className="td" key={index1}>
                    <Button
                      element="staking-button"
                      label={
                        index1 === 4
                          ? unstakeLoading
                            ? "Loading..."
                            : "Unstake"
                          : harvestLoading
                          ? "Loading..."
                          : "Harvest"
                      }
                      active={index1 === 4}
                      customStyles={{ borderRadius: "32px" }}
                      onClick={() => tableHead[index1].onClick(index)}
                      disabled={
                        !isActive || index1 === 4
                          ? item.unstaked ||
                            Number(item?.[0]) > Math.floor(new Date().getTime() / 1000) ||
                            unstakeLoading
                          : harvestLoading || item.realtimeRewardPerBlock == 0
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    tableData = currencyStakes.map((item, index) => {
      if (item.unstaked) return false;
      return (
        <div
          className={`table-parent ${mobileExpand === index ? "active" : ""}`}
          key={index}
        >
          <div
            className={"table"}
            style={{
              width: "calc(100% - 50px)",
              cursor: "pointer",
            }}
            onClick={() => {
              mobileExpandFunc(index);
            }}
          >
            {currencyStakesTableHead?.slice(0, 4).map((i, index) => (
              <div
                key={index}
                className={`td col ${i.mobileWidth ? true : false}`}
                style={{ width: `${mobile ? i.mobileWidth : i.width}%` }}
              >
                <span>
                  {
                    [
                      `${item.amount?.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} ${item.currency?.toUpperCase()}`,
                      item.createdAt,
                      item.expires,
                      `${item.percentage.toFixed(2)} %`,
                    ][index]
                  }
                </span>
              </div>
            ))}
          </div>
          <div className="table-more" />
        </div>
      );
    });
  }

  let mobileExpandFunc = (id) => {
    if (id !== mobileExpand) {
      setMobileExpand(id);
    } else {
      setMobileExpand(null);
    }
  };

  return (
    <div className="staking-main">
      <div className="staking-content">
        <div>
          <Visual
            element={"table-header"}
            label={"Stake"}
            description={"You can stake and then earn atar reward"}
            fontSize={"font-20"}
            customStyles={{ border: "none", padding: "0" }}
          />
          <AccountSummary
            data={accountSummaryData}
            stackContractInfo={stackContractInfo}
            label={"Total Stake"}
          />
        </div>
        <div className={"staking-content-main"}>
          <div className="staking_table_top_wrapper">
            <div className="tabsWrap">
              <div
                className={`${selectedTab === "staking" ? "selected" : ""}`}
                onClick={() => setSelectedTab("staking")}
              >
                Staking
              </div>
              <div
                className={selectedTab === "currency stakes" ? "selected" : ""}
                onClick={() => setSelectedTab("currency stakes")}
              >
                Currency Staking
              </div>
              <span
                className={`highlight-selected ${
                  selectedTab === "staking" ? "selected-data" : "selected-security"
                }`}
              ></span>
            </div>
            <Button
              element={"referral-button"}
              label={"Create Staking"}
              icon={<AddSquareIcon />}
              onClick={handlePopUpOpen}
            />
          </div>

          <Table
            type={"table-version"}
            tableHead={selectedTab === "staking" ? tableHead : currencyStakesTableHead}
            mobile={true}
            tableData={
              selectedTab === "stakes" && stakersRecord.length < 1 ? (
                false
              ) : selectedTab === "currency stakes" && currencyStakes.length < 1 ? (
                false
              ) : (
                <>
                  {tableData}
                  {isFetching && (
                    <div className="table-loading-container" style={{ height: "50px" }}>
                      <div
                        className="table-loading"
                        style={{ height: "30px", width: "30px" }}
                      />
                    </div>
                  )}
                  {!isFetching && hasMoreData && (
                    <div style={{ minHeight: "1px" }} ref={infiniteScrollRef} />
                  )}
                </>
              )
            }
            tableEmpty={true}
            tableEmptyData={tableEmptyData}
            loading={
              (selectedTab === "stakes" && loading) ||
              (selectedTab === "currency stakes" && currencyStakesLoading)
            }
            customTableMoreStyles={{
              height: "80px",
              display: "flex",
            }}
            customHeadStyles={{
              width: "calc(100% - 40px)",
            }}
            customStyles={{
              maxHeight: "490px",
              overflowY: "scroll",
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
