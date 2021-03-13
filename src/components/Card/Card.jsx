import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { ReactComponent as FlipIcon } from "../../images/flip.svg";
import { ReactComponent as YesIcon } from "../../images/yes-green.svg";
import { ReactComponent as NoIcon } from "../../images/no-red.svg";
import "./styles.css";

export default function Card({
  question,
  answer,
  id,
  nailed,
  handleEditCard,
}) {
  const [flipped, flip] = useState(true);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 600, friction: 60 },
  });

  const handleFlipClick = () => {
    flip((flipped) => !flipped);
  };

  const handleChange = (changes) => {
    handleEditCard(changes, id);
  };

  return (
    <div className="container">
      <a.div
        className="card back"
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
      >
        {" "}
        <div className="heading">
          <p className="heading-label">ANSWER</p>
        </div>
        <textarea
          className="content"
          id="answer"
          name="answer"
          defaultValue={answer}
          onChange={(e) => handleChange({ answer: e.target.value })}
          maxLength="75"
        ></textarea>
        <footer className="bottom-back">
          <button
            className="card-button"
            onClick={(e) => {
              handleChange({ nailed: true });
              handleFlipClick();
            }}
          >
            <YesIcon className="answer"/>
          </button>
          <button
            className="card-button"
            onClick={(e) => {
              handleChange({ nailed: false });
              handleFlipClick();
            }}
          >
            <NoIcon className="answer"/> 
          </button>
        </footer>
      </a.div>
      <a.div
        className="card front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(-180deg)`),
        }}
      >
        {" "}
        <div className="heading">
          <p className="heading-label">QUESTION</p>
        </div>
        <textarea
          className="content"
          id="question"
          name="question"
          defaultValue={question}
          onChange={(e) => handleChange({ question: e.target.value })}
          maxLength="75"
        ></textarea>
        <footer className="bottom-front">
          <button
            className="card-button"
            onClick={handleFlipClick}
          >
            <FlipIcon/>
          </button>
        </footer>
      </a.div>
    </div>
  );
}
