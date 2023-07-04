import "./TransferFromAcc.css";
import React from "react";
import { Visual } from "../Visual";
import { Account } from "../../assets/svgs";
import { Button } from "../Button";
import { Input } from "../Input";
import { HelpText } from "../HelpText";

export const TransferFromAcc = ({
  accountType,
  sideBarClose,
  inputs,
  currentObject,
  cardImg,
  handleSubmit,
  buttonLabel,
  showHelpText,
  helpText,
  success,
  accountBalance,
  accountBalanceSecond,
  label,
}) => {
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
        <div className="withdraw-to-acc-container">
          <div className="withdraw-to-acc-card">
            <img src={cardImg} className="withdraw-to-acc-card-img" />
            <div className="withdraw-to-acc-card_header">
              <Account type={accountType.toLowerCase()} />
              <h4 className="font-16">{accountType.toUpperCase()} account</h4>
            </div>
            <div className="withdraw-to-acc-card_content">
              <h4 className="font-14">{accountType.toUpperCase()} Balance</h4>
              <p>{accountBalance}</p>
              <span className="font-14">{accountBalanceSecond}</span>
            </div>
          </div>
          <div className="withdraw-to-acc-inputs">
            {inputs?.map((params, index) => {
              let selectedOption;
              if (params.type === "lable-input-select") {
                selectedOption = params?.options.find(
                  (option) => option.value === currentObject[params?.name],
                );
              }
              return (
                <div className="withdraw-to-acc-input-wrapper" key={index}>
                  <Input
                    key={index}
                    type={params?.type}
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
                  {params?.rightText && (
                    <span className="font-14 withdraw-to-acc-input-right">
                      {params?.rightText}
                    </span>
                  )}
                </div>
              );
            })}
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
            }}
            onClick={handleSubmit}
          />
        </div>
        {showHelpText && (
          <HelpText
            status={success ? "success" : "error"}
            title={helpText}
            fontSize={"font-12"}
            icon={true}
          />
        )}
      </div>
    </>
  );
};