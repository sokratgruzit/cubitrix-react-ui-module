import React, { useState, useEffect } from "react";

import "./TopCoinsSliderBtns.css";

export const TopCoinsSliderBtns = ({ swiperInstance }) => {
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsBeginning] = useState(true);
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", function () {
        setIsEnd(swiperInstance.isEnd);
        setIsBeginning(swiperInstance.isBeginning);
      });
    }
    return () => {
      swiperInstance?.destroy(true, true);
    };
  }, [swiperInstance]);

  return (
    <div className="top-coins-buttons">
      <button onClick={() => swiperInstance.slidePrev()} className="coins-prev-button">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: isStart ? 0.4 : 1 }}
        >
          <g>
            <path d="M7.975 15.6829C8.13333 15.6829 8.29167 15.6246 8.41667 15.4996C8.5329 15.382 8.59808 15.2233 8.59808 15.0579C8.59808 14.8926 8.5329 14.7339 8.41667 14.6163L3.8 9.99961L8.41667 5.38294C8.5329 5.26533 8.59808 5.10663 8.59808 4.94128C8.59808 4.77592 8.5329 4.61722 8.41667 4.49961C8.175 4.25794 7.775 4.25794 7.53333 4.49961L2.475 9.55794C2.23333 9.79961 2.23333 10.1996 2.475 10.4413L7.53333 15.4996C7.65833 15.6246 7.81667 15.6829 7.975 15.6829Z" />
            <path d="M3.05831 10.625H17.0833C17.425 10.625 17.7083 10.3417 17.7083 10C17.7083 9.65833 17.425 9.375 17.0833 9.375H3.05831C2.71665 9.375 2.43331 9.65833 2.43331 10C2.43331 10.3417 2.71665 10.625 3.05831 10.625Z" />
          </g>
        </svg>
      </button>
      <button onClick={() => swiperInstance.slideNext()} className="coins-next-button">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: isEnd ? 0.4 : 1 }}
        >
          <g>
            <path d="M12.025 15.6829C11.8667 15.6829 11.7083 15.6246 11.5833 15.4996C11.4671 15.382 11.4019 15.2233 11.4019 15.0579C11.4019 14.8926 11.4671 14.7339 11.5833 14.6163L16.2 9.99961L11.5833 5.38294C11.4671 5.26533 11.4019 5.10663 11.4019 4.94128C11.4019 4.77592 11.4671 4.61722 11.5833 4.49961C11.825 4.25794 12.225 4.25794 12.4667 4.49961L17.525 9.55794C17.7667 9.79961 17.7667 10.1996 17.525 10.4413L12.4667 15.4996C12.3417 15.6246 12.1833 15.6829 12.025 15.6829Z" />
            <path d="M16.9417 10.625H2.91669C2.57502 10.625 2.29169 10.3417 2.29169 10C2.29169 9.65833 2.57502 9.375 2.91669 9.375H16.9417C17.2834 9.375 17.5667 9.65833 17.5667 10C17.5667 10.3417 17.2834 10.625 16.9417 10.625Z" />
          </g>
        </svg>
      </button>
    </div>
  );
};
