import React from "react";
import Card from "../Card";

export default function Deck({
  cards,
  name,
  id,
  addCardToDeck,
  removeCardFromDeck
}) {
  const onClickAddCard = () => addCardToDeck(id);
  const cardList = cards.map(card => {
    // const deleteCard = removeCardFromDeck() do something with this as Sascha showed
    return (
      <Card
        key={card.id}
        {...card}
        removeCardFromDeck={removeCardFromDeck}
        deckID={id}
      />
    );
  });

  return (
    <div className="n-deck">
      <h2 className="n-deck-name">{name}</h2>
      <div className="n-deck-menu">
        <button onClick={onClickAddCard}>Add card</button>
        <button>Start Study</button>
      </div>
      <div className="n-deck-cards">{cardList}</div>
    </div>
  );
}
