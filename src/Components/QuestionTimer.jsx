import React from "react";
import { useState, useEffect } from "react";
function QuestionTimer({ time, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    console.log("SETTING TIME OUT");
    setTimeout(onTimeOut, time);
  }, [time, onTimeOut]);

  useEffect(() => {
    console.log("SETTING INTERVALLE");
    setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);
  }, []);
  return <progress id="question-timer" value={remainingTime} max={time} />;
}

export default QuestionTimer;
