import "./Connect.css";
import React from "react";
import { Visual } from "../../Visual";
import { Button } from "../../Button";

export const Connect = ({ ConnectOptions, signIn, sideBarClose }) => {
  return (
    <>
      <Visual
        label={"User Account"}
        element={"popup-header"}
        customStyles={{ width: "100%", maxWidth: "100%" }}
        onClick={sideBarClose}
      />
      <div className="sidebar-body">
        {ConnectOptions.map((opt, index) => {
          return (
            <Button
              key={index}
              label={opt.label}
              element={"image-button"}
              image={opt.image}
              svg={opt.svg}
              customStyles={{ width: "340px", maxWidth: "100%" }}
              onClick={opt.connect}
            />
          );
        })}
        <Visual
          label={"or"}
          element={"delimiter"}
          customStyles={{
            width: "100%",
            gap: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <div className={`verified`}>
          <p>If you are verified user</p>
          <Button
            element="button"
            label="Sign in"
            type="btn-secondary"
            size="btn-sm"
            customStyles={{ width: "100%" }}
            onClick={signIn}
          />
        </div>
      </div>
    </>
  );
};