import React from "react";
import Deck from "./Deck";

export default function Decks({ decks }) {
  return (
    <div className="n-Decks">
      {decks.map(deck => {
        return <Deck key={deck.id} {...deck} />;
      })}
    </div>
  );
}
