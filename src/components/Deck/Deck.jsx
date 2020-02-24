import React from "react";
import Card from "../Card";

export default function Deck({
  cards,
  name,
  id,
  addCardToDeck,
  removeCardFromDeck,
  handleCardContentChange,
  handleDeckNameChange
}) {
  const onClickAddCard = () => addCardToDeck(id);

  const handleEditCard = (changes, card) => {
    handleCardContentChange(changes, card, id);
  };

  const handleDeleteCard = card => {
    removeCardFromDeck(card, id);
  };

  const handleEditDeckName = name => {
    handleDeckNameChange(name, id);
  };

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
    <div className="n-deck">
      <input
        type="text"
        name="deck-name"
        className="n-deck-name"
        defaultValue={name}
        onChange={e => handleEditDeckName(e.target.value)}
        maxLength="30"
      />
      <div className="n-deck-menu">
        <button onClick={onClickAddCard}>Add card</button>
        <button>Start Study - coming soon</button>
      </div>
      <div className="n-deck-cards">{cardList}</div>
      <div className="n-divider"></div>
    </div>
  );
}
