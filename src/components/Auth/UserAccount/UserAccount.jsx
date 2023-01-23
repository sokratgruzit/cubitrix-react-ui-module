import React, { useEffect, useState } from "react";
import { Button } from "../../Button";
import { HelpCard } from "../../HelpCard";
import { Input } from "../../Input";
import { Visual } from "../../Visual";
import "./UserAccount.css";

export const UserAccount = ({
  sideBarClose,
  goBack,
  handlePersonalData,
  handleSecurityData,
  response,
  emailVerified,
  personalData,
  emailSent,
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
  const handleFormUpdate = (value, field) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleUserUpdate = (value, field) => {
    setUserData((prevState) => ({ ...prevState, [field]: value }));
  };
  useEffect(() => {
    if (personalData) {
      setUserData(personalData);
    }
  }, [personalData]);

  return (
    <>
      <Visual
        label={"User Account"}
        element={"popup-header"}
        customStyles={{ width: "100%" }}
        onClick={sideBarClose}
        goBack={goBack}
      />
      <div className="tabsWrapper">
        <div className="tabsWrap">
          <div
            className={selectedTab === "data" ? "selected" : ""}
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
        <div className="bodyWrapper">
          <div className={`email_sent ${emailSent && "email_active"}`}>
            <HelpCard
              status={"warning"}
              color={"#FFA726"}
              body={"long"}
              active={emailSent}
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
            countryData={[]}
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
          <Input type={"label-input-upload"} customStyles={{ width: "100%" }} />
          <Button
            element="button"
            label="Save"
            type="btn-primary"
            size="btn-sm"
            customStyles={{ width: "100%" }}
            onClick={() => handlePersonalData(userData)}
          />
          {response}
        </div>
      )}
      {selectedTab === "security" && (
        <div className="bodyWrapper">
          <div className="inputWrapper">
            <p>Current Password</p>
            <input
              className="input"
              value={formData.currentPassword}
              onChange={(e) => handleFormUpdate(e.target.value, "currentPassword")}
              placeholder="current password"
            />
          </div>
          <div className="inputWrapper">
            <p>New Password</p>
            <input
              className="input"
              value={formData.newPassword}
              onChange={(e) => handleFormUpdate(e.target.value, "newPassword")}
              placeholder="new password"
            />
          </div>
          <div className="inputWrapper">
            <p>Confirm New Password</p>
            <input
              className="input"
              value={formData.confirmPassword}
              onChange={(e) => handleFormUpdate(e.target.value, "confirmPassword")}
              placeholder="confirm new password"
            />
          </div>
          <Button
            element="button"
            label="Update"
            type="btn-primary"
            size="btn-sm"
            customStyles={{ width: "100%" }}
            onClick={() => handleSecurityData(formData)}
          />
          {response}
        </div>
      )}
    </>
  );
};
