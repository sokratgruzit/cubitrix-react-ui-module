import { useState, useMemo } from "react";

// components
import { Visual } from "../Visual";
import { Switches } from "../Switches";
import { Input } from "../Input";
import { Button } from "../Button";
import { HelpText } from "../HelpText";

// hooks
import { useValidation } from "../../hooks/useValidation";

// styles
import "./Popup.css";
import React from "react";

export const Popup = ({
  label,
  type,
  withdrawCustomStyles,
  withdrawHead,
  withdrawTitle,
  withdrawWallet,
  withdrawCode,
  withdrawData,
  withdrawSettingsCardBody,
  addTransactionCustomStyles,
  addAdminSelect,
  handleAddAdminBtnClick,
  addAdminError,
  addTransactionError,
  handlePopUpClose,
  handleAddTransaction,
  addTransactionSelects,
  popUpElement,
  customStyles,
  popUpData,
  setPopUpData,
  edit,
  description,
  headerCustomStyles,
  writeEmailMultiplyData,
  writeEmailEmailsData,
  popupBGclass,
}) => {
  const [emptyFields, setEmptyFields] = useState({});

  const [cover, setCover] = useState(false);

  const handleEmptyFields = () => {
    const updatedState = {};

    Object?.keys(popUpData && popUpData)?.forEach((i) => {
      if (popUpData[i].length < 1) {
        if (i === "password" && edit) {
          updatedState[i] = false;
        } else if (i === "confirmPassword" && edit) {
          updatedState[i] = false;
        } else {
          updatedState[i] = true;
        }
      } else {
        updatedState[i] = false;
      }
    });

    setEmptyFields({ ...updatedState });
  };

  const toggleCover = () => setCover(!cover);

  const handlePopUpInputChange = (e, name) => {
    setEmptyFields((prev) => ({ ...prev, [name]: false }));
    setPopUpData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handlePopUpSelectChange = (option, name) => {
    setEmptyFields((prev) => ({ ...prev, [name]: false }));
    setPopUpData((prev) => ({ ...prev, [name]: option }));
  };

  let helpTexts = {
    email: {
      validationType: "email",
      success: "email is valid",
      failure: "email must be valid",
    },
    password: {
      validationType: "password",
      success: "password is valid",
      failure:
        "password must contain a minimum of 8 characters, lowercase and uppercase character",
    },
    amount: {
      validationType: "numbers",
      success: "amount is valid",
      failure: "must be a number",
    },
    from: {
      validationType: "limitedCharacters",
      success: "It is valid",
      failure: "must be exactly 16 characters",
    },
    to: {
      validationType: "limitedCharacters",
      success: "It is valid",
      failure: "must be exactly 16 characters",
    },
    tx_hash: {
      validationType: "hash",
      success: "It is valid hash",
      failure: "must be valid hash",
    },
  };

  const formErrors = useValidation(
    {
      email: popUpData?.email || "",
      password: popUpData?.password || "",
      from: popUpData?.from || "",
      to: popUpData?.to || "",
      amount: popUpData?.amount || "",
    },
    helpTexts,
  );

  let notValidatedList = useMemo(() => {
    if (formErrors) {
      return Object?.values(formErrors && formErrors)?.filter((value) => {
        return value.failure;
      });
    }
  }, [formErrors]);

  let notEmptyList = useMemo(() => {
    if (popUpData) {
      return Object.keys(popUpData && popUpData).filter((key) => {
        if (edit) {
          if (key === "password") return;
          if (key === "confirmPassword") return;
        }
        return !popUpData[key];
      });
    }
  }, [popUpData]);

  const handleAdminSaveClick = () => {
    if (notEmptyList.length > 0) {
      handleEmptyFields();
    } else {
      handleAddAdminBtnClick();
    }
  };

  const handleAddTransactionClick = () => {
    if (notEmptyList.length > 0) {
      handleEmptyFields();
    } else {
      handleAddTransaction();
    }
  };

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className={`popup-bg ${popupBGclass}`}>
      <div className="popup-wrapper-container" onClick={handlePopUpClose} />
      <div className="popup-wrapper" style={customStyles}>
        {label && (
          <Visual
            label={label}
            element={"popup-header"}
            onClick={handlePopUpClose}
            customStyles={{
              width: "100%",
              ...headerCustomStyles,
            }}
            description={description}
          />
        )}

        {type === "withdraw" && (
          <div className="withdraw-container" style={withdrawCustomStyles}>
            <div className="withdraw-inner">
              <div className="w-100">
                <div className="flex mobile-flex jc-sb">
                  <div>{withdrawHead}</div>
                  <div>Approved</div>
                </div>
                <div className="flex mobile-flex jc-sb mt-22">
                  <div>{withdrawWallet}</div>
                  <div>{withdrawCode}</div>
                </div>
              </div>
              <div className="withdraw-details">
                <div className="withdraw-details-inner">
                  <div className="withdraw-title font-16">{withdrawTitle}</div>
                  <div className="withdraw-wraper">
                    {withdrawData.map((item) => {
                      return (
                        <div key={item.id} className="popup-item flex jc-sb">
                          <div>{item.name}</div>
                          <div>
                            <div className="align-right">{item.user}</div>
                            <div className="mt-8 font-12 align-right">{item.sub}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "addTransaction" && (
          <div style={addTransactionCustomStyles} className="addTransaction-body">
            {addTransactionSelects?.slice(0, 1).map((item, index) => (
              <Input
                key={index}
                type={"lable-input-select"}
                defaultData={item.options}
                label={item.name}
                emptyFieldErr={emptyFields[item.value]}
                value={capitalizeWords(item.options[0].value)}
                selectHandler={(opt) => handlePopUpSelectChange(opt, item.value)}
                statusCard={
                  <HelpText
                    status={"info"}
                    title={item.infoText}
                    fontSize={"font-12"}
                    icon={true}
                  />
                }
              />
            ))}
            <div className="addTransaction-inputs">
              <Input
                type={"default"}
                icon={true}
                inputType={"text"}
                placeholder={"from"}
                label={"From"}
                value={popUpData?.from}
                emptyFieldErr={emptyFields["from"]}
                statusCard={
                  <HelpText
                    status={
                      formErrors.from?.failure
                        ? "error"
                        : formErrors.from?.success
                        ? "success"
                        : "info"
                    }
                    title={formErrors.from?.failure || "Amount must be big number"}
                    fontSize={"font-12"}
                    icon={true}
                  />
                }
                onChange={(e) => handlePopUpInputChange(e, "from")}
              />
              <Input
                type={"default"}
                icon={true}
                inputType={"text"}
                placeholder={"to"}
                label={"To"}
                value={popUpData?.to}
                emptyFieldErr={emptyFields["to"]}
                statusCard={
                  <HelpText
                    status={
                      formErrors.to?.failure
                        ? "error"
                        : formErrors.to?.success
                        ? "success"
                        : "info"
                    }
                    title={formErrors.to?.failure || "Amount must be big number"}
                    fontSize={"font-12"}
                    icon={true}
                  />
                }
                onChange={(e) => handlePopUpInputChange(e, "to")}
              />
            </div>
            <div className="addTransaction-inputs addTransaction-inputs-row">
              <Input
                type={"default"}
                icon={true}
                inputType={"text"}
                placeholder={"0"}
                label={"Payment Amount"}
                value={popUpData?.amount}
                emptyFieldErr={emptyFields["amount"]}
                statusCard={
                  <HelpText
                    status={
                      formErrors.amount?.failure
                        ? "error"
                        : formErrors.amount?.success
                        ? "success"
                        : "info"
                    }
                    title={formErrors.amount?.failure || "Amount must be big number"}
                    fontSize={"font-12"}
                    icon={true}
                  />
                }
                onChange={(e) => handlePopUpInputChange(e, "amount")}
              />
              {addTransactionSelects?.slice(1, 2).map((item, index) => (
                <Input
                  key={index}
                  type={"lable-input-select"}
                  defaultData={item.options}
                  emptyFieldErr={emptyFields[item.value]}
                  value={item.options[0].value.toUpperCase()}
                  selectHandler={(opt) => handlePopUpSelectChange(opt, item.value)}
                  customStyles={{ marginBottom: "12px" }}
                />
              ))}
            </div>
            <Button
              label={"Save"}
              size={"btn-lg"}
              type={"btn-primary"}
              element={"button"}
              customStyles={{ margin: "0", width: "100%" }}
              onClick={handleAddTransactionClick}
              disabled={notValidatedList?.length > 0 || (addTransactionError && true)}
            />
            {addTransactionError && (
              <HelpText
                status={"warning"}
                title={addTransactionError}
                color={"#9CCC65"}
                fontSize={"font-12"}
                icon={true}
              />
            )}
          </div>
        )}

        {type === "withdrawSettings" && (
          <div className="withdraw-settings-main-fixed-container">
            <div className={`withdraw-settings-main-wrapp`}>
              <div className="withdraw-settings-body">
                <p>{withdrawSettingsCardBody.text}</p>
                <div className="withdraw-settings-flex">
                  <p>{withdrawSettingsCardBody.switches}</p>
                  <Switches type={"sm-switches"} size={"size"} />
                </div>
                <div className="withdraw-settings-flex">
                  <div className="withdraw-input-wrapp">
                    <Input
                      type={"default"}
                      icon={true}
                      inputType={"text"}
                      placeholder={withdrawSettingsCardBody.inputs.placeHolder1}
                      label={withdrawSettingsCardBody.inputs.input1}
                      subLabel={""}
                      // onChange={changeHandler}
                      customStyles={{ width: "100%" }}
                    />
                    <div className="input-and-form-definition">
                      {withdrawSettingsCardBody.definitions.svg}
                      <p>{withdrawSettingsCardBody.definitions.definition1}</p>
                    </div>
                  </div>
                  <div className="withdraw-input-wrapp">
                    <Input
                      type={"default"}
                      icon={true}
                      inputType={"text"}
                      placeholder={withdrawSettingsCardBody.inputs.placeHolder2}
                      label={withdrawSettingsCardBody.inputs.input2}
                      subLabel={""}
                      // onChange={changeHandler}
                      customStyles={{ width: "100%" }}
                    />
                    <div className="input-and-form-definition">
                      {withdrawSettingsCardBody.definitions.svg}
                      <p>{withdrawSettingsCardBody.definitions.definition2}</p>
                    </div>
                  </div>
                </div>
                <div className="withdraw-input-wrapp">
                  <p>{withdrawSettingsCardBody.inputs.inputDropDownLabel}</p>
                  <Input
                    type={"lable-input-select"}
                    // icon={false}
                    // selectData={selectData}
                    // defaultData={defaultData}
                    // selectHandler={selectHandler}
                    selectLabel={withdrawSettingsCardBody.inputs.inputDropDown}
                    // active={active}
                    status={"warning"}
                    // title={'your text'}
                    color={"#FFA726"}
                    customStyles={{ width: "100%" }}
                  />
                  <div className="input-and-form-definition">
                    {withdrawSettingsCardBody.definitions.svg}
                    <p>{withdrawSettingsCardBody.definitions.definition3}</p>
                  </div>
                </div>
                <div>
                  <h2>Withdraw With</h2>
                  <div></div>
                </div>
                <div className="withdraw-input-wrapp">
                  <Input
                    type={"default"}
                    icon={true}
                    inputType={"text"}
                    placeholder={withdrawSettingsCardBody.inputs.input3}
                    label={withdrawSettingsCardBody.inputs.input3}
                    subLabel={""}
                    // onChange={changeHandler}
                    customStyles={{ width: "100%" }}
                  />
                  <div className="input-and-form-definition">
                    {withdrawSettingsCardBody.definitions.svg}
                    <p>{withdrawSettingsCardBody.definitions.definition4}</p>
                  </div>
                </div>
                <div>
                  <div className="withdraw-settings-flex">
                    <p>{withdrawSettingsCardBody.switches}</p>
                    <Switches type={"sm-switches"} size={"size"} />
                  </div>
                  <div className="input-and-form-definition">
                    {withdrawSettingsCardBody.definitions.svg}
                    <p>{withdrawSettingsCardBody.definitions.definition5}</p>
                  </div>
                </div>
                <div className="withdraw-settings-button">
                  {withdrawSettingsCardBody.button}
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "addAdmin" && (
          <div className={`addAdmin-container`}>
            <Input
              type={"lable-input-select"}
              icon={false}
              label={addAdminSelect.name}
              defaultData={addAdminSelect.options}
              value={capitalizeWords(popUpData[addAdminSelect?.value])}
              emptyFieldErr={emptyFields[addAdminSelect?.value]}
              selectHandler={(opt) => handlePopUpSelectChange(opt, addAdminSelect.value)}
              selectLabel={`All ${addAdminSelect.name}`}
            />
            <Input
              type={"default"}
              label={"email"}
              placeholder={"enter your email"}
              parent={"your-class-name"}
              emptyFieldErr={emptyFields?.email}
              value={popUpData?.email}
              statusCard={
                formErrors?.email && (
                  <HelpText
                    status={formErrors.email.failure ? "error" : "success"}
                    title={formErrors.email.failure || formErrors.email.success}
                    fontSize={"font-12"}
                    icon={true}
                  />
                )
              }
              onChange={(e) => handlePopUpInputChange(e, "email")}
            />
            <Input
              type={"default"}
              label={`${edit ? "new password" : "password"}`}
              placeholder={`${edit ? "enter new password" : "enter password"}`}
              icon={true}
              inputType={"password"}
              coverHandler={toggleCover}
              value={popUpData?.password}
              emptyFieldErr={emptyFields?.password}
              onChange={(e) => handlePopUpInputChange(e, "password")}
              statusCard={
                formErrors?.password && (
                  <HelpText
                    status={formErrors.password.failure ? "error" : "success"}
                    title={formErrors.password.failure || formErrors.password.success}
                    fontSize={"font-12"}
                    icon={true}
                  />
                )
              }
            />
            <Input
              type={"default"}
              label={"confirm password"}
              e
              placeholder={"confirm password"}
              icon={true}
              inputType={"password"}
              coverHandler={toggleCover}
              value={popUpData?.confirmPassword}
              emptyFieldErr={emptyFields?.confirmPassword}
              onChange={(e) => handlePopUpInputChange(e, "confirmPassword")}
              statusCard={
                popUpData?.confirmPassword &&
                popUpData?.password && (
                  <HelpText
                    status={
                      popUpData.password === popUpData.confirmPassword
                        ? "success"
                        : "error"
                    }
                    title={
                      popUpData.password === popUpData.confirmPassword
                        ? "Passwords match"
                        : "Passwords do not match"
                    }
                    fontSize={"font-12"}
                    icon={true}
                  />
                )
              }
            />
            {addAdminError && (
              <HelpText
                status={"warning"}
                title={addAdminError}
                fontSize={"font-12"}
                icon={true}
              />
            )}

            <Button
              element={"button"}
              label={"Save"}
              size={"btn-lg"}
              type={"btn-primary"}
              arrow={"arrow-none"}
              customStyles={{ width: "100%", margin: "0" }}
              onClick={handleAdminSaveClick}
              disabled={
                notValidatedList?.length > 0 ||
                popUpData?.password !== popUpData?.confirmPassword ||
                (addAdminError && true)
              }
            />
          </div>
        )}

        {type === "writeEmail" && (
          <div className={`addAdmin-container`}>
            <Input
              type={"lable-input-multi-select"}
              icon={false}
              // selectData={selectData}
              multiplyData={writeEmailMultiplyData}
              // multiItemClick={multiItemClick}
              emptyFieldErr={false}
              multiplySelectData={writeEmailEmailsData}
              label={"Choose Email"}
              // selectHandler={selectHandler}
              selectLabel={false}
              // active={active}
              status={false}
              onChangeDropdown={(e) => {
                // onChangeDropdown(e);
              }}
              statusCard={
                <HelpText
                  status={"error"}
                  title={"your text"}
                  fontSize={"font-12"}
                  icon={true}
                />
              }
              title={"your text"}
              color={"#FFA726"}
              customStyles={{ width: "520px" }}
            />
            {addAdminError && (
              <HelpText
                status={"warning"}
                title={addAdminError}
                fontSize={"font-12"}
                icon={true}
              />
            )}

            <Button
              element={"button"}
              label={"Save"}
              size={"btn-lg"}
              type={"btn-primary"}
              arrow={"arrow-none"}
              customStyles={{ width: "100%", margin: "0" }}
              onClick={handleAdminSaveClick}
              disabled={
                notValidatedList?.length > 0 ||
                popUpData?.password !== popUpData?.confirmPassword ||
                (addAdminError && true)
              }
            />
          </div>
        )}

        {popUpElement && popUpElement}
      </div>
    </div>
  );
};
