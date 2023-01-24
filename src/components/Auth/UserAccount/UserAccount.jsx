import React, { useState } from "react";
import { Button } from "../../Button";
import { Visual } from "../../Visual";
import "./UserAccount.css";

export const UserAccount = ({
  sideBarClose,
  goBack,
  handlePersonalData,
  handleSecurityData,
  response,
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
          <div
            className={selectedTab === "security" ? "selected" : ""}
            onClick={() => setSelectedTab("security")}
          >
            Security
          </div>
        </div>
      </div>
      {selectedTab === "data" && (
        <div className="bodyWrapper">
          <div className="inputWrapper">
            <p>Full Name</p>
            <input
              className="input"
              value={userData.name}
              onChange={(e) => handleUserUpdate(e.target.value, "name")}
              placeholder="Enter Full Name"
            />
          </div>
          <div className="inputWrapper">
            <p>Email Addresse</p>
            <input
              className="input"
              value={userData.email}
              onChange={(e) => handleUserUpdate(e.target.value, "email")}
              placeholder="Enter email"
            />
          </div>
          <div className="inputWrapper">
            <p>Mobile Number</p>
            <input
              className="input"
              value={userData.mobile}
              onChange={(e) => handleUserUpdate(Number(e.target.value), "mobile")}
              placeholder="mobile number"
            />
          </div>
          <div className="inputWrapper">
            <p>Date of Birth</p>
            <input
              className="input"
              // value={userData.date_of_birth}
              // onChange={(e) => handleUserUpdate(e.target.value, "date_of_birth")}
              placeholder="MM/DD/YYYY"
            />
          </div>
          <div className="inputWrapper">
            <p>Nationality</p>
            <input
              className="input"
              // value={userData.date_of_birth}
              // onChange={(e) => handleUserUpdate(e.target.value, "date_of_birth")}
              placeholder="nationality"
            />
          </div>
          <div>upload image</div>
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
