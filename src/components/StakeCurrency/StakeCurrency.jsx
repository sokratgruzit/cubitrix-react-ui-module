import "./StakeCurrency.css";
import React, { useState, useEffect } from "react";
import { Visual } from "../Visual";
import { Account } from "../../assets/svgs";
import { Button } from "../Button";
import { Input } from "../Input";
import { HelpText } from "../HelpText";

export const StakeCurrency = ({
  accountType,
  sideBarClose,
  inputs,
  currentObject,
  cardImg,
  handleSubmit,
  buttonLabel,
  accountBalance,
  accountBalanceSecond,
  stakingAPY,
  label,
  stakeLoading,
  durationOptions,
}) => {
  const [selectedDuration, setSelectedDuration] = useState("360 D");
  const handleInputChange = (e, params) => {
    const { name, onChange } = params;

    let data;
    if (!e.target) {
      data = {
        target: {
          value: e,
          name,
        },
      };
      return onChange(data);
    }

    onChange(e);
  };

  return (
    <>
      <Visual
        label={label}
        element={"popup-header"}
        customStyles={{ width: "100%", maxWidth: "100%" }}
        onClick={sideBarClose}
      />
      <div className="sidebar-body">
        <div className="deposit-container">
          <div className="deposit-card">
            <img src={cardImg} className="deposit-card-img" />
            <div className="deposit-card_header">
              <Account type={accountType.toLowerCase()} />
              <h4 className="font-16">{accountType.toUpperCase()} account</h4>
            </div>
            <div className="deposit-card_content">
              <h4 className="font-14">{accountType.toUpperCase()} Balance</h4>
              <p>{accountBalance}</p>
              <span className="font-14">{accountBalanceSecond}</span>
            </div>
          </div>
          <div className="deposit-inputs-wrapper">
            <div className="deposit-inputs">
              {inputs?.map((params, index) => {
                let selectedOption;
                if (params.type === "lable-input-select") {
                  selectedOption = params?.options.find(
                    (option) => option.value === currentObject[params?.name],
                  );
                }
                return (
                  <Input
                    key={index}
                    type={params?.type}
                    inputType={params?.inputType}
                    label={params.title}
                    name={params.name}
                    value={
                      params?.type === "lable-input-select"
                        ? selectedOption?.name ||
                          params?.defaultAny ||
                          params?.options[0]?.value
                        : currentObject[params?.name] || params?.defaultAny
                    }
                    customStyles={{ width: "100%" }}
                    selectHandler={(opt) => {
                      handleInputChange(opt, params);
                    }}
                    placeholder={params?.placeholder}
                    onChange={(e) => handleInputChange(e, params)}
                    defaultData={params?.options}
                    customInputStyles={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
                    svg={
                      params?.type === "lable-input-select"
                        ? selectedOption?.svg
                        : params?.svg
                    }
                  />
                );
              })}
              <div className="calculator__buttons">
                {durationOptions.map((item, index) => (
                  <Button
                    key={index}
                    label={item}
                    element={"calculator-button"}
                    onClick={() => {
                      setSelectedDuration(item);
                    }}
                    customStyles={{ width: "100%" }}
                    active={item === selectedDuration}
                  />
                ))}
              </div>
            </div>
            {stakingAPY ? (
              <HelpText
                title={`${
                  stakingAPY[parseInt(selectedDuration.split(" ")[0], 10)]
                }% APY On ${parseInt(selectedDuration.split(" ")[0], 10)} days.`}
                status="warning"
                color="#6A6D76"
                icon={true}
              />
            ) : (
              <HelpText title="No APY available" status="error" icon={true} />
            )}
          </div>
          <Button
            label={buttonLabel}
            size={"btn-lg"}
            type={"btn-primary"}
            element={"button"}
            customStyles={{
              margin: "0",
              width: "100%",
              backgroundColor: "#C38C5C",
              marginTop: "-10px",
            }}
            onClick={() => handleSubmit(selectedDuration)}
            disabled={stakeLoading}
          />
        </div>
      </div>
    </>
  );
};
