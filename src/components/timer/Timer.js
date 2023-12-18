import React, { useState, useEffect } from "react";

import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(300); 
  const [displayTime, setDisplayTime] = useState(formatTime(time));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setDisplayTime(formatTime(time));
  }, [time]);

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${padZero(minutes)}:${padZero(seconds)}`;
  }

  function padZero(value) {
    return value < 10 ? `0${value}` : value;
  }

  return (
    <div className="timer">
      <h2>Timer</h2>
      <div className="timer-display">{displayTime}</div>
    </div>
  );
};

export default Timer;
