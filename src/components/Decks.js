import React from "react";
import Deck from "./Deck";

export default function Decks(props) {
  const { decks, addCardToDeck } = props;
  return (
    <div className="n-Decks">
      {decks.map(deck => {
        return <Deck key={deck.id} {...deck} addCardToDeck={addCardToDeck} />;
      })}
    </div>
  );
}
