import React from "react";

export default function Card(props) {
  const { question } = props;

  return (
    <div className="n-card">
      <textarea
        className="n-card__question"
        id="question"
        name="question"
        value={question}
      />
    </div>
  );
}
