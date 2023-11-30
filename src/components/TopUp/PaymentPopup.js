import React, { useState } from "react";
import { Button } from "../Button";
import "./PaymentPopup.css";
import { HelpText } from "../HelpText";
import { EthIcon } from "../../assets/svgs";

const PaymentPopup = ({
  setOpenConfirmPaymentPopup,
  setOpenPopup,
  selectedMethod,
  setSelectedPaymentMethod,
  selectedPaymentMethod,
  handleCoindbasePayment,
  tokenAmount,
  paymentTypes,
  fee,
  payment,
  receiveTokens,
}) => {
  const [agreed, setAgreed] = useState(false);

  const handleMethodSelect = (id) => {
    setSelectedPaymentMethod(id);
  };

  const handleAgreement = (e) => {
    setAgreed(e.target.checked);
  };

  return (
    <div className="payment_popup_container">
      <div className="payment_popup_body">
        <p>
          Please make payment of {payment} to receive {receiveTokens}A1.
        </p>
        <p>Transaction Fee: {fee}</p>
        <p>
          You can choose any of the following payment methods to make your payment. The A1
          balance will appear in your account after successful payment.
        </p>
        <h3>Select payment method:</h3>
        <div className="payment_methods_container">
          {paymentTypes.map((method) => {
            if (selectedMethod === "TETHER" && method.id === 2) return null;
            return (
              <div
                key={method.id}
                className={`topup_methodBox payment_methods_topup ${
                  selectedPaymentMethod === method.id ? "topup_selected" : ""
                }`}
                onClick={() => handleMethodSelect(method.id)}
              >
                <img src={method.logo} className="topup_method_logo" alt="" />
                <p className="payment_popup_grayText">{method.title}</p>
              </div>
            );
          })}
        </div>
        <p className="payment_popup_grayText">
          <span className="payment-starChar">*</span> Payment gateway may charge you a
          processing fee.
        </p>
        <p className="payment_popup_grayText">You can use these currencies to pay —</p>

        <label className="confirm_payment_popup_checkbox">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            value="agree"
            onChange={handleAgreement}
          />
          <span className="confirm_payment_popup_checkmark"></span>I hereby agree to the
          A1 purchase agreement and A1 sale term.
        </label>
        <Button
          element="button"
          label={`Contribute Now`}
          type="btn-secondary"
          size="btn-lg"
          customStyles={{
            width: "100%",
            margin: "0",
            marginBottom: "10px",
          }}
          onClick={() => {
            if (selectedMethod === "Coinbase" && selectedPaymentMethod === 2) {
              handleCoindbasePayment(tokenAmount);
              return;
            }
            setOpenConfirmPaymentPopup(true);
            setOpenPopup(false);
          }}
          disabled={!agreed}
        />
        <p className="payment_popup_grayText"></p>
        <HelpText
          status={"info"}
          title={
            "Our payment address will appear or redirect you for payment after the order is placed."
          }
          fontSize={"font-12"}
          icon={true}
        />
      </div>
    </div>
  );
};

export default PaymentPopup;
