import React, { useState, useEffect } from "react";

// styled comp
import TimerStyle from "../styledComponents/GamePage/TimerStyle";

export default function TimerCounter(props) {
  const [seconds, setSeconds] = useState(0);

  let interval;
  const timeLimit = props.timeLimit;
  const startTimer = () => {
    const countDownMilliSeconds = new Date().getTime() + timeLimit * 1000;

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownMilliSeconds - now;
      const seconds = Math.floor((distance % (1000 * 60 * 60 * 24)) / 1000);

      if (distance < 0) {
        props.timeIsUp();
        clearInterval(interval);
      } else {
        console.log(seconds);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      console.log("CLEARED!");
      clearInterval(interval);
    };
  }, []);

  return (
    <TimerStyle>
      <b>{seconds}</b>s remaining
    </TimerStyle>
  );
}
