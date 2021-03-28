import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { ReactComponent as Right } from "../../images/right.svg";
import "./styles.css";

export default function Card({
  question,
  answer,
  id,
  number,
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
          <p className="heading-label">TERM</p>
        </div>
        <textarea
          className="content"
          id="answer"
          name="answer"
          defaultValue={answer}
          onChange={(e) => handleChange({ answer: e.target.value })}
          maxLength="75"
        ></textarea>
        <footer className="footer-back">
          <div className="answers">
            <button
              className="answer"
              onClick={(e) => {
                handleChange({ nailed: true });
                handleFlipClick();
              }}
            >
              Hell yes
            </button>
            <button
              className="answer"
              onClick={(e) => {
                handleChange({ nailed: false });
                handleFlipClick();
              }}
            >
              F**k no
            </button>
          </div>
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
          <p className="heading-label">DEFINITION</p>
          <p className="number">No {number}</p>
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
          <button className="flip" onClick={handleFlipClick}>
            Flip <Right className="right" />
          </button>
        </footer>
      </a.div>
    </div>
  );
}
