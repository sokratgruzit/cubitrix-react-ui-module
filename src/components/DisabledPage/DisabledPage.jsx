import React from "react";
import "./DisabledPage.css";
import { HelpText } from "../HelpText";

export const DisabledPage = () => {
  return (
    <div className="disabled-account-overlay">
      <HelpText
        className="message"
        status="warning"
        icon={true}
        title={
          " This account is disabled. Try to contact support. Note: disabled user can still use onchain activites like staking."
        }
      />
    </div>
  );
};
