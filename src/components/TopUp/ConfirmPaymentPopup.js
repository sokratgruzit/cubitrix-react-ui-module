import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import "./ConfirmPaymentPopup.css";
import { HelpText } from "../HelpText";

const ConfirmPaymentPopup = ({
  hash,
  amount,
  fee,
  receivePaymentAddress,
  handlePaymentConfirm,
  qrcode,
  selectedMethod,
  handlePopUpClose,
  tokenAmount,
  setOpenConfirmPaymentPopup,
  exchangeRate,
  tranasctionFee,
  rates,
  exchangeDetails,
}) => {
  const [userWalletAddress, setUserWalletAddress] = useState("");
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [startTime, setStartTime] = useState(null);
  const [copyButtonText, setCopyButtonText] = useState("Copy"); // New state variable

  useEffect(() => {
    setStartTime(new Date());
    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setOpenConfirmPaymentPopup(false);
    }
  }, [timeLeft, setOpenConfirmPaymentPopup]);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopyButtonText("Copied!"); // Change button text to "Copied!"

    // Change button text back to "Copy" after 3 seconds
    setTimeout(() => {
      setCopyButtonText("Copy");
    }, 3000);
  };

  return (
    <div className="confirm_payment_popup_container">
      <div className="confirm_payment_popup_body">
        <p>Your transaction has been placed successfully.</p>
        <p>
          Please send{" "}
          {(Number(tokenAmount) * Number(exchangeRate) + Number(tranasctionFee)) /
            rates?.[selectedMethod?.toLowerCase()]?.usd}{" "}
          {selectedMethod} to the address below. The A1 balance will appear in your
          account after system approves it. This might take up to 1 minute.
        </p>
        <div className="confirm_payment_popup_content">
          <div className="confirm_payment_popup_qr">
            <div className="payment_qrcode">
              <img src={qrcode} alt=" " />
            </div>
          </div>
          <div className="confirm_payment_popup_info">
            <h3 className="confitm_payment_title">
              Payment to the following Wallet Address
            </h3>
            <p className="confirm_payment_popup_grayText">Transaction Fee: 1 USD</p>
            <p className="confirm_payment_popup_grayText">
              Send Amount:{" "}
              {(Number(tokenAmount) * Number(exchangeRate) + Number(tranasctionFee)) /
                rates?.[selectedMethod?.toLowerCase()]?.usd}{" "}
              {selectedMethod}
            </p>
            <div className="confirm_payment_popup_address">
              <p>{exchangeDetails?.address}</p>
              <button onClick={handleCopy} className="confirm_payment_copy">
                {copyButtonText}
              </button>
            </div>
          </div>
        </div>
        <HelpText
          status={"warning"}
          title={
            "Please send inputed amount to the address above. Once system detects A1 in your wallet you will be on the next step."
          }
          icon={true}
          customStyles={{ marginTop: "15px" }}
        />
        <Button
          element="button"
          label={`Cancel`}
          type="btn-gray"
          size="btn-lg"
          customStyles={{
            width: "100%",
            margin: "0",
            marginTop: "15px",
          }}
          onClick={() => handleCancelPayment()}
        />
      </div>
    </div>
  );
};

export default ConfirmPaymentPopup;
