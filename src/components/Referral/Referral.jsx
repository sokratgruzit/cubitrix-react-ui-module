import React, { useState } from "react";

// components
import { Visual } from "../Visual";
import { Table } from "../Table";
import { TableElement } from "../TableElement";

// svgs
import {
  StickyNoteIcon,
  AddSquareIcon,
  NoHistoryIcon,
  referralIcon,
} from "../../assets/svgs";

// hooks
import { useMobileWidth } from "../../hooks/useMobileWidth";

// styles
import "./Referral.css";
import { Button } from "../Button";
import { ReferralCard } from "../ReferralCard";
import { Footer } from "../Footer";

export const Referral = ({
  handleCreateCode,
  referralCodeTableHead,
  codesTableData,
  referralHistoryTableHead,
  rebatesTableData,
  referralCodeTableEmpty,
  referralHistoryTableEmpty,
  referralRebatesTotal,
  referralHistoryPaginationCurrent,
  referralHistoryPaginationTotal,
  referralHistoryPaginationEvent,
  referralCodePaginationCurrent,
  referralCodePaginationTotal,
  referralCodePaginationEvent,
  referralHistoryTableLoading,
  referralCodeTableLoading,
  referralCodesCardData,
  handleLevelSystem,
}) => {
  const [mobileExpand, setMobileExpand] = useState(null);
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

  let referralCodeTableData;
  referralCodeTableData = codesTableData?.map((item, index) => {
    return (
      <div
        className={`table-parent ${mobileExpand == item._id ? "active" : ""}`}
        key={index}
        onClick={() => {
          mobileExpandFunc(item._id);
        }}
      >
        <div className="table">
          <div
            className={`td col ${referralCodeTableHead[0].mobileWidth ? true : false}`}
            style={{
              width: `${
                mobile
                  ? referralCodeTableHead[0].mobileWidth
                  : referralCodeTableHead[0].width
              }%`,
            }}
          >
            <span>{item._id.referrral}</span>
          </div>
          <div
            className={`td ${referralCodeTableHead[1].mobileWidth ? true : false}`}
            style={{
              width: `${
                mobile
                  ? referralCodeTableHead[1].mobileWidth
                  : referralCodeTableHead[1].width
              }%`,
            }}
          >
            <span>{item._id.from}</span>
          </div>
          <div
            className={`td ${referralCodeTableHead[2].mobileWidth ? true : false}`}
            style={{
              width: `${
                mobile
                  ? referralCodeTableHead[2].mobileWidth
                  : referralCodeTableHead[2].width
              }%`,
            }}
          >
            <span>
              {item._id.referral_module === "uni" ? "UNI LVL" : `VIP ${item._id.lvl}`}
            </span>
          </div>
          <div
            className={`td ${referralCodeTableHead[3].mobileWidth ? true : false}`}
            style={{
              width: `${
                mobile
                  ? referralCodeTableHead[3].mobileWidth
                  : referralCodeTableHead[3].width
              }%`,
            }}
          >
            <span>{item._id.percent}</span>
          </div>
          <div
            className={`td col ${referralCodeTableHead[4].mobileWidth ? true : false}`}
            style={{
              width: `${
                mobile
                  ? referralCodeTableHead[4].mobileWidth
                  : referralCodeTableHead[4].width
              }%`,
            }}
          >
            <span>{item.amount}</span>
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
            <div className="td">
              <div className="mobile-ttl">{referralCodeTableHead[0].name}</div>
              <span>{item._id.referrral}</span>
            </div>
            <div className="td">
              <div className="mobile-ttl">{referralCodeTableHead[2].name}</div>
              {item._id.referral_module === "uni" ? "UNI LVL" : `VIP ${item._id.lvl}`}
            </div>
            <div className="td">
              <div className="mobile-ttl">{referralCodeTableHead[3].name}</div>
              <span>{item._id.percent}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  let referralHistoryTableData;
  referralHistoryTableData = rebatesTableData?.map((item, index) => {
    return (
      <div
        className={`table-parent ${mobileExpand == item._id ? "active" : ""}`}
        key={index}
        onClick={() => {
          mobileExpandFunc(item._id);
        }}
      >
        <div className="table">
          <div
            className={`td col ${referralHistoryTableHead[0].mobileWidth ? true : false}`}
            style={{
              width: `${
                mobile
                  ? referralHistoryTableHead[0].mobileWidth
                  : referralHistoryTableHead[0].width
              }%`,
            }}
          >
            <span>{item.from.address}</span>
          </div>
          <div
            className={`td ${referralHistoryTableHead[1].mobileWidth ? true : false}`}
            style={{
              width: `${
                mobile
                  ? referralHistoryTableHead[1].mobileWidth
                  : referralHistoryTableHead[1].width
              }%`,
            }}
          >
            {/* <span>{item.tx_options.referral}</span> */}
            <span>refferal</span>
          </div>
          <div
            className={`td ${referralHistoryTableHead[2].mobileWidth ? true : false}`}
            style={{
              width: `${
                mobile
                  ? referralHistoryTableHead[2].mobileWidth
                  : referralHistoryTableHead[2].width
              }%`,
            }}
          >
            <span>
              {/* {item.tx_type === "uni" ? "UNI LVL" : `VIP ${item.tx_options.lvl}`} */}
              {item.tx_type === "uni" ? "UNI LVL" : `VIP 999`}
            </span>
          </div>
          <div
            className={`td col ${referralHistoryTableHead[3].mobileWidth ? true : false}`}
            style={{
              width: `${
                mobile
                  ? referralHistoryTableHead[3].mobileWidth
                  : referralHistoryTableHead[3].width
              }%`,
            }}
          >
            <span>{item.amount}</span>
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
            <div className="td">
              <div className="mobile-ttl">{referralHistoryTableHead[1].name}</div>
              {/* {item.tx_options.referral} */}
              refferal
            </div>
            <div className="td">
              <div className="mobile-ttl">{referralHistoryTableHead[2].name}</div>
              {item.tx_type === "uni"
                ? "UNI LVL"
                : // : `VIP ${item.tx_options.lvl}`}
                  `VIP 999`}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={"referral-main"}>
      <div className="referral-content">
        <div className={"referral-content-main"}>
          <h2>Referral</h2>
          <div className="referral-content-info">
            <span className="font-20">
              You can earn rebates by inviting traders to trade on Complend
            </span>
            <p className="font-20">
              After creating your first code, you will receive a Casual status to start,
              granting you a 2.5% rebate on your referee’s trading fees.
            </p>
          </div>
          <div className="referral-content-info_buttons">
            <Button
              element={"referral-button"}
              label={"Create Code"}
              icon={<AddSquareIcon color={"#FFF"} />}
              active={true}
              onClick={handleCreateCode}
            />
            <Button
              element={"referral-button"}
              label={"Level System"}
              icon={<StickyNoteIcon />}
              onClick={handleLevelSystem}
            />
          </div>
        </div>
        <ReferralCard
          type={"total-info"}
          data={referralCodesCardData}
          totalData={referralRebatesTotal}
          label={"Your Code"}
          labelTwo={"Total Referral Rebates"}
        />
      </div>
      <div className="referral-tables-container">
        <Visual
          element={"table-header"}
          label={"Referral Code"}
          description={"You can create multiple referral codes to attract traders"}
          fontSize={"font-20"}
          customStyles={{ border: "none" }}
          buttons={
            <Button
              element={"referral-button"}
              label={"Create Code"}
              icon={<AddSquareIcon color={`#00C6FF`} />}
              onClick={handleCreateCode}
            />
          }
        />
        <Table
          type={"table-version"}
          tableHead={referralCodeTableHead}
          mobile={mobile}
          tableData={codesTableData.length ? referralCodeTableData : false}
          tableEmpty={true}
          tableEmptyData={referralCodeTableEmpty}
          loading={referralCodeTableLoading}
        />
        <TableElement
          customStyle={{ marginTop: "30px", paddingBottom: "20px" }}
          type={"pagination"}
          currentPage={referralCodePaginationCurrent}
          totalCount={referralCodePaginationTotal}
          onPageChange={referralCodePaginationEvent}
          color={"#00C6FF"}
        />
        <Visual
          element={"table-header"}
          label={"Referral Rebates History"}
          description={"The airdrop history of your weekly referral rebates."}
          fontSize={"font-20"}
          customStyles={{ border: "none" }}
        />
        <Table
          type={"table-version"}
          tableHead={referralHistoryTableHead}
          mobile={mobile}
          tableData={rebatesTableData.length ? referralHistoryTableData : false}
          tableEmptyData={referralHistoryTableEmpty}
          loading={referralHistoryTableLoading}
        />
        <TableElement
          customStyle={{ marginTop: "30px" }}
          type={"pagination"}
          currentPage={referralHistoryPaginationCurrent}
          totalCount={referralHistoryPaginationTotal}
          onPageChange={referralHistoryPaginationEvent}
          color={"#00C6FF"}
        />
      </div>
      <Footer />
    </div>
  );
};
