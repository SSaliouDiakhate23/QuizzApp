import React from "react";
import { useState } from "react";
function QuestionTimer({ time, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    setTimeout(onTimeOut, time);
  }, [time, onTimeOut]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);
  }, []);

  return <progress id="question-timer" value={remainingTime} max={time} />;
}

export default QuestionTimer;
