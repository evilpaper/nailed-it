import React, { useContext } from "react";
import Card from "./Card";
import { DeckContext } from "./App";

export default function Deck({ cards, id }) {
  const { handleCardAdd } = useContext(DeckContext);
  return (
    <div className="n-deck">
      <div className="n-deck-menu">
        <h2 className="n-deck-name">My Awesome Deck</h2>
        <button onClick={() => handleCardAdd(id)}>Add card</button>
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
