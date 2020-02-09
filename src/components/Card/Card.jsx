import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

export default function Card({ question, answer }) {
  const [flipped, flip] = useState(true);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 600, friction: 60 }
  });

  const onClickCard = () => {
    flip(flipped => !flipped);
    console.log(flipped);
  };

  return (
    <div className="card-container" onClick={onClickCard}>
      <a.div
        className="card back"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <textarea
          className="card__content card__content--back"
          id="answer"
          name="answer"
          defaultValue={answer}
        ></textarea>
      </a.div>

      <a.div
        className="card front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`)
        }}
      >
        <textarea
          className="card__content"
          id="question"
          name="question"
          defaultValue={question}
        ></textarea>
      </a.div>
    </div>
  );
}
