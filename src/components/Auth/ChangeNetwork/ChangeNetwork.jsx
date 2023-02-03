import React from "react";
import { Button } from "../../Button";
import "./ChangeNetwork.css";

export const ChangeNetwork = ({ disconnect, handleNetworkChange }) => {
  return (
    <div className="change-network-body">
      <p>Currently this page only supported in BNB Smart Chain, Ethereum</p>
      <span className="change-network-svg">
        <svg
          width="130"
          height="94"
          viewBox="0 0 130 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M120.755 71.0719C129.778 62.1288 134.776 27.7401 123.469 16.8276C106.283 0.24056 77.8441 10.0817 56.0811 1.58544C34.3182 -6.91081 2.16748e-05 20.414 1.96422e-05 43.7256C1.72911e-05 70.6906 41.5476 95.4345 66.0309 93.9352C90.5143 92.4358 110.353 81.3828 120.755 71.0719Z"
            fill="#47BCF5"
            fillOpacity="0.05"
          />
          <path
            d="M63.75 31.6468C67.3744 31.6468 70.3125 28.7009 70.3125 25.0668C70.3125 21.4328 67.3744 18.4868 63.75 18.4868C60.1256 18.4868 57.1875 21.4328 57.1875 25.0668C57.1875 28.7009 60.1256 31.6468 63.75 31.6468Z"
            stroke="#47BCF5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M46.25 62.3534C49.8744 62.3534 52.8125 59.4074 52.8125 55.7734C52.8125 52.1393 49.8744 49.1934 46.25 49.1934C42.6256 49.1934 39.6875 52.1393 39.6875 55.7734C39.6875 59.4074 42.6256 62.3534 46.25 62.3534Z"
            stroke="#47BCF5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M81.25 62.3534C84.8744 62.3534 87.8125 59.4074 87.8125 55.7734C87.8125 52.1393 84.8744 49.1934 81.25 49.1934C77.6256 49.1934 74.6875 52.1393 74.6875 55.7734C74.6875 59.4074 77.6256 62.3534 81.25 62.3534Z"
            stroke="#47BCF5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.6006 49.4129C44.2429 47.9038 44.0623 46.358 44.0625 44.8069C44.0558 39.6624 46.058 34.7197 49.6406 31.0371"
            stroke="#47BCF5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M76.2703 60.0371C73.9198 61.9809 71.1514 63.3512 68.183 64.0401C65.2147 64.729 62.1273 64.7177 59.1641 64.007"
            stroke="#47BCF5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M70.2168 26.1548C73.3856 27.2638 76.22 29.1646 78.4523 31.6776C80.6845 34.1906 82.2409 37.2328 82.9743 40.5167"
            stroke="#47BCF5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse
            cx="118.75"
            cy="7.52083"
            rx="2.5"
            ry="2.50667"
            fill="#47BCF5"
            fillOpacity="0.6"
          />
          <ellipse
            cx="110"
            cy="83.973"
            rx="2.5"
            ry="2.50667"
            fill="#47BCF5"
            fillOpacity="0.4"
          />
          <ellipse
            cx="13.125"
            cy="78.3335"
            rx="3.125"
            ry="3.13333"
            fill="#47BCF5"
            fillOpacity="0.4"
          />
          <ellipse
            cx="16.875"
            cy="23.1866"
            rx="1.875"
            ry="1.88"
            fill="#47BCF5"
            fillOpacity="0.8"
          />
          <ellipse
            cx="18.75"
            cy="71.4399"
            rx="1.25"
            ry="1.25333"
            fill="#47BCF5"
            fillOpacity="0.6"
          />
        </svg>
      </span>

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
            stroke="#EF5350"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M11.998 9.45752V13.2764"
            stroke="#EF5350"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M11.9996 16.4587C12.5269 16.4587 12.9543 16.0313 12.9543 15.504C12.9543 14.9768 12.5269 14.5493 11.9996 14.5493C11.4724 14.5493 11.0449 14.9768 11.0449 15.504C11.0449 16.0313 11.4724 16.4587 11.9996 16.4587Z"
            fill="#EF5350"
          />
        </svg>
        <p>Please, switch your network to continue</p>
      </div>
      <Button
        element="button"
        label={`Switch Network To Wallet`}
        type="btn-primary"
        size="btn-lg"
        customStyles={{
          width: "100%",
          margin: "0",
        }}
        onClick={handleNetworkChange}
      />
      <Button
        element="button"
        label={`Disconnect Wallet`}
        type="btn-secondary"
        size="btn-sm"
        customStyles={{
          width: "100%",
          margin: "0",
        }}
        onClick={disconnect}
      />
    </div>
  );
};
