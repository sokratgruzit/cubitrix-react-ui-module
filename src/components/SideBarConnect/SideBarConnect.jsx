import "./SideBarConnect.css";
import React from "react";
import { Visual } from "../Visual";
import { Button } from "../Button";

export const SideBarConnect = ({ ConnectOptions, address, signIn }) => {
  let image = `https://s3.cointelegraph.com/storage/uploads/view/45ac886ece164ffba711e9c73b59d7b8.png`;

  return (
    <>
      <Visual
        label={"User Account"}
        element={"popup-header"}
        customStyles={{ width: "100%", maxWidth: "100%" }}
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
              onClick={() => opt.connect}
            />
          );
        })}
        {/* <Visual
          label={address}
          element={"copy-address"}
          customStyles={{ width: "340px", maxWidth: "100%" }}
        /> */}
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
