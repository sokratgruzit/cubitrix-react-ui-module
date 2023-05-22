import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import "./ConfirmPaymentPopup.css";

const ConfirmPaymentPopup = ({
  orderNo,
  amount,
  fee,
  walletAddress,
  receivePaymentAddress,
  handlePaymentConfirm,
  qrcode,
  selectedMethod,
  handlePopUpClose,
}) => {
  const [userWalletAddress, setUserWalletAddress] = useState("");
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
  };

  return (
    <div className="confirm_payment_popup_container">
      <div className="confirm_payment_popup_body">
        <p>Your Order no. {orderNo} has been placed successfully.</p>
        <p>
          Please send {amount} USDT to the address below. The token balance will appear in
          your account only after transaction gets 3 confirmation and approved by our
          team.
        </p>
        <div className="confirm_payment_popup_content">
          <div className="confirm_payment_popup_qr">
            <div className="payment_qrcode">
              <img src={qrcode} alt="qrcode url" />
            </div>
          </div>
          <div className="confirm_payment_popup_info">
            <h3>Payment to the following Tether Wallet Address</h3>
            <p className="confirm_payment_popup_grayText">Transaction Fee: {fee} USDT</p>
            <p className="confirm_payment_popup_grayText">Send Amount: {amount} USDT</p>
            <div className="confirm_payment_popup_address">
              <p>{receivePaymentAddress}</p>
              <button onClick={handleCopy}>Copy</button>
            </div>
            <h3>
              To speed up verification process please enter your wallet address from where
              you'll transferring your amount to our address.
            </h3>
            <div className="confirm_payment_popup_userAddress">
              <Input
                type={"default"}
                value={userWalletAddress}
                inputType={"text"}
                placeholder="Insert your payment address *"
                onChange={(e) => setUserWalletAddress(e.target.value)}
                customStyles={{ width: "100%" }}
                editable={true}
              />
              <p>
                {Math.floor(timeLeft / 60)}:{timeLeft % 60}
              </p>
            </div>
            <div className="confirm_payment_popup_buttons">
              <Button
                element="button"
                label={`Confirm Payment`}
                type="btn-primary"
                size="btn-lg"
                customStyles={{
                  width: "100%",
                  margin: "0",
                }}
                onClick={() =>
                  // handlePaymentConfirsetSelectedPaymentMethodm(userWalletAddress, orderNo)
                  handlePaymentConfirm(userWalletAddress, selectedMethod)
                }
              />
              <Button
                element="button"
                label={`Cancel Payment`}
                type="btn-secondary"
                size="btn-lg"
                customStyles={{
                  width: "100%",
                  margin: "0",
                }}
                onClick={() => handlePopUpClose()}
              />
            </div>
            <h3>I'll provide wallet address later</h3>
            <p className="confirm_payment_popup_grayText">
              Do not make payment through exchange (Kraken, Bitfinex). You can use
              MyEtherWallet, MetaMask, Mist wallets etc.
            </p>
            <p className="confirm_payment_popup_grayText">
              In case you send a different amount, number of CMCX token will update
              accordingly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPaymentPopup;
