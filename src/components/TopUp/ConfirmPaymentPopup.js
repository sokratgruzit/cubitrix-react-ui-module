import React, { useState } from "react";
import { Button } from "../Button";
import { HelpText } from "../HelpText";
import translates from "../../translates.json";

import "./ConfirmPaymentPopup.css";

const ConfirmPaymentPopup = ({
  qrcode,
  selectedMethod,
  tokenAmount,
  tranasctionFee,
  rates,
  exchangeDetails,
  setExchangeDetails,
}) => {
  // const [timeLeft, setTimeLeft] = useState(10 * 60);
  // const [startTime, setStartTime] = useState(null);
  const [copyButtonText, setCopyButtonText] = useState("Copy"); // New state variable

  // useEffect(() => {
  //   setStartTime(new Date());
  //   const timer = setInterval(() => {
  //     setTimeLeft((timeLeft) => timeLeft - 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  // useEffect(() => {
  //   if (timeLeft <= 0) {
  //     setOpenConfirmPaymentPopup(false);
  //   }
  // }, [timeLeft, setOpenConfirmPaymentPopup]);

  const handleCopy = () => {
    navigator.clipboard.writeText(exchangeDetails?.address);
    setCopyButtonText("Copied!"); // Change button text to "Copied!"

    setTimeout(() => {
      setCopyButtonText("Copy");
    }, 3000);
  };

  return (
    <div className="confirm_payment_popup_container">
      <div className="confirm_payment_popup_body">
        <p>{translates.your_transaction_has_been_placed_successfully.en}</p>
        <p>
          {translates.please_send.en}{" "}
          {(Number(tokenAmount) + Number(tranasctionFee)) /
            rates?.[selectedMethod?.toLowerCase()]?.usd}{" "}
          {selectedMethod} {translates.to_the_address_below.en}
        </p>
        <div className="confirm_payment_popup_content">
          <div className="confirm_payment_popup_qr">
            <div className="payment_qrcode">
              <img src={qrcode} alt=" " />
            </div>
          </div>
          <div className="confirm_payment_popup_info">
            <h3 className="confitm_payment_title">
              {translates.payment_to_the_following_wallet_address.en}
            </h3>
            <p className="confirm_payment_popup_grayText">
              {translates.transaction_fee.en} {Number(tranasctionFee)} USD
            </p>
            <p className="confirm_payment_popup_grayText">
              {translates.send_amount.en}{" "}
              {(Number(tokenAmount) + Number(tranasctionFee)) /
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
          title={translates.help_text_please_send.en}
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
          onClick={() => setExchangeDetails({})}
        />
      </div>
    </div>
  );
};

export default ConfirmPaymentPopup;
