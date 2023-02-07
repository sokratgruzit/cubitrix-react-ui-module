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
      <div className="metamask-icon">
        <MetaMask className={"metamask-logo"} />
      </div>
      <a
        className="install-metamask"
        href="https://metamask.io/download/"
        target="_blank"
      >
        Install
      </a>
    </div>
  );
};
