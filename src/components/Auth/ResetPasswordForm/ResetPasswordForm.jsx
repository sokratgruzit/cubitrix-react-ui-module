import { useState, useEffect } from "react";
import { Button } from "../../Button";
import { HelpText } from "../../HelpText";
import { Input } from "../../Input";

import "./ResetPasswordForm.css";

export const ResetPasswordForm = ({ handleNewPassword, passwordSetUpState }) => {
  const [data, setData] = useState({ newPassword: "", confirmPassword: "" });
  const [passwordErrors, setPasswordErrors] = useState({});

  const handleFormUpdate = (value, field) => {
    setData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handlePasswordSetup = () => {
    const atLeastOneError = Object.entries(passwordErrors).some((obj) => obj[1]);
    if (atLeastOneError) return null;
    const errors = {};
    if (!data.newPassword) errors.newPassword = "password is required";

    if (data.newPassword && !data.confirmPassword)
      errors.confirmPassword = "match is not correct";

    if (JSON.stringify(errors) !== "{}")
      return setPasswordErrors((prev) => ({ ...prev, ...errors }));

    handleNewPassword(data);
  };

  useEffect(() => {
    const errors = { newPassword: false, confirmPassword: false };
    const passwordValidation = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    if (!passwordValidation.test(data.newPassword) && data.newPassword.length > 0)
      errors.newPassword =
        "password must contain a minimum of 8 characters, uppercase and special character";
    if (data.newPassword !== data.confirmPassword && data.confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    setPasswordErrors((prev) => ({ ...prev, ...errors }));
  }, [data]);
  return (
    <div className="reset-password-wrap">
      <h1 className="reset-title">Reset Password</h1>
      <p className="reset-text">
        Some text accessible day viewless perform, emperor leaf
      </p>
      <div className="reset-password-body">
        <Input
          type={"default"}
          icon={true}
          inputType={"password"}
          placeholder={"new password"}
          label={"New Password"}
          value={data.newPassword}
          onChange={(e) => handleFormUpdate(e.target.value, "newPassword")}
          customStyles={{ width: "100%" }}
        />
        {passwordErrors.newPassword && (
          <HelpText
            className="margin-top-negative"
            status={"error"}
            title={passwordErrors.newPassword}
            color={"#FF0C46"}
            icon={true}
          />
        )}
        <Input
          type={"default"}
          icon={true}
          inputType={"password"}
          placeholder={"confirm new password"}
          label={"Confirm New Password"}
          value={data.confirmPassword}
          onChange={(e) => handleFormUpdate(e.target.value, "confirmPassword")}
          customStyles={{ width: "100%" }}
        />
        {passwordErrors.confirmPassword && (
          <HelpText
            className="margin-top-negative"
            status={"error"}
            title={passwordErrors.confirmPassword}
            color={"#FF0C46"}
            icon={true}
          />
        )}
        <Button
          customStyles={{ width: "100%" }}
          element="button"
          label={passwordSetUpState.loading ? "Loading ..." : "Confirm"}
          onClick={handlePasswordSetup}
          type="btn-primary"
          size="btn-sm"
        />
        {passwordSetUpState.error && (
          <HelpText
            status={"error"}
            title={passwordSetUpState.error}
            color={"#FF0C46"}
            icon={true}
          />
        )}
        {passwordSetUpState.success && (
          <HelpText
            status={"success"}
            title={passwordSetUpState.success}
            fontSize={"font-12"}
            icon={true}
          />
        )}
      </div>
    </div>
  );
};
