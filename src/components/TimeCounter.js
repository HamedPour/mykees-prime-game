import React, { useState, useEffect } from "react";

// styled comp
import TimerStyle from "../styledComponents/GamePage/TimerStyle";

export default function TimerCounter({ timeLimit, timeIsUp }) {
  const [seconds, setSeconds] = useState(timeLimit);

  let interval;
  const startTimer = () => {
    // had to add an extra milli-s at the end of countDownMilliSeconds to
    // make sure the flooring worked properly. It works but I know its
    // not elegant.
    const countDownMilliSeconds = new Date().getTime() + timeLimit * 1000 + 10;

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownMilliSeconds - now;
      const seconds = Math.floor(distance / 1000);

      if (distance < 0) {
        timeIsUp();
        clearInterval(interval);
      } else {
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TimerStyle>
      <b>{seconds}</b>s remaining
    </TimerStyle>
  );
}
