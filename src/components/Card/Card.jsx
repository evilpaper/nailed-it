import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { FiTrash } from "react-icons/fi";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";
import { TiStar } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";

export default function Card({
  question,
  answer,
  id,
  nailed,
  handleEditCard,
  handleDeleteCard
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
    handleDeleteCard(id);
  };

  const handleChange = changes => {
    handleEditCard(changes, id);
  };

  return (
    <div className="card-container">
      <a.div
        className="card back"
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform
        }}
      >
        {" "}
        <button
          className="card__nailed-it"
          onClick={e => handleChange({ nailed: !nailed })}
        >
          <TiStar className="card__button-icon" />
          Nailed It
        </button>
        <p className="card__header card__header--back">Answer</p>
        <textarea
          className="card__content card__content--back"
          id="answer"
          name="answer"
          defaultValue={answer}
          onChange={e => handleChange({ answer: e.target.value })}
          maxLength="75"
        ></textarea>
        <button className="card__flip card__flip--back" onClick={onFlipCard}>
          <TiArrowBack />
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
        {/*  
          <div className="card__star">
          {nailed ? (
            <TiStar className="card__button-icon" />
          ) : (
            <TiStarOutline className="card__button-icon" />
          )}
        </div>
        */}
        <button className="card__delete" onClick={onDeleteCard}>
          <FiTrash />
        </button>
        <p className="card__header">Question</p>
        <textarea
          className="card__content"
          id="question"
          name="question"
          defaultValue={question}
          onChange={e => handleChange({ question: e.target.value })}
          maxLength="75"
        ></textarea>
        <button className="card__flip" onClick={onFlipCard}>
          <TiArrowForward />
        </button>
      </a.div>
    </div>
  );
}
