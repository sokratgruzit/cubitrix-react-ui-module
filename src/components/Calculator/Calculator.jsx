// hooks
import { useValidation } from "../../hooks/useValidation";
import { useMobileWidth } from "../../hooks/useMobileWidth";

// components
import { HelpText } from "../HelpText";
import { Button } from "../Button";
import { Input } from "../Input";
import React, { useState, useMemo } from "react";

// styles
import "./Calculator.css";

export const Calculator = ({
  handleCalculatorSubmit,
  durationOptions,
  handleMaxClick,
  handleMaxClickBallance,
  customStyles,
  loading,
  isAllowance,
  account,
  timeperiod,
  handleTimePeriod,
  depositAmount,
  handleDepositAmount,
  timeperiodDate,
  handleTimeperiodDate,
  approveResonse,
  stakingLoading,
  isActive,
  handleWalletSubmit,
  hasRerferralActive,
  rates,
  apyPercent,
  translates,
  tokenBalance,
  walletBalance,
  exchangeRate
}) => {
  const [emptyField, setEmptyField] = useState(false);

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setEmptyField(false);
    }
    handleDepositAmount(e.target.value);
  };
  function countViaRate(amount) {
    return Number((amount / Number(rates?.["atr"]?.usd))?.toFixed(2));
  }

  let helpTexts = useMemo(() => {
    if (hasRerferralActive) {
      return {
        amount: {
          validationType: "min5000",
          success: "amount is valid",
          failure: translates?.minimum_amount_you_can_stake.en,
        },
      };
    } else {
      return {
        amount: {
          validationType: "max500",
          success: "amount is valid",
          failure: "maximum amount you can stake is 500 $ worth of A1",
        },
      };
    }
  }, [hasRerferralActive]);

  const validationErrors = useValidation(
    {
      amount: depositAmount || "",
    },
    helpTexts,
  );

  const handleSubmit = () => {
    if (depositAmount?.length < 1) {
      setEmptyField(true);
    } else {
      setEmptyField(false);
      handleCalculatorSubmit();
    }
  };

  const [stakeType, setStakeType] = useState("Wallet");

  return (
    <div className={`calculator-container`} style={customStyles}>
      <div className="calculator-type-wrapper">
        <Input
          type={"lable-input-select"}
          defaultData={[
            { name: "Wallet", value: "Wallet" },
            { name: "A1 Balance", value: "ATR Balance" },
          ]}
          icon={false}
          emptyFieldErr={false}
          value={stakeType}
          label={translates?.choose_balance.en}
          selectHandler={(type) => setStakeType(type)}
        />
        {stakeType === "Wallet" ? (
          <HelpText
            status="info"
            title={translates?.stake_from_your_wallet.en}
            fontSize={"font-12"}
            icon={true}
          />
        ) : (
          <HelpText
            status="warning"
            title={
              translates?.tokens_will_be_deducted.en
            }
            fontSize={"font-12"}
            icon={true}
          />
        )}
      </div>
        {isAllowance && depositAmount === "" ? (
            <></>
        ) : (
            <>
            <HelpText
                status={"warning"}
                title={`${translates?.your_currently_possess.en} ${stakeType === "Wallet" ? tokenBalance : walletBalance} ${translates?.a_worth.en} ${stakeType === "Wallet" ? tokenBalance * exchangeRate : walletBalance * exchangeRate} USD.`}
                color={"#6A6D76"}
                icon={true}
                customStyles={{ marginBottom: "5px" }}
            />
            </>)}
      <div className={"calculator-input"}>
        <Input
          type={"default"}
          inputType={"text"}
          placeholder={"0000"}
          label={"Amount (USD)"}
          disabled={stakingLoading}
          onChange={handleChange}
          emptyFieldErr={emptyField}
          value={depositAmount}
          statusCard={
            validationErrors?.amount && (
              <HelpText
                status={validationErrors.amount.failure ? "error" : "success"}
                title={validationErrors.amount.failure || validationErrors.amount.success}
                fontSize={"font-12"}
                icon={true}
              />
            )
          }
        />
        <span className={"font-12"}>$</span>
      </div>

      <div className="calculator__buttons">
        {durationOptions.map((item, index) => (
          <Button
            key={index}
            label={item.title}
            element={"calculator-button"}
            onClick={() => {
              handleTimePeriod(item.time);
              handleTimeperiodDate(item.period);
            }}
            customStyles={{ width: "100%" }}
            active={item.time === timeperiod}
          />
        ))}
      </div>
      <div className="exchange-rate-card">
        <p className="font-14">{`${depositAmount ? depositAmount : 0} $ = ${countViaRate(
          depositAmount,
        )} A1`}</p>
      </div>
      <HelpText
          title={
            timeperiod === 0
                ? apyPercent + "% APY. Locked until " + timeperiodDate
                : timeperiod === 1
                    ? apyPercent + "% APY. Locked until " + timeperiodDate
                    : timeperiod === 2
                        ? apyPercent + "% APY. Locked until " + timeperiodDate
                        : timeperiod === 3
                            ? apyPercent + "% APY. Locked until " + timeperiodDate
                            : timeperiod === 4
                                ? apyPercent + "% APY. Locked until " + timeperiodDate
                                : timeperiod === 5
                                    ? apyPercent + "% APY. Locked until " + timeperiodDate
                                    : apyPercent + "% APY. Locked until " + timeperiodDate
          }
        status="info"
        color="#6A6D76"
        icon={true}
      />
      {isAllowance && (
        <HelpText
          title={"Staking A1 is unapproved, please approve A1 before staking"}
          status="info"
          color="#6A6D76"
          icon={true}
        />
      )}
      {approveResonse && (
        <HelpText
          status={approveResonse?.status}
          title={approveResonse?.message}
          fontSize={"font-12"}
          icon={true}
        />
      )}
      <Button
        element={"button"}
        label={
          account
            ? loading
              ? "Please wait, Loading.."
              : stakeType === "Wallet"
              ? stakingLoading
                ? "Loading..."
                : isAllowance
                ? "Enable"
                : translates?.stake.en
              : translates?.withdraw_and_stake.en
            : translates?.connect_wallet.en
        }
        size={"btn-lg"}
        type={"btn-primary"}
        arrow={"arrow-none"}
        customStyles={{
          width: "100%",
          margin: "10px 0 0 0",
        }}
        onClick={
          stakeType === "Wallet"
            ? !account || (account && isAllowance)
              ? handleCalculatorSubmit
              : handleSubmit
            : handleWalletSubmit
        }
        disabled={
          (validationErrors?.amount?.failure && account) || stakingLoading || !isActive
        }
      />
    </div>
  );
};
