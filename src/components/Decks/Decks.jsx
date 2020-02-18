import React from "react";
import Deck from "../Deck";

export default function Decks({
  decks,
  addCardToDeck,
  removeCardFromDeck,
  handleCardContentChange
}) {
  return (
    <div className="n-Decks">
      {decks.map(deck => {
        return (
          <Deck
            key={deck.id}
            {...deck}
            addCardToDeck={addCardToDeck}
            removeCardFromDeck={removeCardFromDeck}
            handleCardContentChange={handleCardContentChange}
          />
        );
      })}
    </div>
  );
}
