import React from "react";
import { useState } from "react";
import QUESTIONS from "../assets/Questions";

function Quizz() {
  console.log(QUESTIONS);
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const handleAnswerClick = (answer) => {
    setUserAnswers((prev) => {
      return [...prev, answer];
    });
  };
  return (
    <>
      <div id="quiz">
        <div className="question" style={{ textAlign: "center" }}>
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => {
              return (
                <li key={index} className="answer">
                  <button onClick={() => handleAnswerClick(answer)}>
                    {answer}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Quizz;
