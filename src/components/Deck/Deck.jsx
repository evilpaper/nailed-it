import React from "react";
import Card from "../Card";
import { animated as a, useTransition } from "react-spring";
import { FiShuffle } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

export default function Deck({
  cards,
  name,
  id,
  addCardToDeck,
  removeCardFromDeck,
  shuffleDeck,
  handleCardContentChange,
  handleDeckNameChange,
  onDeckDelete,
}) {
  const onClickAddCard = () => addCardToDeck(id);

  const onClickShuffleDeck = () => shuffleDeck(id);

  const onDeckDeleteClick = () => onDeckDelete(id);

  const handleEditCard = (changes, card) => {
    handleCardContentChange(changes, card, id);
  };

  const handleDeleteCard = (card) => {
    removeCardFromDeck(card, id);
  };

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
    console.log(result);
    return result;
  };

  return (
    <div className="deck">
      {/* <div className="divider"></div> */}
      <div className="deck-name__divder">YOU CAN DO IT</div>
      <input
        type="text"
        name="deck-name"
        className="deck__name"
        defaultValue={name}
        onChange={(e) => handleEditDeckName(e.target.value)}
        maxLength="30"
      />
      <p className="deck__stats">
        <strong>{`${percentageNailed()}% `}</strong>
        {``}
        <span className="deck__stats--number-of-cards">{` nailed · ${cards.length} cards`}</span>
      </p>
      <div className="deck__actions-menu">
        <button
          className="deck__action-button deck__add-card"
          onClick={onClickAddCard}
        >
          <FiPlus className="deck__button-icon" />
        </button>
        <button
          className="deck__action-button deck__shuffle-cards"
          onClick={onClickShuffleDeck}
        >
          <FiShuffle className="deck__button-icon" />
        </button>
        <button
          className="deck__action-button deck__delete-deck"
          onClick={onDeckDeleteClick}
        >
          <FiTrash2 className="deck__button-icon" />
        </button>
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
              handleDeleteCard={handleDeleteCard}
            ></Card>
          </a.div>
        ))}
      </div>
    </div>
  );
}
