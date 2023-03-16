import React from "react";
import "./LoanStatus.css";

const LoanStatus = ({ status }) => {
  return (
    <div
      className={`status ${status === "Accepted" && "offer-accepted"} ${
        status === "Rejected" && "offer-rejected"
      } ${status === "Active" && "offer-active"} ${
        status === "Revoked" && "offer-revoked"
      } ${status === "Expired" && "offer-expired"} `}
    >
      {status}
    </div>
  );
};

export default LoanStatus;
