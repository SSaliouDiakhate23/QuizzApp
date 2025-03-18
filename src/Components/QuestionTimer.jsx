import React from "react";

function QuestionTimer({ time }) {
  setTimeout(() => {}, time);
  return <progress id="question-timer" value="0" max="100" />;
}

export default QuestionTimer;
