import React, { useState } from "react";
import { Button } from "../../Button";
import { HelpText } from "../../HelpText";
import { Visual } from "../../Visual";
import "./ResetPassword.css";

export const ResetPassword = ({
  goBack,
  sideBarClose,
  handleResetPassword,
  resetPasswordState,
  resetEmail,
}) => {
  const [selected, setSelected] = useState("email");
  return (
    <div>
      <Visual
        label={"Reset password"}
        element={"popup-header"}
        customStyles={{ width: "100%" }}
        onClick={sideBarClose}
        goBack={goBack}
      />
      <div className="body-wrapper">
        <p className="text-gray1">
          Would you like to receive a code to reset your password at the specified email
          address?
        </p>
        <label className="reset-options">
          <input
            type="radio"
            name="options"
            value="email"
            onChange={(e) => setSelected(e.target.value)}
            checked={selected === "email"}
          />
          <span className="radio-button">
            <span className="inner-radio-button"></span>
          </span>
          <div>
            <p className="opt-name">Send Code This Email</p>
            <p className="opt-email">{resetEmail}</p>
          </div>
        </label>
        {/* <label className="reset-options">
          <input
            type="radio"
            name="options"
            value="mobile"
            onChange={(e) => setSelected(e.target.value)}
            checked={selected === "mobile"}
          />
          <span className="radio-button">
            <span className="inner-radio-button"></span>
          </span>
          <div>
            <p>select code</p>
          </div>
        </label> */}
        <Button
          customStyles={{ width: "100%" }}
          element="button"
          label={resetPasswordState.loading ? "Loading ..." : "Send"}
          onClick={() => handleResetPassword(selected)}
          type="btn-primary"
          size="btn-sm"
        />
        {resetPasswordState.error && (
          <HelpText
            status={"error"}
            title={resetPasswordState.error}
            color={"#EF5350"}
            icon={true}
          />
        )}
        {resetPasswordState.success && (
          <HelpText
            status={"success"}
            title={resetPasswordState.success}
            fontSize={"font-12"}
            icon={true}
          />
        )}
      </div>
    </div>
  );
};
