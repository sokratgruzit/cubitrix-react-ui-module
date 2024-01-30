import React from "react";
import { Button } from "../../Button";
import "./FeeWarning.css";

export const FeeWarning = ({ handleProceed, handleCancel, fee }) => {
  return (
    <div className="change-network-body">
      <p>Please note that opening new account costs {fee ?? 2} AONE. </p>
      <div className="network-warning">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.15219 16.4286L10.8225 5.70913C10.9358 5.49506 11.1053 5.31592 11.3127 5.19097C11.5202 5.06602 11.7578 5 12 5C12.2422 5 12.4798 5.06602 12.6873 5.19097C12.8947 5.31592 13.0642 5.49506 13.1775 5.70913L18.8478 16.4286C18.9542 16.6309 19.0065 16.8573 18.9994 17.0858C18.9923 17.3142 18.9261 17.537 18.8074 17.7323C18.6886 17.9276 18.5212 18.0888 18.3216 18.2002C18.122 18.3116 17.897 18.3694 17.6684 18.3679H6.32903C6.10067 18.3689 5.87593 18.3108 5.67669 18.1992C5.47744 18.0877 5.31046 17.9264 5.19199 17.7312C5.07352 17.5359 5.00759 17.3134 5.00062 17.0851C4.99364 16.8569 5.04586 16.6307 5.15219 16.4286V16.4286Z"
            stroke="#FF0C46"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M11.998 9.45752V13.2764"
            stroke="#FF0C46"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M11.9996 16.4587C12.5269 16.4587 12.9543 16.0313 12.9543 15.504C12.9543 14.9768 12.5269 14.5493 11.9996 14.5493C11.4724 14.5493 11.0449 14.9768 11.0449 15.504C11.0449 16.0313 11.4724 16.4587 11.9996 16.4587Z"
            fill="#FF0C46"
          />
        </svg>
        <p>This action involves spending AONE. This is one time thing.</p>
      </div>
      <Button
        element="button"
        label={`Proceed`}
        type="btn-primary"
        size="btn-lg"
        customStyles={{
          width: "100%",
          margin: "0",
          height: "50px",
        }}
        onClick={handleProceed}
      />
      <Button
        element="button"
        label={`Cancel `}
        type="btn-secondary"
        size="btn-sm"
        customStyles={{
          width: "100%",
          margin: "0",
          height: "50px",
        }}
        onClick={handleCancel}
      />
    </div>
  );
};
