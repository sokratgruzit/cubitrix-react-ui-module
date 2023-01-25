import "./TableElement.css";
import { useState } from "react";

export const TableElement = (props) => {
  const [active, setActive] = useState(1);

  let pageHandler = (num) => {
    setActive(num);
  };

  let element = null;

  if (props.type === "pagination") {
    element = (
      <div>
        <div className="pagination">
          <div className="pagination-inner">
            <div className="prev">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.66663 1.70095L1.83899 5.52859C1.38695 5.98063 1.38695 6.72032 1.83899 7.17236L5.66663 11"
                  stroke="#9C9DA3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              onClick={() => {
                pageHandler(1);
              }}
              className={`${active === 1 ? "active-element" : ""}`}
            >
              1
            </div>
            <div
              onClick={() => {
                pageHandler(2);
              }}
              className={`${active === 2 ? "active-element" : ""}`}
            >
              2
            </div>
            <div
              onClick={() => {
                pageHandler(3);
              }}
              className={`${active === 3 ? "active-element" : ""}`}
            >
              3
            </div>
            <div
              onClick={() => {
                pageHandler(4);
              }}
              className={`${active === 4 ? "active-element" : ""}`}
            >
              4
            </div>
            <div>...</div>
            <div
              onClick={() => {
                pageHandler(5);
              }}
              className={`${active === 5 ? "active-element" : ""}`}
            >
              97
            </div>
            <div
              onClick={() => {
                pageHandler(6);
              }}
              className={`${active === 6 ? "active-element" : ""}`}
            >
              98
            </div>
            <div
              onClick={() => {
                pageHandler(7);
              }}
              className={`${active === 7 ? "active-element" : ""}`}
            >
              99
            </div>
            <div
              onClick={() => {
                pageHandler(8);
              }}
              className={`${active === 8 ? "active-element" : ""}`}
            >
              100
            </div>
            <div className="next">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33337 1.70095L5.16101 5.52859C5.61305 5.98063 5.61305 6.72032 5.16101 7.17236L1.33337 11"
                  stroke="#9C9DA3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return element;
};
