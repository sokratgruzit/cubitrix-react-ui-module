import React from "react";
import "./DisabledPage.css";
import { HelpText } from "../HelpText";

export const DisabledPage = ({order}) => {
  return (
    <div className={`${"disabled-account-overlay"} ${order === 'dashboard' ? "disabled-account-overlay-dashboard" : ""}`}>
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
