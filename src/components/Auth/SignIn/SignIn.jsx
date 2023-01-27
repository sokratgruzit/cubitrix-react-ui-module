import { useState } from "react";
import "./SignIn.css";
import { Input } from "../../Input";
import { Visual } from "../../Visual";
import { Button } from "../../Button";
import { HelpText } from "../../HelpText";

export const SignIn = ({ onClick, sideBarClose, goBack, signInState }) => {
  const [data, setData] = useState({ email: "", password: "" });

  const handlerDataUpdate = (value, field) => {
    setData((prevState) => ({ ...prevState, [field]: value }));
  };
  return (
    <div className="sign-in-module">
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
          placeholder="email"
          label="Enter Address"
          onChange={(e) => handlerDataUpdate(e.target.value, "email")}
          customStyles={{ width: "auto" }}
        />
        <Input
          type={"default"}
          icon={true}
          inputType={"password"}
          // coverHandler={coverhandler}
          placeholder={"password"}
          label={"Enter Password"}
          subLabel={""}
          onChange={(e) => handlerDataUpdate(e.target.value, "password")}
          customStyles={{ width: "auto" }}
        />
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
    </div>
  );
};
