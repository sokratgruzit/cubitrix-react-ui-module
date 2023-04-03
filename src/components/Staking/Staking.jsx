import { useState } from "react";

// hooks
import { useMobileWidth } from "../../hooks/useMobileWidth";

// components
import { AccountSummary } from "../AccountSummary";
import { Button } from "../Button";
import { Table } from "../Table";
import { Visual } from "../Visual";
import { TableElement } from "../TableElement";

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
}) => {
  const [mobileExpand, setMobileExpand] = useState(null);
  const { width, mobile } = useMobileWidth();

  let mobileExpandFunc = (id) => {
    if (mobile) {
      if (id !== mobileExpand) {
        setMobileExpand(id);
      } else {
        setMobileExpand(null);
      }
    }
  };

  let tableData =
    stakersRecord?.length > 0 &&
    stakersRecord.map((item, index) => (
      <div
        className={`table-parent ${mobileExpand === item.id ? "active" : ""}`}
        key={index}
        onClick={() => {
          mobileExpandFunc(item.id);
        }}
      >
        <div className={"table"}>
          {tableHead?.slice(0, 5).map((i, index) => (
            <div
              key={index}
              className={`td col ${i.mobileWidth ? true : false}`}
              style={{ width: `${mobile ? i.mobileWidth : i.width}%` }}
            >
              <span>
                {
                  [
                    item.amount,
                    item.staketime,
                    item.unstaketime,
                    "CML",
                    parseFloat(item.realtimeRewardPerBlock).toFixed(10),
                  ][index]
                }
              </span>
            </div>
          ))}
          {width > 940 &&
            tableHead.slice(5, 7).map((i, index) => (
              <div
                key={index}
                className={`td col ${i.position} ${
                  i.mobileWidth ? true : false
                }`}
                style={{
                  width: `${mobile ? i.mobileWidth : i.width}%`,
                  marginRight: `${width < 1450 ? "10px" : "0"}`,
                }}
              >
                <Button
                  element={"staking-button"}
                  label={index === 0 ? "Unstake" : "Harvest"}
                  active={index === 0}
                  customStyles={{ borderRadius: "32px" }}
                  onClick={() => i.onClick(index)}
                  disabled={index === 0 ? item.unstaked : item.withdrawan}
                />
              </div>
            ))}
        </div>
        <div className='table-more' />
        <div className='icon-place'>
          <svg
            width='12'
            height='7'
            viewBox='0 0 12 7'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325'
              stroke='white'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div className='table-mobile'>
          <div className='table-mobile-content'>
            {[1, 2, 3].map((index) => (
              <div className='td' key={index}>
                <div className='mobile-ttl'>{tableHead[index].name}</div>
                <span>
                  {index === 1 && item.staketime}
                  {index === 2 && item.unstaketime}
                  {index === 3 && "CML"}
                </span>
              </div>
            ))}
            {width <= 940 && (
              <div className='table-buttons'>
                {[5, 6].map((index) => (
                  <div className='td' key={index}>
                    <Button
                      element='staking-button'
                      label={index === 5 ? "Unstake" : "Harvest"}
                      active={index === 5}
                      customStyles={{ borderRadius: "32px" }}
                      onClick={() => tableHead[index].onClick(index)}
                      disabled={index === 5 ? item.unstaked : item.withdrawan}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    ));

  return (
    <div
      className={`main`}
      style={{ flexDirection: `${width < 1025 ? "column" : "row"}` }}
    >
      <div className={"staking-main"}>
        <div className='staking-content'>
          <div className={"staking-content-main"}>
            <h2>Staking</h2>
            <div className='staking-content-info'>
              <span className='font-20'>You can earn protocol income</span>
              <p className='font-20'>
                and Complend rewards from locked-staking and MUXLP staking. All
                staking will take place on Complend
              </p>
            </div>
            <div className='staking-content-info_buttons'>
              <Button
                element={"referral-button"}
                label={"Create Staking"}
                icon={<AddSquareIcon color={"#FFF"} />}
                active={true}
                onClick={handlePopUpOpen}
              />
            </div>
          </div>
          <AccountSummary
            data={accountSummaryData}
            stackContractInfo={stackContractInfo}
            label={"Your Stake"}
          />
        </div>
        <div className='staking-tables-container'>
          <Visual
            element={"table-header"}
            label={"Stake"}
            description={"You can stake and then earn complend reward"}
            fontSize={"font-20"}
            customStyles={{ border: "none" }}
            buttons={
              <Button
                element={"referral-button"}
                label={"Create Staking"}
                icon={<AddSquareIcon color={`#00C6FF`} />}
                onClick={handlePopUpOpen}
              />
            }
          />
          <Table
            type={"table-version"}
            tableHead={tableHead}
            mobile={mobile}
            tableData={stakersRecord.length ? tableData : false}
            tableEmpty={true}
            tableEmptyData={tableEmptyData}
            loading={loading}
          />
          <TableElement
            customStyle={{ marginTop: "30px" }}
            type={"pagination"}
            currentPage={3}
            totalCount={10}
            onPageChange={() => console.log("yeah")}
            color={"#00C6FF"}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};
