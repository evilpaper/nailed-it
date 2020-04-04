import React from "react";
import Deck from "../Deck";

export default function Decks({
  decks,
  addCardToDeck,
  removeCardFromDeck,
  shuffleDeck,
  handleCardContentChange,
  handleDeckNameChange,
  deleteDeck
}) {
  const deckList = decks.map(deck => {
    return (
      <Deck
        key={deck.id}
        {...deck}
        addCardToDeck={addCardToDeck}
        removeCardFromDeck={removeCardFromDeck}
        shuffleDeck={shuffleDeck}
        handleCardContentChange={handleCardContentChange}
        handleDeckNameChange={handleDeckNameChange}
        deleteDeck={deleteDeck}
      />
    );
  });

  return <div className="deck-list">{deckList}</div>;
}
