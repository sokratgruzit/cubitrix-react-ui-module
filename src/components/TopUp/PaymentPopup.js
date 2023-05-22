import React, { useState } from "react";
import { Button } from "../Button";
import "./PaymentPopup.css";

const PaymentPopup = ({
  setOpenConfirmPaymentPopup,
  setOpenPopup,
  selectedMethod,
  setSelectedPaymentMethod,
  selectedPaymentMethod,
  handleCoindbasePayment,
}) => {
  const [agreed, setAgreed] = useState(false);
  const paymentMethods = [
    { id: 1, title: "Pay via Crypto" },
    { id: 2, title: "Pay with CoinBase" },
  ];

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
          Please make payment of 2.192810859999999806 USDT to receive 1002 CMCX token.
        </p>
        <p>Transaction Fee: 1 USDT</p>
        <p>
          You can choose any of the following payment methods to make your payment. The
          token balance will appear in your account after successful payment.
        </p>
        <h3>Select payment method:</h3>
        <div className="payment_methods_container">
          {paymentMethods.map((method) => {
            if (selectedMethod === "USDT" && method.id === 2) return null;
            return (
              <div
                key={method.id}
                className={`payment_popup_methodBox ${
                  selectedPaymentMethod === method.id ? "payment_popup_selected" : ""
                }`}
                onClick={() => handleMethodSelect(method.id)}
              >
                {method.title}
                <div
                  className={`payment-list__check-icon ${
                    selectedPaymentMethod === method.id ? "active-check" : ""
                  }`}
                >
                  <svg
                    width="11"
                    height="9"
                    viewBox="0 0 11 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.800049 4.39999L3.80005 7.39999L9.80005 1.39999"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
        <p className="payment_popup_grayText">
          * Payment gateway may charge you a processing fee.
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
          token purchase agreement and token sale term.
        </label>
        <Button
          element="button"
          label={`Contribute Now`}
          type="btn-primary"
          size="btn-lg"
          customStyles={{
            width: "100%",
            margin: "0",
          }}
          onClick={() => {
            if (selectedMethod === "Coinbase" && selectedPaymentMethod === 2) {
              handleCoindbasePayment();
              return;
            }
            setOpenConfirmPaymentPopup(true);
            setOpenPopup(false);
          }}
          disabled={!agreed}
        />
        <p className="payment_popup_grayText">
          Our payment address will appear or redirect you for payment after the order is
          placed.
        </p>
      </div>
    </div>
  );
};

export default PaymentPopup;
