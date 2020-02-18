import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { FiTrash2, FiEdit3 } from "react-icons/fi";

export default function Card({
  question,
  answer,
  id,
  removeCardFromDeck,
  deckID,
  handleCardContentChange
}) {
  const [flipped, flip] = useState(true);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 600, friction: 60 }
  });

  const onFlipCard = () => {
    flip(flipped => !flipped);
  };

  const onDeleteCard = () => {
    removeCardFromDeck(id, deckID);
  };

  const handleChange = changes => {
    handleCardContentChange(changes, id, deckID);
  };

  return (
    <div className="card-container">
      <a.div
        className="card back"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        {" "}
        <button className="card__edit card__edit--back">
          <FiEdit3 />
        </button>
        <button
          className="card__delete card__delete--back"
          onClick={onDeleteCard}
        >
          <FiTrash2 />
        </button>
        <textarea
          className="card__content card__content--back"
          id="answer"
          name="answer"
          defaultValue={answer}
          onChange={e => handleChange({ answer: e.target.value })}
        ></textarea>
        <button className="card__flip card__flip--back" onClick={onFlipCard}>
          flip
        </button>
      </a.div>

      <a.div
        className="card front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(-180deg)`)
        }}
      >
        {" "}
        <button className="card__edit">
          <FiEdit3 />
        </button>
        <button className="card__delete" onClick={onDeleteCard}>
          <FiTrash2 />
        </button>
        <textarea
          className="card__content"
          id="question"
          name="question"
          defaultValue={question}
          onChange={e => handleChange({ question: e.target.value })}
        ></textarea>
        <button className="card__flip" onClick={onFlipCard}>
          flip
        </button>
      </a.div>
    </div>
  );
}
