import React, { useEffect, useState } from "react";
import { Button } from "../../Button";
import { HelpCard } from "../../HelpCard";
import { HelpText } from "../../HelpText";
import { Input } from "../../Input";
import { Switches } from "../../Switches";
import { Visual } from "../../Visual";
import "./UserAccount.css";

export const UserAccount = ({
  sideBarClose,
  goBack,
  personalData,
  handlePersonalData,
  handleSecurityData,
  emailVerified,
  personalDataState,
  securityDataState,
  resendEmail,
  hasPasswordSet,
  imgValue,
  twoFactorAuth,
  handleTwoFactorAuth,
  handleForgetPassword,
}) => {
  const [selectedTab, setSelectedTab] = useState("data");

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: {
      code: "+1",
      flag: "🇺🇸",
      number: "",
    },
    date_of_birth: new Date(),
    nationality: "Select Country",
    avatar: imgValue,
  });

  const [emailResend, setEmailResend] = useState(false);

  useEffect(() => {
    setEmailResend(personalDataState.emailSent);
  }, [personalDataState.emailSent]);

  const [securityFormErrors, setSecurityFormErrors] = useState({});
  const [emailError, setEmailError] = useState(false);
  useEffect(() => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let errors = false;
    if (userData.email && !emailRegex.test(userData.email))
      errors = "please enter a valid email";
    setEmailError(errors);
  }, [userData.email]);

  const handleFormUpdate = (value, field) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleUserUpdate = (value, field) => {
    setUserData((prevState) => ({ ...prevState, [field]: value }));
  };

  const beforePersonalData = (userData) => {
    const mutated_userData = { ...userData };
    if (userData.nationality?.country) {
      mutated_userData.nationality = userData.nationality.country;
    }
    mutated_userData.nationality =
      mutated_userData.nationality === "Select Country"
        ? ""
        : mutated_userData.nationality;
    if (emailError) return;
    handlePersonalData(mutated_userData);
  };

  const beforeSecurityData = (userData) => {
    const errors = {};
    if (!userData.newPassword) errors.newPassword = "password is required";
    if (userData.newPassword && !userData.confirmPassword)
      errors.confirmPassword = "match is not correct";
    if (JSON.stringify(errors) !== "{}")
      return setSecurityFormErrors((prev) => ({ ...prev, ...errors }));

    const atLeastOneError = Object.entries(securityFormErrors).some((obj) => obj[1]);
    if (atLeastOneError) return null;

    handleSecurityData(userData);
  };

  useEffect(() => {
    if (personalData) {
      const data = { ...personalData };
      if (personalData.nationality === "") data.nationality = "Select Country";

      setUserData(data);
    }
  }, [personalData]);

  useEffect(() => {
    const formErrors = {
      newPassword: false,
      confirmPassword: false,
    };
    const passwordValidation = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    if (!passwordValidation.test(formData.newPassword) && formData.newPassword.length > 0)
      formErrors.newPassword =
        "password must contain a minimum of 8 characters, uppercase and special character";
    if (formData.confirmPassword && formData.newPassword !== formData.confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";
    setSecurityFormErrors((prev) => ({ ...prev, ...formErrors }));
  }, [formData]);

  return (
    <>
      <Visual
        label={"User Account"}
        element={"popup-header"}
        customStyles={{ width: "100%" }}
        onClick={sideBarClose}
        goBack={goBack}
      />

      <div className="tabs-wrapper">
        <div className="tabsWrap">
          <div
            className={`${selectedTab === "data" ? "selected" : ""} ${
              !emailVerified ? "fullWidth" : ""
            }`}
            onClick={() => setSelectedTab("data")}
          >
            Personal data
          </div>
          {emailVerified && (
            <div
              className={selectedTab === "security" ? "selected" : ""}
              onClick={() => setSelectedTab("security")}
            >
              Security
            </div>
          )}
          <span
            className={`highlight-selected ${
              selectedTab === "data" ? "selected-data" : "selected-security"
            } ${!emailVerified ? "fullWidth" : ""}`}
          ></span>
        </div>
      </div>
      {selectedTab === "data" && (
        <div className="body-wrapper">
          <div className={`email_sent ${emailResend ? "email_active" : ""}`}>
            <HelpCard
              status={"warning"}
              color={"#FFA726"}
              body={"long"}
              active={emailResend}
              title={"Help Text"}
              onClick={resendEmail}
              handleClose={() => setEmailResend(false)}
            />
          </div>
          <Input
            type={"default"}
            value={userData.name}
            inputType={"text"}
            placeholder="Enter Full Name"
            label={"Full Name"}
            onChange={(e) => handleUserUpdate(e.target.value, "name")}
            customStyles={{ width: "100%" }}
          />
          <Input
            type={"default"}
            value={userData.email}
            inputType={"text"}
            placeholder="Enter Email"
            label={"Email Address"}
            onChange={(e) => handleUserUpdate(e.target.value, "email")}
            customStyles={{ width: "100%" }}
          />
          {emailError && (
            <HelpText status={"error"} title={emailError} color={"#EF5350"} icon={true} />
          )}
          <HelpText
            className="margin-top-negative"
            status={"info"}
            title={`A verification link will be sent to your email`}
            color={"#6A6D76"}
            fontSize={"font-12"}
            icon={true}
          />
          <Input
            type={"label-input-phone-number"}
            label={"Mobile Number"}
            onChange={(e) => handleUserUpdate(e, "mobile")}
            value={userData.mobile}
            customStyles={{ width: "100%" }}
          />
          <Input
            type={"date-picker-input"}
            onChange={(e) => handleUserUpdate(e, "date_of_birth")}
            value={userData.date_of_birth}
            label={"Date of Birth"}
            customStyles={{ width: "100$" }}
          />
          <Input
            type={"lable-input-select"}
            icon={false}
            selectType={"country"}
            selectLabel={userData.nationality}
            value={userData.nationality}
            label={"Nationality"}
            onClick={(e) => handleUserUpdate(e, "nationality")}
            customStyles={{ width: "100%" }}
          />
          <Input
            type={"label-input-upload"}
            customStyles={{ width: "100%" }}
            onChange={(e) => handleUserUpdate(e, "avatar")}
            value={imgValue}
          />
          <Button
            element="button"
            label={
              personalDataState.loading ? (
                "Loading .."
              ) : (
                <span className="save-wrapper">
                  <svg
                    className={personalDataState.saved ? "activeSvg" : ""}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.5832 6C15.2498 5.66667 14.7498 5.66667 14.4165 6L8.1665 12.25L5.58317 9.66667C5.24984 9.33333 4.74984 9.33333 4.4165 9.66667C4.08317 10 4.08317 10.5 4.4165 10.8333L7.58317 14C7.74984 14.1667 7.9165 14.25 8.1665 14.25C8.4165 14.25 8.58317 14.1667 8.74984 14L15.5832 7.16667C15.9165 6.83333 15.9165 6.33333 15.5832 6Z" />
                  </svg>
                  Save
                </span>
              )
            }
            type="btn-primary"
            size="btn-lg"
            customStyles={{
              width: "100%",
              margin: "0",
              marginTop: "20px",
              background: personalDataState.saved ? "#9CCC65" : "#3d5afe",
              transition: "0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99)",
            }}
            onClick={() => beforePersonalData(userData)}
          />
          {personalDataState?.error && (
            <HelpText
              status={"error"}
              title={personalDataState?.error}
              color={"#EF5350"}
              icon={true}
            />
          )}
        </div>
      )}
      {selectedTab === "security" && (
        <>
          <div className="body-wrapper">
            {hasPasswordSet && (
              <Input
                type={"default"}
                icon={true}
                inputType={"password"}
                placeholder={"current password"}
                label={"Current Password"}
                value={formData.currentPassword}
                onChange={(e) => handleFormUpdate(e.target.value, "currentPassword")}
                customStyles={{ width: "100%" }}
              />
            )}
            <Input
              type={"default"}
              icon={true}
              inputType={"password"}
              placeholder={"new password"}
              label={"New Password"}
              value={formData.newPassword}
              onChange={(e) => handleFormUpdate(e.target.value, "newPassword")}
              customStyles={{ width: "100%" }}
            />
            {securityFormErrors.newPassword && (
              <HelpText
                className="margin-top-negative"
                status={"error"}
                title={securityFormErrors.newPassword}
                color={"#EF5350"}
                icon={true}
              />
            )}
            <Input
              type={"default"}
              icon={true}
              inputType={"password"}
              placeholder={"confirm new password"}
              label={"Confirm New Password"}
              value={formData.confirmPassword}
              onChange={(e) => handleFormUpdate(e.target.value, "confirmPassword")}
              customStyles={{ width: "100%" }}
            />
            {securityFormErrors.confirmPassword && (
              <HelpText
                className="margin-top-negative"
                status={"error"}
                title={securityFormErrors.confirmPassword}
                color={"#EF5350"}
                icon={true}
              />
            )}
            <HelpText
              status={"info"}
              title={`Password should be a minimum of 8 digits and include
              lower and uppercase letter.`}
              color={"#6A6D76"}
              fontSize={"font-12"}
              icon={true}
            />
            <p className="forgot-password" onClick={handleForgetPassword}>
              Forgot your password?
            </p>

            <Button
              element="button"
              label={
                securityDataState.loading ? (
                  "Loading .."
                ) : (
                  <span className="save-wrapper">
                    <svg
                      className={securityDataState.saved ? "activeSvg" : ""}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.5832 6C15.2498 5.66667 14.7498 5.66667 14.4165 6L8.1665 12.25L5.58317 9.66667C5.24984 9.33333 4.74984 9.33333 4.4165 9.66667C4.08317 10 4.08317 10.5 4.4165 10.8333L7.58317 14C7.74984 14.1667 7.9165 14.25 8.1665 14.25C8.4165 14.25 8.58317 14.1667 8.74984 14L15.5832 7.16667C15.9165 6.83333 15.9165 6.33333 15.5832 6Z" />
                    </svg>
                    Update
                  </span>
                )
              }
              type="btn-primary"
              size="btn-lg"
              customStyles={{
                width: "100%",
                margin: 0,
                background: securityDataState.saved ? "#9CCC65" : "#3d5afe",
                transition: "0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99)",
              }}
              onClick={() => beforeSecurityData(formData)}
            />
            {securityDataState.error && (
              <HelpText
                status={"error"}
                title={securityDataState.error}
                color={"#EF5350"}
                icon={true}
              />
            )}
          </div>
          {/* )} */}

          <span className="border-fulls"></span>
          <div className="Tfa">
            <div className="Tfa-title">
              <h3>Two-Factor Verification</h3>
              <Switches
                type={"lg-switches"}
                size={"size"}
                value={twoFactorAuth}
                onChange={(e) => handleTwoFactorAuth(e.currentTarget.checked)}
              />
            </div>
            <div className="Tfa-body">
              <HelpText
                status={"info"}
                title={`Two-factor authentication is a method for protection of your account. When
                it is activated you are required to enter not only your password, but also
                a special code. You can receive this code in mobile app. Even if third
                party gets access to your password, they still won't be able to access
                your account without the 2FA code.`}
                color={"#6A6D76"}
                fontSize={"font-12"}
                icon={true}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
