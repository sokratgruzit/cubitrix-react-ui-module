import { useState } from "react";
import "./SignIn.css";
import { Input } from "../../Input";
import { Visual } from "../../Visual";
import { Button } from "../../Button";
import { HelpText } from "../../HelpText";

export const SignIn = ({
  onClick,
  sideBarClose,
  goBack,
  signInState,
  otpEnabled,
  otpState,
  handleTFA,
  resetPasswordState,
  handleResetPassword,
}) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [code, setCode] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [resetPassword, setResetPassword] = useState(false);

  const handlerDataUpdate = (value, field) => {
    setData((prevState) => ({ ...prevState, [field]: value }));
  };
  return (
    <div className="sign-in-module">
      {resetPassword ? (
        <>
          <Visual
            label={"Reset password"}
            element={"popup-header"}
            customStyles={{ width: "100%" }}
            onClick={sideBarClose}
            goBack={goBack}
          />
          <div className="otp-body">
            <Input
              type={"default"}
              icon={true}
              inputType={"text"}
              placeholder="Enter Email"
              label="Your Email"
              onChange={(e) => setResetEmail(e.target.value)}
              value={resetEmail}
              customStyles={{ width: "auto" }}
            />
            <Button
              label={resetPasswordState.loading ? "Sending  ... " : "Send reset link"}
              type="btn-primary"
              size="btn-sm"
              element={"button"}
              customStyles={{ width: "100%", marginTop: "20px" }}
              onClick={() => handleResetPassword(resetEmail)}
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
        </>
      ) : (
        <>
          {otpEnabled ? (
            <>
              <div className="otp-body">
                <h3 className="otp-title">Two-Factor Authentication</h3>
                <p className="otp-info">
                  Open the two-step verification app on your mobile device to get your
                  verification code.
                </p>
                <Input
                  type={"default"}
                  icon={true}
                  inputType={"text"}
                  placeholder="Enter Code"
                  label="Authentication Code"
                  onChange={(e) => setCode(e.target.value)}
                  customStyles={{ width: "auto" }}
                />
                <Button
                  label={otpState.loading ? "Authrnticating ... " : "Authrnticate"}
                  type="btn-primary"
                  size="btn-sm"
                  element={"button"}
                  customStyles={{ width: "100%", marginTop: "20px" }}
                  onClick={() => handleTFA(code)}
                />
                {otpState.error && (
                  <HelpText
                    status={"error"}
                    title={otpState.error}
                    color={"#EF5350"}
                    icon={true}
                  />
                )}
              </div>
            </>
          ) : (
            <>
              <Visual
                label={"Sign In"}
                element={"popup-header"}
                customStyles={{ width: "100%" }}
                onClick={sideBarClose}
                goBack={goBack}
              />
              <div className="form-group">
                <Input
                  type={"default"}
                  icon={true}
                  inputType={"text"}
                  placeholder="Enter Email"
                  label="Email"
                  onChange={(e) => handlerDataUpdate(e.target.value, "email")}
                  customStyles={{ width: "auto" }}
                />
                <Input
                  type={"default"}
                  icon={true}
                  inputType={"password"}
                  placeholder={"********"}
                  label={"Password"}
                  subLabel={""}
                  onChange={(e) => handlerDataUpdate(e.target.value, "password")}
                  customStyles={{ width: "auto" }}
                />
                <p
                  className="forgot-password-opt margin-top-negative"
                  onClick={() => setResetPassword(true)}
                >
                  Forgot your password?
                </p>
              </div>
              <div className="form-group-btn">
                <Button
                  label={signInState.loading ? "Signing in ... " : "Sign In"}
                  type="btn-primary"
                  size="btn-sm"
                  element={"button"}
                  customStyles={{ width: "100%" }}
                  onClick={() => onClick(data)}
                />
                {signInState.error && (
                  <HelpText
                    status={"error"}
                    title={signInState.error}
                    color={"#EF5350"}
                    icon={true}
                  />
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
