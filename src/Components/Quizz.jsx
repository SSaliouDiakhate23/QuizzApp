import React from "react";
import { useState } from "react";
import QUESTIONS from "../assets/Questions";
import quizzCompletedImg from "../assets/quiz-complete.png";

function Quizz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  // console.log(activeQuestionIndex, userAnswers);

  const quizzIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleAnswerClick = (answer) => {
    setUserAnswers((prev) => {
      return [...prev, answer];
    });
  };

  if (quizzIsCompleted) {
    return (
      <>
        <div id="summary">
          <img src={quizzCompletedImg} alt="Quiz completed" />
          <h2>Quizz Completed</h2>
        </div>
      </>
    );
  }

  const suffleArray = [...QUESTIONS[activeQuestionIndex].answers];
  suffleArray.sort(() => Math.random() - 0.5);

  return (
    <>
      <div id="quiz">
        <div className="question" style={{ textAlign: "center" }}>
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {suffleArray.map((answer, index) => {
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
