import React, {Fragment, useState} from "react";

import {Table} from "../../../Table";
import {Visual} from "../../../Visual/Visual";
import {Link} from "react-router-dom";
import {useMobileWidth} from "../../../../hooks/useMobileWidth";
import {Account, AccountType} from "../../../../assets/svgs";
import {TableElement} from "../../../TableElement";
import translates from "../../../../translates.json";

import "./DashboardTable.css";

export const DashboardTable = ({
  type,
  header,
  description,
  rightPanelData,
  footer,
  tableHeader,
  referralCardsData,
  data,
  accountAddress,
  tableEmpty,
  loading,
  tableButtons,
  tableEmptyValue,
  tablePagination,
  paginationCurrent,
  paginationTotal,
  paginationEvent,
}) => {
  let element = null;

  const [mobileExpand, setMobileExpand] = useState(null);
  const {width} = useMobileWidth();

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

  const tableVisualMore = (
    <div className={"dashboard-table-head-wrap"}>
      {rightPanelData?.map((item, index) => (
        <div key={index} className={"dashboard-table-head"}>
          <h3 className={`font-20`}>
            {item?.value?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            AONE
          </h3>
          <p className={`font-16`}>{item?.title}</p>
        </div>
      ))}
    </div>
  );
  const tableFooter = (
    <div className={"dashboard-table-footer"}>
      <Link to={footer?.link}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.50018 17.9999C8.49931 17.8683 8.52448 17.7378 8.57426 17.616C8.62403 17.4941 8.69741 17.3833 8.79018 17.2899L13.3802 12.7099C13.4737 12.6168 13.5479 12.5062 13.5985 12.3844C13.6491 12.2625 13.6751 12.1319 13.6751 11.9999C13.6751 11.868 13.6491 11.7374 13.5985 11.6155C13.5479 11.4937 13.4737 11.383 13.3802 11.2899L8.79018 6.70994C8.69694 6.6167 8.62298 6.50601 8.57252 6.38419C8.52206 6.26237 8.49609 6.1318 8.49609 5.99994C8.49609 5.86808 8.52206 5.73751 8.57252 5.61569C8.62298 5.49387 8.69694 5.38318 8.79018 5.28994C8.88342 5.1967 8.99411 5.12274 9.11593 5.07228C9.23775 5.02182 9.36832 4.99585 9.50018 4.99585C9.63204 4.99585 9.76261 5.02182 9.88443 5.07228C10.0063 5.12274 10.1169 5.1967 10.2102 5.28994L14.7902 9.87994C15.3377 10.4499 15.6436 11.2096 15.6436 11.9999C15.6436 12.7903 15.3377 13.55 14.7902 14.1199L10.2102 18.7099C10.0701 18.8505 9.89145 18.9462 9.69687 18.985C9.50229 19.0238 9.30057 19.0039 9.11733 18.9278C8.93408 18.8517 8.77758 18.7229 8.6677 18.5577C8.55782 18.3925 8.49951 18.1983 8.50018 17.9999Z"
            fill="#C38C5C"
          />
        </svg>
        <p className={`font-16`}>{footer?.label}</p>
      </Link>
    </div>
  );

  const tableFooterPagination = (
    <div
      className={"dashboard-table-footer"}
      style={{
        display: `${data?.length ? "flex" : "none"}`,
        padding: `${data?.length ? "20px" : "0px"}`,
      }}
    >
      <TableElement
        color={"#C38C5C"}
        type={"pagination"}
        currentPage={paginationCurrent}
        totalCount={paginationTotal}
        onPageChange={paginationEvent}
      />
    </div>
  );

  let tableData;

  if (type === "transactions") {
    let tableData;
    tableData = data?.map((item, index) => {
      let txType = item?.tx_type;
      let tockenCount = item?.tx_options?.tokenCount;
      let toAccType = item?.tx_options?.toAccType?.toUpperCase();
      let fromAccType = item?.tx_options?.fromAccType?.toUpperCase();
      let fromAmount = item?.tx_options?.fromAmount;
      let amountIn = item?.tx_options?.amount;
      let currency = item?.tx_options?.currency?.toUpperCase();
      let amount = item?.amount?.toFixed(2);

      const createdAt = new Date(item?.createdAt);
      const createdTime = createdAt.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      return (
        <div
          className={`table-parent ${
            mobileExpand == item._id ? "active" : ""
          } dashboard-table-parent`}
          key={index}
          onClick={() => {
            mobileExpandFunc(item._id);
          }}
        >
          <div className="table">
            <div
              className={`td col ${
                tableHeader[0].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[0].mobileWidth : tableHeader[0].width
                }%`,
              }}
            >
              {/* <Account type={'spl'} /> */}
              <span>{item?.from}</span>
            </div>
            <div
              className={`td ${
                tableHeader[1].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[1].mobileWidth : tableHeader[1].width
                }%`,
              }}
            >
              {/* <AccountType type={'top-up'} /> */}
              {/* Render based on tx_type being "bonus" */}
              {item?.tx_type === "bonus" ? (
                <span>
                  {item?.tx_type}-{item?.tx_options?.type}
                </span>
              ) : (
                <span>{item?.tx_type}</span>
              )}

              {/* Render based on tx_type being "transfer" and accountAddress comparison */}
              <span>
                {item?.tx_type === "transfer" &&
                  (accountAddress === item?.from ? (
                    <span>{translates.transfer_out.en}</span>
                  ) : (
                    <span>{translates.transfer_in.en}</span>
                  ))}
              </span>
            </div>
            <div
              className={`td ${
                tableHeader[2].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[2].mobileWidth : tableHeader[2].width
                }%`,
              }}
            >
              <span>
                {txType === "exchange"
                  ? ` ${fromAmount} ${
                      fromAccType == "ATAR" ? "AONE" : fromAccType
                    }`
                  : ""}
                {txType === "currency stake" ? ` ${amountIn} ${toAccType}` : ""}
                {txType === "deposit" ? ` ${amount} AONE` : ""}
                {txType === "unstake" ? ` ${amount} AONE` : ""}
                {txType === "payment" ? ` ${tockenCount} AONE` : ""}
                {txType === "transfer"
                  ? ` ${amount} ${currency || "AONE"}`
                  : ""}
                {txType === "Internal Transfer"
                  ? ` ${amount} ${currency || "AONE"}`
                  : ""}
                {txType === "bonus" ? ` ${amount}  AONE` : ""}
                {txType === "withdraw"
                  ? ` ${amount} ${currency == "ATR" ? "AONE" : currency}`
                  : ""}
              </span>
            </div>
            <div
              className={`td ${
                tableHeader[3].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[3].mobileWidth : tableHeader[3].width
                }%`,
              }}
            >
              <span>{createdTime}</span>
            </div>

            <div
              className={`td ${
                tableHeader[4].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[4].mobileWidth : tableHeader[4].width
                }%`,
              }}
            >
              <span>{item?.tx_status}</span>
            </div>
          </div>
          <div className="table-more" />
          <div className="icon-place" style={{height: "40px"}}>
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
                <div className="mobile-ttl">{tableHeader[0].name}</div>
                <span>{item?.from}</span>
              </div>
              <div className="td">
                <div className="mobile-ttl">
                  {tableHeader[4].name} {tableHeader[4]?.icon}
                </div>
                <span>{item?.tx_status}</span>
              </div>
              <div className="td">
                <div className="mobile-ttl">
                  {tableHeader[3].name} {tableHeader[3]?.icon}
                </div>
                <span>{createdTime}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (element = (
      <>
        <Table
          tableHeadMore={
            <div className="dashboard-table-header-container">
              <Visual
                element={"table-header"}
                label={header}
                description={description}
                fontSize={"font-20"}
                customStyles={{border: "none", padding: "0", width: "100%"}}
                buttons={tableVisualMore}
                labelCustomStyles={{color: "#C38C5C"}}
              />
            </div>
          }
          tableHead={tableHeader}
          tableData={data?.length ? tableData : false}
          tableFooter={tableFooter}
          mobileProps={mobile}
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
          tableEmptyData={tableEmpty}
          loading={loading}
        />
      </>
    ));
  }
  if (type === "referral-code") {
    tableData = data?.map((item, index) => {
      return (
        <div
          className={`table-parent ${
            mobileExpand == item._id ? "active" : ""
          } dashboard-table-parent`}
          key={index}
          onClick={() => {
            mobileExpandFunc(item._id);
          }}
        >
          <div className="table">
            <div
              className={`td col ${
                tableHeader[0].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[0].mobileWidth : tableHeader[0].width
                }%`,
              }}
            >
              <span>{item?._id?.referrral}</span>
            </div>
            <div
              className={`td col ${
                tableHeader[1].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[1].mobileWidth : tableHeader[1].width
                }%`,
              }}
            >
              <span>{item?._id?.from}</span>
            </div>
            <div
              className={`td col ${
                tableHeader[2].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[2].mobileWidth : tableHeader[1].width
                }%`,
              }}
            >
              <span>
                {item?._id?.referral_module === "uni"
                  ? "UNI LVL"
                  : `LVL ${item?._id?.lvl}`}
              </span>
            </div>
            <div
              className={`td col ${
                tableHeader[3].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[3].mobileWidth : tableHeader[2].width
                }%`,
              }}
            >
              <span>{item?._id?.percent}</span>
            </div>
            <div
              className={`td col ${
                tableHeader[4].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[4].mobileWidth : tableHeader[3].width
                }%`,
              }}
            >
              <span>{item?.amount?.toFixed(2) + " AONE"}</span>
            </div>
          </div>
          <div className="table-more" />
          <div className="icon-place" style={{height: "40px"}}>
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
                <div className="mobile-ttl">{tableHeader[0].name}</div>
                <span>{item._id.referrral}</span>
              </div>
              <div className="td">
                <div className="mobile-ttl">{tableHeader[2].name}</div>
                {item._id.referral_module === "uni"
                  ? "UNI LVL"
                  : `LVL ${item._id.lvl}`}
              </div>
              <div className="td">
                <div className="mobile-ttl">{tableHeader[3].name}</div>
                <span>{item._id.percent}</span>
              </div>
              {width < 500 && (
                <div className="td">
                  <div className="mobile-ttl">{tableHeader[4].name}</div>
                  <span>{item?.amount?.toFixed() + " AONE"}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    });
    return (element = (
      <div className="dashboard-table-referral-wrapper">
        {referralCardsData && (
          <>
            <h2 className="dashboard-table-header-title">Referral</h2>
            <div className="dashboard-table-referral-card-container">
              {referralCardsData?.map((item, index) => (
                <div
                  key={index}
                  className={`dashboard-table-referral-card-wrap ${
                    item.active
                      ? "dashboard-table-referral-card-wrap__active"
                      : ""
                  }`}
                >
                  <h3>{item.title}</h3>
                  <div className="dashboard-table-referral-card">
                    {item?.data?.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className={"dashboard-table-referral-card-content"}
                        >
                          <h4 className={`font-12`}>{item?.title}</h4>
                          <p>
                            {item?.title === "Total Comission"
                              ? item?.value?.toFixed(2)
                              : item?.value}
                          </p>
                        </div>
                        {index === 0 && (
                          <svg
                            width="1"
                            height="26"
                            viewBox="0 0 1 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line
                              opacity="0.1"
                              x1="0.5"
                              y1="2.18557e-08"
                              x2="0.499999"
                              y2="26"
                              stroke="white"
                            />
                          </svg>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        <Table
          tableHeadMore={
            <div className="dashboard-table-header-container">
              <Visual
                element={"table-header"}
                label={header}
                description={description}
                fontSize={"font-20"}
                customStyles={{border: "none", padding: "0"}}
                labelCustomStyles={{color: "#C38C5C"}}
                buttons={tableButtons}
                centerButtons={true}
              />
            </div>
          }
          tableData={data.length ? tableData : false}
          tableFooter={tablePagination ? tableFooterPagination : tableFooter}
          tableHead={tableHeader}
          customStyles={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.01)",
            backdropFilter: "blur(5px)",
          }}
          customHeadStyles={{
            padding: "10px 20px",
            borderBottom: "px solid rgba(255, 255, 255, 0.1)",
            width: "100%",
            background: "none",
          }}
          customTableMoreStyles={
            {
              // display: "none",
            }
          }
          tableEmptyData={tableEmpty}
          loading={loading}
          tableEmpty={tableEmptyValue}
        />
      </div>
    ));
  }
  if (type === "referral-history") {
    tableData = data?.map((item, index) => {
      const createdAt = new Date(item?.createdAt);
      const createdTime = createdAt.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      return (
        <div
          className={`table-parent ${
            mobileExpand == item._id ? "active" : ""
          } dashboard-table-parent`}
          key={index + item}
          onClick={() => {
            mobileExpandFunc(item._id);
          }}
        >
          <div className="table">
            <div
              className={`td col ${
                tableHeader[0].mobileWidth ? true : false
              } dashboard-td table-coin-row`}
              style={{
                width: `${
                  mobile ? tableHeader[0].mobileWidth : tableHeader[0].width
                }%`,
              }}
            >
              <span>{item?.from}</span>
            </div>
            <div
              className={`td ${
                tableHeader[1].mobileWidth ? true : false
              } dashboard-td table-coin-row dashboard-table-button`}
              style={{
                width: `${
                  mobile ? tableHeader[1].mobileWidth : tableHeader[1].width
                }%`,
              }}
            >
              <span>Lvl: {item?.tx_options?.lvl}</span>
            </div>
            <div
              className={`td ${
                tableHeader[2].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[2].mobileWidth : tableHeader[2].width
                }%`,
              }}
            >
              <span>{item?.amount + " AONE"}</span>
            </div>
            <div
              className={`td ${
                tableHeader[3].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[3].mobileWidth : tableHeader[3].width
                }%`,
              }}
            >
              <span>
                {item?.tx_status == "approved" ? "Confirmed" : "Pending"}
              </span>
            </div>
            <div
              className={`td ${
                tableHeader[4].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[4].mobileWidth : tableHeader[4].width
                }%`,
              }}
            >
              <span>{createdTime}</span>
            </div>
          </div>
          <div className="table-more" />
          <div className="icon-place" style={{height: "40px"}}>
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
                <div className="mobile-ttl">{tableHeader[1].name}</div>
                {item?.tx_options?.referral_module === "uni"
                  ? "UNI LVL"
                  : `LVL ${item?.tx_options?.lvl}`}
              </div>
              <div className="td">
                <div className="mobile-ttl">{tableHeader[3].name}</div>
                <span>
                  {item?.tx_status == "approved" ? "Confirmed" : "Pending"}
                </span>
              </div>
              <div className="td">
                <div className="mobile-ttl">{tableHeader[4].name}</div>
                <span>{createdTime}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (element = (
      <>
        <Table
          tableHeadMore={
            <div className="dashboard-table-header-container">
              <Visual
                element={"table-header"}
                label={header}
                description={description}
                fontSize={"font-20"}
                customStyles={{border: "none", padding: "0", width: "100%"}}
                labelCustomStyles={{color: "#C38C5C"}}
                buttons={tableButtons}
              />
            </div>
          }
          tableData={data.length ? tableData : false}
          tableFooter={tablePagination ? tableFooterPagination : tableFooter}
          tableHead={tableHeader}
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
          tableEmptyData={tableEmpty}
          loading={loading}
        />
      </>
    ));
  }
  if (type === "referral-history-binary") {
    tableData = data?.map((item, index) => {
      const createdAt = new Date(item?.createdAt);
      const createdTime = createdAt.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      return (
        <div
          className={`table-parent ${
            mobileExpand == item._id ? "active" : ""
          } dashboard-table-parent`}
          key={index + item}
          onClick={() => {
            mobileExpandFunc(item._id);
          }}
        >
          <div className="table">
            <div
              className={`td col ${
                tableHeader[0].mobileWidth ? true : false
              } dashboard-td table-coin-row`}
              style={{
                width: `${
                  mobile ? tableHeader[0].mobileWidth : tableHeader[0].width
                }%`,
              }}
            >
              <span>{item?.amount + " AONE"}</span>
            </div>
            <div
              className={`td ${
                tableHeader[1].mobileWidth ? true : false
              } dashboard-td table-coin-row dashboard-table-button`}
              style={{
                width: `${
                  mobile ? tableHeader[1].mobileWidth : tableHeader[1].width
                }%`,
              }}
            >
              <span>{item?.from}</span>
            </div>
            <div
              className={`td ${
                tableHeader[2].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[2].mobileWidth : tableHeader[2].width
                }%`,
              }}
            >
              <span>
                {item?.tx_status == "approved" ? "Confirmed" : "Pending"}
              </span>
            </div>
            <div
              className={`td ${
                tableHeader[3].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile ? tableHeader[3].mobileWidth : tableHeader[3].width
                }%`,
              }}
            >
              <span>{createdTime}</span>
            </div>
          </div>
          <div className="table-more" />
          <div className="icon-place" style={{height: "40px"}}>
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
                <div className="mobile-ttl">Status</div>
                <span>
                  {item?.tx_status == "approved" ? "Confirmed" : "Pending"}
                </span>
              </div>
              <div className="td">
                <div className="mobile-ttl">Date</div>
                <span>{createdTime}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (element = (
      <>
        <Table
          tableHeadMore={
            <div className="dashboard-table-header-container">
              <Visual
                element={"table-header"}
                label={header}
                description={description}
                fontSize={"font-20"}
                customStyles={{border: "none", padding: "0", width: "100%"}}
                labelCustomStyles={{color: "#C38C5C"}}
                buttons={tableButtons}
              />
            </div>
          }
          tableData={data.length ? tableData : false}
          tableFooter={tablePagination ? tableFooterPagination : tableFooter}
          tableHead={tableHeader}
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
          tableEmptyData={tableEmpty}
          loading={loading}
        />
      </>
    ));
  }

  return element;
};
