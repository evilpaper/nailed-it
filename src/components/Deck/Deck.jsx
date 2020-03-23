import React from "react";
import Card from "../Card";
import { animated as a, useTransition } from "react-spring";
import { FiPlus } from "react-icons/fi";
import { TiFlash } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";

export default function Deck({
  cards,
  name,
  id,
  addCardToDeck,
  removeCardFromDeck,
  shuffleDeck,
  handleCardContentChange,
  handleDeckNameChange
}) {
  const onClickAddCard = () => addCardToDeck(id);

  const onClickShuffleDeck = () => shuffleDeck(id);

  const handleEditCard = (changes, card) => {
    handleCardContentChange(changes, card, id);
  };

  const handleDeleteCard = card => {
    removeCardFromDeck(card, id);
  };

  const handleEditDeckName = name => {
    handleDeckNameChange(name, id);
  };

  const width = 19;

  const transitions = useTransition(
    cards.map((item, i) => ({ ...item, x: i * width })),
    item => item.id,
    {
      from: { opacity: 0 },
      leave: { opacity: 0 },
      enter: ({ x }) => ({ x, opacity: 1 }),
      update: ({ x }) => ({ x, opacity: 1 })
    }
  );

  const cardList = cards.map(card => {
    return (
      <Card
        key={card.id}
        {...card}
        handleEditCard={handleEditCard}
        handleDeleteCard={handleDeleteCard}
      />
    );
  });

  return (
    <div className="deck">
      <input
        type="text"
        name="deck-name"
        className="deck__name"
        defaultValue={name}
        onChange={e => handleEditDeckName(e.target.value)}
        maxLength="30"
      />
      <div className="deck__actions-menu">
        <button className="deck__add-card" onClick={onClickAddCard}>
          <TiPlus />
        </button>
        <button className="deck__shuffle-cards" onClick={onClickShuffleDeck}>
          <TiFlash />
        </button>
      </div>
      <div className="deck__card-list">
        {transitions.map(({ item, props: { x, ...rest }, key }, index) => (
          <a.div
            key={key}
            className="card-container"
            style={{
              transform: x.interpolate(x => `translate3d(${x}em,0,0)`),
              ...rest
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
