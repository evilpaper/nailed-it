import React from "react";

export default function Card({ question, answer }) {
  return (
    <div className="n-card">
      <textarea
        className="n-card__question"
        id="question"
        name="question"
        defaultValue={question}
      ></textarea>
      <textarea
        className="n-card__answer"
        id="answer"
        name="answer"
        defaultValue={answer}
      ></textarea>
    </div>
  );
}