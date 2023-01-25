import "./UserOptions.css";
import React from "react";
import { Visual } from "../../Visual";
import { Button } from "../../Button";
import { MetaMask } from "../../../assets/svgs";

export const UserOptions = ({
  completeAccount,
  sideBarClose,
  userAccount,
  disconnect,
  warning,
  type,
}) => {
  return (
    <>
      <Visual
        label={"Welcome!"}
        element={"popup-header"}
        customStyles={{ width: "100%" }}
        onClick={sideBarClose}
      />
      <div className="sidebar-body">
        {warning && (
          <>
            <div className="complete">
              <p>Complete the onboarding flow to start trading on COMPLEND</p>
              <Button
                element="button"
                label="Complete Account"
                type="btn-primary"
                size="btn-lg"
                onClick={completeAccount}
                customStyles={{ width: "179px" }}
              />
            </div>
            <span className="border-full"></span>
          </>
        )}
        <div className="address-wrap">
          <p>Your Address</p>
          <p>
            {type === "Metamask" && <MetaMask />}
            {type}
          </p>
        </div>
        <Visual
          label={"0xb81G555828610c156eF3408DE21A3eC9b9B29V81"}
          element={"copy-address"}
          customStyles={{ width: "100%" }}
        />
        <span className="border-full"></span>
        <Button
          label={"User Account"}
          element={"side-button"}
          customStyles={{ width: "100%" }}
          svg={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 6.59163V11.4C1.5 13.1666 1.5 13.1666 3.16667 14.2916L7.75 16.9416C8.44167 17.3416 9.56667 17.3416 10.25 16.9416L14.8333 14.2916C16.5 13.1666 16.5 13.1666 16.5 11.4083V6.59163C16.5 4.8333 16.5 4.8333 14.8333 3.7083L10.25 1.0583C9.56667 0.658301 8.44167 0.658301 7.75 1.0583L3.16667 3.7083C1.5 4.8333 1.5 4.8333 1.5 6.59163Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11.5C9.66304 11.5 10.2989 11.2366 10.7678 10.7677C11.2366 10.2989 11.5 9.66301 11.5 8.99997C11.5 8.33693 11.2366 7.70104 10.7678 7.2322C10.2989 6.76336 9.66304 6.49997 9 6.49997C8.33696 6.49997 7.70107 6.76336 7.23223 7.2322C6.76339 7.70104 6.5 8.33693 6.5 8.99997C6.5 9.66301 6.76339 10.2989 7.23223 10.7677C7.70107 11.2366 8.33696 11.5 9 11.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          warning={warning}
          onClick={userAccount}
        />
        <Button
          label={"Disconnect"}
          element={"side-button"}
          customStyles={{ width: "100%" }}
          svg={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5333 12.1835L16.6666 10.0502L14.5333 7.91683M8.1333 10.0502H16.6083M9.79997 16.6668C6.11663 16.6668 3.1333 14.1668 3.1333 10.0002C3.1333 5.8335 6.11663 3.3335 9.79997 3.3335"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          onClick={disconnect}
        />
      </div>
    </>
  );
};
