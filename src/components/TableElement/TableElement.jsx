import "./TableElement.css";
import { useState } from "react";

export const TableElement = (props) => {
  // const [active, setActive] = useState(1);
  // const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  // let pageHandler = (num) => {
  //   setActive(num);
  // };

  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  let element = null;

  if (props.type === "pagination") {
    element = (
      <div>
        <div className="pagination">
          <div className="pagination-inner">
            <div className="prev" onClick={onPrevious}>
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
            {numbers.map(num => (
              <div
                onClick={() => {
                  pageHandler(num);
                }}
                className={`${active === num ? "active-element" : ""}`}
              >
                {num}
              </div>
            ))}
            {paginationRange.map(pageNumber => {
              if (pageNumber === DOTS) {
                return <div>...</div>;
              }

              return (
                <div
                  className={`${pageNumber === currentPage ? "active-element" : ""}`}
                  onClick={() => onPageChange(pageNumber)}
                >
                  {pageNumber}
                </div>
              );
            })}
            <div className="next" onClick={onNext}>
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
