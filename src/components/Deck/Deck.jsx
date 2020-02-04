import React from "react";
import Card from "../Card";

export default function Deck({ cards, name, id, addCardToDeck }) {
  const onClickAddCard = () => addCardToDeck(id);
  const cardList = cards.map(card => {
    return <Card key={card.id} {...card} />;
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