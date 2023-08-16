import React, { useState, useEffect } from "react";

// components
import { Visual } from "../Visual";
import { Table } from "../Table";
import { TableElement } from "../TableElement";
import { DashboardTable } from "../Dashboard/components/DashboardTable/DashboardTable";

// svgs
import { StickyNoteIcon, AddSquareIcon, ReferralPattern, Root } from "../../assets/svgs";

// hooks
import { useMobileWidth } from "../../hooks/useMobileWidth";

// styles
import "./Referral.css";
import { Button } from "../Button";
import { ReferralCard } from "../ReferralCard";
import { Footer } from "../Footer";
import { InfoBox } from "../InfoBox";
import DisabledPage from "../DisabledPage";

export const Referral = ({
  referralHistoryTableHead,
  rebatesTableData,
  referralHistoryTableEmpty,
  referralRebatesTotal,
  referralHistoryTableLoading,
  handleLevelSystem,
  referralBinaryTableEmpty,
  totalBinaryMembers,
  referralHistoryPaginationCurrent,
  referralHistoryPaginationTotal,
  referralHistoryPaginationEvent,
  referralTreeData,
  referralTreeAddClick,
  referralTreeUserClick,
  referralTreeUserBackClick,
  referralBinaryType,
  referralTreeBtnsLeft,
  referralTreeBtnsRight,
  referralTreeActive,
  referralTreeActiveAddress,
  referralAddress,
  referralTreeTableData,
  referralTreeTableHead,
  referralTableType,
  referralTreePaginationCurrent,
  referralTreePaginationTotal,
  referralTreePaginationEvent,
  referralHistoryButtonsRight,
  referralHistoryTableType,
  referralTableTitle,
  referralBackActive,
  isActive,
  uniLVLData,
  disabledAccount,
}) => {
  const [mobileExpand, setMobileExpand] = useState(null);
  const [treeInfo, setTreeInfo] = useState(null);
  const [animateTree, setAnimateTree] = useState(false);
  const [activeTreeInfo, setActiveTreeInfo] = useState(null);
  const [activeAddCopy, setActiveAddCopy] = useState(null);

  const { width } = useMobileWidth();
  let openTreeInfo = (item) => {
    if (item == null) {
      setActiveTreeInfo(null);
      setTreeInfo(null);
      return false;
    }
    if (item.user_address !== null) {
      setActiveTreeInfo(item.user_address);
      let infoObject = [
        {
          title: "Name",
          amount:
            item.joinedAccountMetas.length > 0
              ? item.joinedAccountMetas[0].name
              : "no name",
          icon: false,
        },
        {
          title: "Address",
          amount: item.user_address ? item.user_address : "no address",
          icon: false,
        },
        {
          title: "Level",
          // / Position",
          amount: "Lvl " + item.lvl + "/" + item.side,
          icon: false,
        },
        {
          title: "Staked this month",
          amount:
            item?.joinedAccounts?.[0]?.stakedThisMonth?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) ?? 0,
          icon: false,
        },
        {
          title: "Total Staked",
          amount:
            item.joinedAccounts.length && item.joinedAccounts[0].stakedTotal > 0
              ? item.joinedAccounts[0].stakedTotal?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : 0,
          icon: false,
        },
      ];
      setTreeInfo(infoObject);
    }
  };
  let addCopy = (item) => {
    if (item == null) {
      setActiveAddCopy(null);
      return false;
    }
    if (item.lvl !== null) {
      setActiveAddCopy(item.lvl + "_");
      //  + item.position);
      //  + item.position);
      setTimeout(() => {
        setActiveAddCopy(null);
      }, 1500);
    }
  };

  useEffect(() => {
    if (referralBinaryType == "visual") {
      setAnimateTree(true);
    } else {
      setAnimateTree(false);
    }
  }, [referralBinaryType]);

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

  let referralTreeTableDataBinaryBody;
  if (referralTableType == "binary") {
    referralTreeTableDataBinaryBody = referralTreeTableData?.map((item, index) => {
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
                referralTreeTableHead[0].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile
                    ? referralTreeTableHead[0].mobileWidth
                    : referralTreeTableHead[0].width
                }%`,
              }}
            >
              <span>
                {item.joinedAccountMetas.length > 0
                  ? item.joinedAccountMetas[0].name
                  : "No Name"}
              </span>
              <span>{item?.user_address}</span>
            </div>
            <div
              className={`td ${
                referralTreeTableHead[1].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile
                    ? referralTreeTableHead[1].mobileWidth
                    : referralTreeTableHead[1].width
                }%`,
              }}
            >
              <span>{"Lvl " + item.lvl + "/" + item.side}</span>
            </div>
            <div
              className={`td ${
                referralTreeTableHead[2].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile
                    ? referralTreeTableHead[2].mobileWidth
                    : referralTreeTableHead[2].width
                }%`,
              }}
            >
              <span>
                {item.joinedAccounts.length > 0 && item.joinedAccounts[0].stakedTotal > 0
                  ? item.joinedAccounts[0].stakedTotal?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : 0}
              </span>
            </div>
            <div
              className={`td ${
                referralTreeTableHead[3].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile
                    ? referralTreeTableHead[3].mobileWidth
                    : referralTreeTableHead[3].width
                }%`,
              }}
            >
              <span>{item?.createdAt}</span>
            </div>
          </div>
          <div className="table-more" />
          <div className="icon-place" style={{ height: "40px" }}>
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
              {/*<div className='td'>*/}
              {/*  <div className='mobile-ttl'>{referralCodeTableHead[2].name}</div>*/}
              {/*  <span>{item._id.referrral}</span>*/}
              {/*</div>*/}
              {/*<div className='td'>*/}
              {/*  <div className='mobile-ttl'>{referralCodeTableHead[2].name}</div>*/}
              {/*  {item._id.referral_module === 'uni' ? 'UNI LVL' : `VIP ${item._id.lvl}`}*/}
              {/*</div>*/}
              {/*<div className='td'>*/}
              {/*  <div className='mobile-ttl'>{referralCodeTableHead[3].name}</div>*/}
              {/*  <span>{item._id.percent}</span>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      );
    });
  }
  if (referralTableType == "uni") {
    referralTreeTableDataBinaryBody = referralTreeTableData?.map((item, index) => {
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
                referralTreeTableHead[0].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile
                    ? referralTreeTableHead[0].mobileWidth
                    : referralTreeTableHead[0].width
                }%`,
              }}
            >
              <span>
                {item.joinedAccountMetas.length > 0
                  ? item.joinedAccountMetas[0].name
                  : "No Name"}
              </span>
              <span>{item?.user_address}</span>
            </div>
            <div
              className={`td ${
                referralTreeTableHead[1].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile
                    ? referralTreeTableHead[1].mobileWidth
                    : referralTreeTableHead[1].width
                }%`,
              }}
            >
              <span>{"Lvl " + item.lvl}</span>
            </div>
            <div
              className={`td ${
                referralTreeTableHead[2].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile
                    ? referralTreeTableHead[2].mobileWidth
                    : referralTreeTableHead[2].width
                }%`,
              }}
            >
              <span>{uniLVLData?.[item?.lvl - 1] ?? 0}%</span>
            </div>
            <div
              className={`td ${
                referralTreeTableHead[3].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile
                    ? referralTreeTableHead[3].mobileWidth
                    : referralTreeTableHead[3].width
                }%`,
              }}
            >
              <span>
                {item.joinedAccounts.length > 0 && item.joinedAccounts[0].stakedTotal > 0
                  ? item.joinedAccounts[0].stakedTotal
                  : 0}
              </span>
            </div>
            <div
              className={`td ${
                referralTreeTableHead[4].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile
                    ? referralTreeTableHead[4].mobileWidth
                    : referralTreeTableHead[4].width
                }%`,
              }}
            >
              <span>{item?.joinedTransactions?.[0]?.totalAmount ?? 0}</span>
            </div>
            <div
              className={`td ${
                referralTreeTableHead[5].mobileWidth ? true : false
              } dashboard-td`}
              style={{
                width: `${
                  mobile
                    ? referralTreeTableHead[5].mobileWidth
                    : referralTreeTableHead[5].width
                }%`,
              }}
            >
              <span>{item?.createdAt}</span>
            </div>
          </div>
          <div className="table-more" />
          <div className="icon-place" style={{ height: "40px" }}>
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
              {/*<div className='td'>*/}
              {/*  <div className='mobile-ttl'>{referralCodeTableHead[2].name}</div>*/}
              {/*  <span>{item._id.referrral}</span>*/}
              {/*</div>*/}
              {/*<div className='td'>*/}
              {/*  <div className='mobile-ttl'>{referralCodeTableHead[2].name}</div>*/}
              {/*  {item._id.referral_module === 'uni' ? 'UNI LVL' : `VIP ${item._id.lvl}`}*/}
              {/*</div>*/}
              {/*<div className='td'>*/}
              {/*  <div className='mobile-ttl'>{referralCodeTableHead[3].name}</div>*/}
              {/*  <span>{item._id.percent}</span>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      );
    });
  }

  const tables = [
    {
      type: referralHistoryTableType,
      header: "Referral History",
      description: `The airdrop history of your weekly referral rebates.`,
      tableHeader: referralHistoryTableHead,
      data: rebatesTableData,
      tableEmpty: referralHistoryTableEmpty,
      loading: referralHistoryTableLoading,
      tablePagination: true,
      tableButtons: referralHistoryButtonsRight,
      paginationCurrent: referralHistoryPaginationCurrent,
      paginationTotal: referralHistoryPaginationTotal,
      paginationEvent: referralHistoryPaginationEvent,
    },
  ];

  const tableFooterPagination = (
    <div
      className={"dashboard-table-footer alo"}
      style={
        {
          // display: `${codesTableData?.length ? "flex" : "none"}`,
          // padding: `${codesTableData?.length ? "20px" : "0px"}`,
        }
      }
    >
      {/*<TableElement*/}
      {/*  color={"#C38C5C"}*/}
      {/*  type={"pagination"}*/}
      {/*  currentPage={referralTreePaginationCurrent}*/}
      {/*  totalCount={referralTreePaginationTotal}*/}
      {/*  onPageChange={referralTreePaginationEvent}*/}
      {/*/>*/}
    </div>
  );
  const rewardBox = [
    {
      title: "Current Stake",
      amount: "1,220.2 CML",
      icon: false,
    },
    {
      title: "Earn",
      amount: "1,020 CML",
      icon: false,
    },
    {
      title: "Claimed Reward",
      amount: "1,132.1 CML",
      icon: false,
    },
  ];
  return (
    <div className={`referral-main-wrap ${disabledAccount ? "disabled-page" : ""}`}>
      {disabledAccount && <DisabledPage />}
      <div className={"referral-main"}>
        <div className="referral-content">
          <div className="referral-content-container">
            <div className={"referral-content-main"}>
              <h2 className="main_ttl">Referral</h2>
              <div className="referral-content-info">
                <span className="font-20">
                  You can earn rebates by inviting traders to trade on Complend
                </span>
                <p className="font-16">
                  After creating your first code, you will receive a Casual status to
                  start, granting you a 2.5% rebate on your referee’s trading fees.
                </p>
              </div>
              <div className="referral-content-info_buttons">
                <Button
                  element={"referral-button"}
                  label={"Level System"}
                  icon={<StickyNoteIcon className={"referral-button-icon"} />}
                  active={true}
                  onClick={handleLevelSystem}
                />
              </div>
              <ReferralPattern className={"referral-content-svg"} />
            </div>
            <div className="referral-card-container">
              <ReferralCard
                type={"total-info"}
                referral={referralAddress}
                totalData={referralRebatesTotal}
                label={"Your Referral Code"}
                labelTwo={"Total Referral Rebates"}
              />
            </div>
          </div>
          <div className="referral-content-bg" />
        </div>
        <div className="referral-binary-wrapper">
          <div className="referral-table-container">
            <Table
              tableHeadMore={
                <div className="dashboard-table-header-container">
                  <Visual
                    element={"table-header"}
                    label={referralTableTitle}
                    // description={`Total Downline Members: ${totalBinaryMembers}`}
                    fontSize={"font-20"}
                    customStyles={{ border: "none", padding: "0" }}
                    buttons={referralTreeBtnsRight}
                    labelCustomStyles={{ color: "#C38C5C" }}
                    centerButtons={true}
                    buttonsLeft={referralTreeBtnsLeft}
                  />
                </div>
              }
              tableData={
                referralTreeTableDataBinaryBody?.length > 0
                  ? referralTreeTableDataBinaryBody
                  : false
              }
              tableFooter={tableFooterPagination}
              tableHead={referralTreeTableHead}
              customHeadStyles={{
                background: "none",
                padding: "10px 20px",
                borderBottom: "px solid rgba(255, 255, 255, 0.1)",
                width: "100%",
              }}
              customTableMoreStyles={{
                display: "none",
              }}
              tableEmptyData={referralBinaryTableEmpty}
              loading={false}
              tableEmulator={
                referralBinaryType === "visual" ? (
                  <div className="referral-tree">
                    <div
                      className={`referral-tree-main ${
                        animateTree && referralTreeActive ? "active" : ""
                      }`}
                    >
                      <div className="referral-tree-item-level referral-tree-item-level-active">
                        <div
                          className={`referral-tree-item`}
                          style={{ width: 100 + "%" }}
                        >
                          <div
                            className="referral-tree-btn"
                            onClick={() => {
                              referralTreeUserBackClick();
                            }}
                          >
                            {referralBackActive && (
                              <div className="referral-tree-item-level-active-back">
                                <span>
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4527 5.64648H3.54603C2.98603 5.64648 2.70603 6.32315 3.1027 6.71982L6.12436 9.74148C6.60853 10.2257 7.39603 10.2257 7.8802 9.74148L9.02937 8.59232L10.9019 6.71982C11.2927 6.32315 11.0127 5.64648 10.4527 5.64648Z"
                                      fill="#C38C5C"
                                    />
                                  </svg>
                                  Back
                                </span>
                              </div>
                            )}
                            <div className="referral-tree-btn-out">
                              <div className={`referral-tree-btn-img`}>
                                <img
                                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                  alt="hi"
                                />
                              </div>
                            </div>
                            <div className={`referral-tree-btn-hash-out`}>
                              <div className="referral-tree-btn-hash">
                                <span>{referralTreeActiveAddress.user_address}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {referralTreeData?.map((item, index) => {
                        return (
                          <>
                            {index < 3 && (
                              <div
                                className="referral-tree-item-level"
                                key={item + index}
                              >
                                <div className="referral-tree-lines">
                                  {item.documents.map((suItem, index) => {
                                    return (
                                      <>
                                        {index % 2 == 0 && (
                                          <svg
                                            key={suItem + index}
                                            className={
                                              suItem.type == "nothing" ? "hide" : ""
                                            }
                                            style={{
                                              width: `calc(${
                                                100 / item.documents.length
                                              }% + 20px)`,
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="367"
                                            height="55"
                                            viewBox="0 0 367 55"
                                            fill="none"
                                          >
                                            <path
                                              d="M183.5 2V8C183.5 19.0457 174.546 28 163.5 28H128.25H26C14.9543 28 6 36.9543 6 48V53.5"
                                              stroke="#C38C5C"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                            />
                                            <path
                                              d="M183.5 2V8C183.5 19.0457 192.454 28 203.5 28H238.75H341C352.046 28 361 36.9543 361 48V53.5"
                                              stroke="#C38C5C"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                            />
                                            <circle
                                              cx="183.5"
                                              cy="4.5"
                                              r="4.5"
                                              fill="#C38C5C"
                                            />
                                            <line
                                              x1="1"
                                              y1="54"
                                              x2="11"
                                              y2="54"
                                              stroke="#C38C5C"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                            />
                                            <line
                                              x1="356"
                                              y1="54"
                                              x2="366"
                                              y2="54"
                                              stroke="#C38C5C"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                            />
                                          </svg>
                                        )}
                                      </>
                                    );
                                  })}
                                </div>
                                <div className="referral-tree-items">
                                  {item.documents.map((suItem, index) => {
                                    return (
                                      <>
                                        {suItem.type == "missing" && (
                                          <div
                                            className={`referral-tree-item`}
                                            key={suItem.type}
                                            style={{
                                              width: 100 / item.documents.length + "%",
                                            }}
                                          >
                                            <div
                                              className={`referral-tree-btn referral-tree-btn-add ${
                                                !isActive
                                                  ? "referral-tree-btn-disabled"
                                                  : ""
                                              }`}
                                            >
                                              <div
                                                className="referral-tree-btn-out"
                                                onClick={() => {
                                                  referralTreeAddClick(
                                                    suItem.lvl,
                                                    suItem.position,
                                                  ),
                                                    addCopy(suItem);
                                                }}
                                              >
                                                <div
                                                  className={`referral-tree-btn-img ${
                                                    suItem.lvl == 3
                                                      ? "referral-tree-btn-img-sm"
                                                      : ""
                                                  }`}
                                                >
                                                  <div
                                                    className={`copied ${
                                                      activeAddCopy == suItem.lvl + "_"
                                                        ? // + suItem.position
                                                          "active"
                                                        : ""
                                                    }`}
                                                  >
                                                    Copied
                                                  </div>
                                                  <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      d="M12.8947 5.89474H8.10526V1.10526C8.10526 0.501053 7.60421 0 7 0C6.39579 0 5.89474 0.501053 5.89474 1.10526V5.89474H1.10526C0.501053 5.89474 0 6.39579 0 7C0 7.60421 0.501053 8.10526 1.10526 8.10526H5.89474V12.8947C5.89474 13.4989 6.39579 14 7 14C7.60421 14 8.10526 13.4989 8.10526 12.8947V8.10526H12.8947C13.4989 8.10526 14 7.60421 14 7C14 6.39579 13.4989 5.89474 12.8947 5.89474Z"
                                                      fill="#C38C5C"
                                                    />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div
                                                className={`referral-tree-btn-hash-out`}
                                              >
                                                <div className="referral-tree-btn-hash">
                                                  <span>Add</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                        {!suItem.type && (
                                          <div
                                            key={suItem.type + index}
                                            className={`referral-tree-item`}
                                            style={{
                                              width: 100 / item.documents.length + "%",
                                            }}
                                          >
                                            <div
                                              className={`referral-tree-btn`}
                                              onClick={() => {
                                                referralTreeUserClick(suItem);
                                              }}
                                              onMouseOver={() => {
                                                openTreeInfo(suItem);
                                              }}
                                              onMouseLeave={() => {
                                                openTreeInfo(null);
                                              }}
                                            >
                                              {treeInfo !== null && (
                                                <div
                                                  className="referral-tree-info"
                                                  style={
                                                    suItem.side == "left"
                                                      ? { left: "120px" }
                                                      : { right: "120px" }
                                                  }
                                                >
                                                  <InfoBox
                                                    type="reward-box"
                                                    active={
                                                      activeTreeInfo ==
                                                        suItem.user_address && animateTree
                                                        ? true
                                                        : false
                                                    }
                                                    cardBody={treeInfo}
                                                    customStyle={{ width: "100%" }}
                                                  />
                                                </div>
                                              )}

                                              <div className="referral-tree-btn-out">
                                                <div
                                                  className={`referral-tree-btn-img ${
                                                    suItem.lvl == 3
                                                      ? "referral-tree-btn-img-sm"
                                                      : ""
                                                  }`}
                                                >
                                                  <img
                                                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                                    alt="hi"
                                                  />
                                                </div>
                                              </div>
                                              <div
                                                className={`referral-tree-btn-hash-out`}
                                              >
                                                <div className="referral-tree-btn-hash">
                                                  <span>{suItem.user_address}</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                        {suItem.type == "nothing" && (
                                          <div
                                            key={suItem.type + index}
                                            className={`referral-tree-item`}
                                            style={{
                                              width: 100 / item.documents.length + "%",
                                            }}
                                          ></div>
                                        )}
                                      </>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  false
                )
              }
            />
          </div>
        </div>
        <div className="referral-tables-container">
          {tables?.map((item, index) => (
            <DashboardTable
              key={index}
              type={item?.type}
              header={item?.header}
              description={item?.description}
              footer={item?.footer}
              rightPanelData={item?.rightPanelData}
              tableHeader={item?.tableHeader}
              referralCardsData={item?.referralCardsData}
              data={item?.data}
              tableEmpty={item?.tableEmpty}
              loading={item?.loading}
              tableButtons={item?.tableButtons}
              tableEmptyValue={item?.tableEmptyValue}
              tablePagination={item?.tablePagination}
              paginationCurrent={item?.paginationCurrent}
              paginationTotal={item?.paginationTotal}
              paginationEvent={item?.paginationEvent}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};
