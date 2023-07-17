import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import "./ConfirmPaymentPopup.css";

const ConfirmPaymentPopup = ({
  hash,
  amount,
  fee,
  walletAddress,
  receivePaymentAddress,
  handlePaymentConfirm,
  qrcode,
  selectedMethod,
  handlePopUpClose,
  tokenAmount,
  setOpenConfirmPaymentPopup,
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
        <p>Your transaction {hash} has been placed successfully.</p>
        <p>
          Please send {amount} USDT to the address below. The ATR balance will appear in
          your account only after transaction gets 3 confirmation and approved by our
          team.
        </p>
        <div className="confirm_payment_popup_content">
          <div className="confirm_payment_popup_qr">
            <div className="payment_qrcode">
              <img src={qrcode} alt=" " />
            </div>
          </div>
          <div className="confirm_payment_popup_info">
            <h3 className="confitm_payment_title">
              Payment to the following Tether Wallet Address
            </h3>
            <p className="confirm_payment_popup_grayText">Transaction Fee: {fee} USDT</p>
            <p className="confirm_payment_popup_grayText">Send Amount: {amount} USDT</p>
            <div className="confirm_payment_popup_address">
              <p>{receivePaymentAddress}</p>
              <button onClick={handleCopy} className="confirm_payment_copy">
                {copyButtonText}
              </button>
            </div>
            <h3 className="confirm_payment_speedup">
              To speed up verification process please enter your wallet address from where
              you'll transferring your amount to our address.
            </h3>
            <div className="confirm_payment_popup_userAddress">
              <Input
                type={"default"}
                value={userWalletAddress}
                inputType={"text"}
                placeholder="Enter"
                onChange={(e) => setUserWalletAddress(e.target.value)}
                inputClassName="confirm_payment_popup_input"
                editable={true}
              />
              <p className="confirm_payment_timer">
                {Math.floor(timeLeft / 60)}:{timeLeft % 60}
              </p>
            </div>
            <div className="confirm_payment_popup_buttons">
              <Button
                element="button"
                label={`Confirm Payment`}
                type="btn-secondary"
                size="btn-lg"
                customStyles={{
                  width: "100%",
                  margin: "0",
                }}
                onClick={() =>
                  handlePaymentConfirm(
                    userWalletAddress,
                    selectedMethod,
                    tokenAmount,
                    startTime,
                  )
                }
              />
              <Button
                element="button"
                label={`Cancel Payment`}
                type="btn-gray"
                size="btn-lg"
                customStyles={{
                  width: "100%",
                  margin: "0",
                }}
                onClick={() => handlePopUpClose()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPaymentPopup;
