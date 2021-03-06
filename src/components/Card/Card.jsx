import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
// import { FiTrash2 } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export default function Card({
  question,
  answer,
  id,
  nailed,
  handleEditCard,
  // handleDeleteCard,
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

  // const handleDeleteClick = () => {
  //   handleDeleteCard(id);
  // };

  const handleChange = (changes) => {
    handleEditCard(changes, id);
  };

  return (
    <div className="card-container">
      <a.div
        className="card back"
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
      >
        {" "}
        <p className="card__header card__header--back">Answer</p>
        <textarea
          className="card__content card__content--back"
          id="answer"
          name="answer"
          defaultValue={answer}
          onChange={(e) => handleChange({ answer: e.target.value })}
          maxLength="75"
        ></textarea>
        <footer className="card__footer">
          <button
            className="card__button card__button--back"
            onClick={(e) => {
              handleChange({ nailed: true });
              handleFlipClick();
            }}
          >
            <FiCheck />
          </button>
          <button
            className="card__button card__button--back"
            onClick={(e) => {
              handleChange({ nailed: false });
              handleFlipClick();
            }}
          >
            <FiX />
          </button>
          <button
            className="card__button card__button--flip card__button--back"
            onClick={handleFlipClick}
          >
            <FiChevronRight />
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
        <p className="card__header">Question</p>
        <textarea
          className="card__content"
          id="question"
          name="question"
          defaultValue={question}
          onChange={(e) => handleChange({ question: e.target.value })}
          maxLength="75"
        ></textarea>
        <footer className="card__footer">
          {/* <button
            className="card__button card__button--delete"
            onClick={handleDeleteClick}
          >
            <FiTrash2 />
          </button> */}
          <button
            className="card__button card__button--front-flip"
            onClick={handleFlipClick}
          >
            Flip
          </button>
        </footer>
      </a.div>
    </div>
  );
}
