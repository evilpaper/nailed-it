import React, { useState } from "react";
import Card from "./Card";
import nanoid from "nanoid";

export default function Deck(props) {
  const { cards, name, id, addCardToDeck } = props;

  return (
    <div className="n-deck">
      <div className="n-deck-menu">
        <h2 className="n-deck-name">{name}</h2>
        <button onClick={() => addCardToDeck(id)}>Add card</button>
        <button>Start Study</button>
      </div>
      <div className="n-deck-cards">
        {cards.map(card => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
}
