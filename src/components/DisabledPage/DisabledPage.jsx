import React from "react";
import "./DisabledPage.css";
import { HelpText } from "../HelpText";

const DisabledPage = () => {
  return (
    <>
      <HelpText
        className="message"
        status="warning"
        icon={true}
        title={
          " This account is disabled. Try to contact support. Note: disabled user can still use onchain activites like staking."
        }
      />
    </>
  );
};

export default DisabledPage;
