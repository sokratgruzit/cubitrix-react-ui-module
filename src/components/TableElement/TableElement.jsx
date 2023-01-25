import "./TableElement.css";
import { useState } from "react";

export const TableElement = (props) => {
  const [active, setActive] = useState(1);

  let pageHandler = (num) => {
    setActive(num);
  };

  // function Pagination({ data }) {
  //   let { total, limit, page, hanldeChange } = data;
  //   let count = Math.ceil(Number(total) / limit);
  //   let buttons = [];
  //   for (let i = 1; i <= count; i++) {
  //     buttons.push(
  //       <button
  //         className={`item ${page == i ? "active" : ""}`}
  //         key={i}
  //         onClick={() => hanldeChange("page", i)}
  //       >
  //         {i}
  //       </button>
  //     );
  //   }

  //   return (
  //     <div className="pagination">
  //       <button
  //         className={`item prev ${page === 1 ? "disabled" : ""}`}
  //         disabled={page === 1}
  //         onClick={() => hanldeChange("page", page - 1)}
  //       ></button>
  //       {buttons}
  //       <button
  //         className={`item next ${count === page ? "disabled" : ""}`}
  //         disabled={count === page}
  //         onClick={() => hanldeChange("page", page + 1)}
  //       ></button>
  //     </div>
  //   );
  // }

  let element = null;

  // if (props.type === "search") {
  //   element = (
  //     <div>
  //       <div className="quick-search">
  //         <input placeholder={props.placeholder} style={props.customStyles} />
  //         <svg
  //           width="16"
  //           height="16"
  //           viewBox="0 0 16 16"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             d="M7.65 14.3C8.52329 14.3 9.38803 14.128 10.1948 13.7938C11.0017 13.4596 11.7348 12.9698 12.3523 12.3523C12.9698 11.7348 13.4596 11.0017 13.7938 10.1948C14.128 9.38803 14.3 8.52329 14.3 7.65C14.3 6.77671 14.128 5.91197 13.7938 5.10515C13.4596 4.29834 12.9698 3.56525 12.3523 2.94774C11.7348 2.33023 11.0017 1.84039 10.1948 1.5062C9.38803 1.17201 8.52329 1 7.65 1C5.88631 1 4.19486 1.70062 2.94774 2.94774C1.70062 4.19486 1 5.88631 1 7.65C1 9.41369 1.70062 11.1051 2.94774 12.3523C4.19486 13.5994 5.88631 14.3 7.65 14.3V14.3Z"
  //             stroke="white"
  //             strokeWidth="1.5"
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //           />
  //           <path
  //             d="M15 15.0001L13.6 13.6001"
  //             stroke="white"
  //             strokeWidth="1.5"
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //           />
  //         </svg>
  //       </div>
  //     </div>
  //   );
  // }

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
              className={`${active === 1 ? "active" : ""}`}
            >
              1
            </div>
            <div
              onClick={() => {
                pageHandler(2);
              }}
              className={`${active === 2 ? "active" : ""}`}
            >
              2
            </div>
            <div
              onClick={() => {
                pageHandler(3);
              }}
              className={`${active === 3 ? "active" : ""}`}
            >
              3
            </div>
            <div
              onClick={() => {
                pageHandler(4);
              }}
              className={`${active === 4 ? "active" : ""}`}
            >
              4
            </div>
            <div>...</div>
            <div
              onClick={() => {
                pageHandler(5);
              }}
              className={`${active === 5 ? "active" : ""}`}
            >
              97
            </div>
            <div
              onClick={() => {
                pageHandler(6);
              }}
              className={`${active === 6 ? "active" : ""}`}
            >
              98
            </div>
            <div
              onClick={() => {
                pageHandler(7);
              }}
              className={`${active === 7 ? "active" : ""}`}
            >
              99
            </div>
            <div
              onClick={() => {
                pageHandler(8);
              }}
              className={`${active === 8 ? "active" : ""}`}
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
