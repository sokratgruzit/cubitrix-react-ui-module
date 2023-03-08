import { useState } from "react";

// hooks
import { useMobileWidth } from "../../hooks/useMobileWidth";

// components
import { Calculator } from "../Calculator";
import { BiddingInfo } from "../BiddingInfo";
import { AccountSummary } from "../AccountSummary";
import { Button } from "../Button";
import { Table } from "../Table";

// svgs
import { HeaderIcon, CalculatorIcon, CloseIcon } from "../../assets/svgs";

// styles
import "../../assets/css/main-theme.css";
import "./Staking.css";

export const Staking = ({
  durationOptions,
  handleCalculatorSubmit,
  handleMaxClick,
  accountSummaryData,
  tableHead,
  tableData,
  loading,
  isAllowance,
  account,
  timeperiod,
  handleTimePeriod,
  timeperiodDate,
  handleTimeperiodDate,
  depositAmount,
  handleDepositAmount,
  stackContractInfo,
}) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const { width } = useMobileWidth();
  return (
    <div
      className={`main`}
      style={{ flexDirection: `${width < 1025 ? "column" : "row"}` }}
    >
      <div
        className={`main-sidebar`}
        style={{ display: `${width > 1025 ? "flex" : "none"}` }}
      >
        <div className={"main-sidebar-content"}>
          <BiddingInfo
            stackContractInfo={stackContractInfo}
            customStyles={{ display: `${width > 1025 ? "block" : "none"}` }}
          />
          <Calculator
            {...{
              durationOptions,
              handleCalculatorSubmit,
              handleMaxClick,
              loading,
              isAllowance,
              account,
              timeperiod,
              handleTimePeriod,
              depositAmount,
              handleDepositAmount,
              timeperiodDate,
              handleTimeperiodDate,
            }}
          />
        </div>
      </div>
      {showCalculator && <div className={"show-calculator-dark-bg"} />}
      <div className={`main-content`}>
        <h2 className={`font-16 staking-header`}>
          <HeaderIcon />
          Staking
        </h2>
        <BiddingInfo
          stackContractInfo={stackContractInfo}
          customStyles={{ display: `${width <= 1025 ? "block" : "none"}` }}
        />
        <h3 className={`${width < 1025 ? "font-14" : "font-20"}`}>Your Stake</h3>
        <div className={"account-summary-container"}>
          {accountSummaryData?.map((data, index) => (
            <AccountSummary key={index} data={data} />
          ))}
        </div>
        <Table
          type={"table-version"}
          tableHead={tableHead}
          mobile={width < 1280}
          tableData={tableData}
        />
      </div>
      <div className={"hidden-calculator-wrapper"}>
        <div className={`hidden-calculator-container ${showCalculator && "active"}`}>
          {showCalculator && (
            <Calculator
              {...{
                durationOptions,
                handleCalculatorSubmit,
                handleMaxClick,
                loading,
                isAllowance,
                account,
                timeperiod,
                handleTimePeriod,
                depositAmount,
                handleDepositAmount,
                timeperiodDate,
                handleTimeperiodDate,
              }}
            />
          )}
          <Button
            element={"staking-button"}
            customStyles={{
              position: "absolute",
              bottom: "20px",
              zIndex: "999",
              width: "190px",
            }}
            label={showCalculator ? "Close" : "Staking Calculator"}
            active={showCalculator}
            onClick={() => setShowCalculator(!showCalculator)}
            icon={showCalculator ? <CloseIcon /> : <CalculatorIcon />}
          />
        </div>
      </div>
    </div>
  );
};
