import React from "react";
import Card from "../Card";
import { animated as a, useTransition } from "react-spring";
import "./styles.css";
// import ShuffleIcon from "../../images/shuffle.svg"
import { ReactComponent as ShuffleIcon } from "../../images/shuffle.svg";
import { ReactComponent as ResetIcon } from "../../images/reset.svg";
// import { FiPlus } from "react-icons/fi";
// import { FiTrash2 } from "react-icons/fi";

export default function Deck({
  cards,
  name,
  id,
  addCardToDeck,
  // removeCardFromDeck,
  shuffleDeck,
  handleCardContentChange,
  handleDeckNameChange,
  onDeckDelete,
}) {
  // const onClickAddCard = () => addCardToDeck(id);

  const onClickShuffleDeck = () => shuffleDeck(id);

  // const onDeckDeleteClick = () => onDeckDelete(id);

  const handleEditCard = (changes, card) => {
    handleCardContentChange(changes, card, id);
  };

  // const handleDeleteCard = (card) => {
  //   removeCardFromDeck(card, id);
  // };

  const handleEditDeckName = (name) => {
    handleDeckNameChange(name, id);
  };

  const width = 19;

  const transitions = useTransition(
    cards.map((item, i) => ({ ...item, x: i * width })),
    (item) => item.id,
    {
      from: { opacity: 0 },
      leave: { opacity: 0 },
      enter: ({ x }) => ({ x, opacity: 1 }),
      update: ({ x }) => ({ x, opacity: 1 }),
    }
  );

  const percentageNailed = () => {
    const nailedCards = cards.filter((card) => card.nailed === true);
    const result = Math.round((nailedCards.length / cards.length) * 100);
    return result;
  };

  const handleResetClick = () => {
    cards.forEach(card => {
      // handleCardContentChange({ nailed: false }, card)
    })
  }

  return (
    <div className="deck">
      <div className="deck-header">
        <input
          type="text"
          name="deck-name"
          className="deck__name"
          defaultValue={name}
          onChange={(e) => handleEditDeckName(e.target.value)}
          maxLength="30"
        />
        <div className="progress">
          <strong>{`${percentageNailed()}% `}</strong>
          {``}
          <span className="size">{` · ${cards.length} questions`}</span>
        </div>
        <div className="controls">
          <button
              className="shuffle"
              onClick={onClickShuffleDeck}
          >
            <ShuffleIcon /> 
            <span>Shuffle</span>
          </button>
          <button
              className="reset"
              onClick={handleResetClick}
          >
            <ResetIcon/>
            <span>Reset</span>
          </button>
        </div>
      </div>
      <div className="deck__card-list">
        {transitions.map(({ item, props: { x, ...rest }, key }, index) => (
          <a.div
            key={key}
            className="card-container"
            style={{
              transform: x.interpolate((x) => `translate3d(${x}em,0,0)`),
              ...rest,
            }}
          >
            <Card
              {...item}
              handleEditCard={handleEditCard}
            ></Card>
          </a.div>
        ))}
      </div>
    </div>
  );
}
