import "./NoMetaMask.css";
import React from "react";
import { Button } from "../../Button";
import { MetaMask } from "../../../assets/svgs";

export const NoMetaMask = ({ url }) => {
  const installMetamask = () => {
    console.log("install metamask");
  };
  return (
    <div className="no-metamask-wrap">
      <p className="no-metamask">Metamask is not installed</p>
      <div className="qr-wrap">
        <div className="metamask-icon">
          <img className="wallet-uri" scr={url} alt="no url" />
          <MetaMask className={"metamask-logo"} />
        </div>
      </div>
      <Button
        element="button"
        label="Install"
        type="btn-primary"
        size="btn-lg"
        customStyles={{ width: "100%" }}
        onClick={installMetamask}
      />
    </div>
  );
};
