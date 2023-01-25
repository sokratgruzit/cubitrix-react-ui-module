import React, { useEffect, useState } from "react";
import { Button } from "../../Button";
import { HelpCard } from "../../HelpCard";
import { HelpText } from "../../HelpText";
import { Input } from "../../Input";
import { Visual } from "../../Visual";
import "./UserAccount.css";

export const UserAccount = ({
  sideBarClose,
  goBack,
  handlePersonalData,
  handleSecurityData,
  emailVerified,
  personalData,
  personalDataState,
  securityDataState,
  resendEmail,
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
    mobile: "",
    date_of_birth: Date.now(),
    nationality: "UK",
    avatar: "string",
  });

  const [securityFormErrors, setSecurityFormErrors] = useState({});

  const handleFormUpdate = (value, field) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleUserUpdate = (value, field) => {
    setUserData((prevState) => ({ ...prevState, [field]: value }));
  };

  const beforePersonalData = (userData) => {
    handlePersonalData(userData);
  };
  const beforeSecurityData = (userData) => {
    handleSecurityData(userData);
  };
  useEffect(() => {
    if (personalData) {
      setUserData(personalData);
    }
  }, [personalData]);

  useEffect(() => {
    const formErrors = {
      newPassword: false,
      matchPassword: false,
    };
    if (formData.newPassword.length > 0 && formData.newPassword.length <= 4)
      formErrors.newPassword = "Password too short";
    if (formData.newPassword !== formData.confirmPassword && formData.confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";
    setSecurityFormErrors(formErrors);
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
        </div>
      </div>
      {selectedTab === "data" && (
        <div className="body-wrapper">
          <div
            className={`email_sent ${personalDataState.emailSent ? "email_active" : ""}`}
          >
            <HelpCard
              status={"warning"}
              color={"#FFA726"}
              body={"long"}
              active={personalDataState.emailSent}
              title={"Help Text"}
              onClick={resendEmail}
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
          <Input
            type={"label-input-phone-number"}
            value={userData.mobile}
            placeholder="Enter Mobile"
            label={"Mobile Number"}
            countryData={[
              {
                id: 1,
                title: "The United Kingdom ",
                image:
                  "http://www.flaginstitute.org/wp/wp-content/uploads/flags/UK-Mercia.png",
                numbering: "(+78)",
              },
              {
                id: 2,
                title: "Brazil",
                image:
                  "http://www.flaginstitute.org/wp/wp-content/uploads/flags/UK-Mercia.png",
                numbering: "(+76)",
              },
            ]}
            onChange={(e) => handleUserUpdate(e.target.value, "mobile")}
            customStyles={{ width: "100%" }}
          />
          <Input
            type={"date-picker-input"}
            onChange={(e) => handleUserUpdate(e.target.value, "date_of_birth")}
            label={"Date of Birth"}
            customStyles={{ width: "100$" }}
          />
          <div className="inputWrapper">
            <p>Nationality</p>
            <input className="input" placeholder="nationality" />
          </div>
          <Input
            type={"lable-input-select"}
            icon={false}
            selectType={"country"}
            selectData={[]}
            defaultData={"machusets"}
            selectHandler={(e) => console.log(e)}
            customStyles={{ width: "100%" }}
          />
          <Input type={"label-input-upload"} customStyles={{ width: "100%" }} />
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
            size="btn-sm"
            customStyles={{
              width: "100%",
              background: personalDataState.saved ? "#9CCC65" : "#3d5afe",
              transition: "0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99)",
            }}
            onClick={() => beforePersonalData(userData)}
          />
        </div>
      )}
      {selectedTab === "security" && (
        <div className="body-wrapper">
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
            size="btn-sm"
            customStyles={{
              width: "100%",
              background: securityDataState.saved ? "#9CCC65" : "#3d5afe",
              transition: "0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99)",
            }}
            onClick={() => beforeSecurityData(formData)}
          />
        </div>
      )}
    </>
  );
};
