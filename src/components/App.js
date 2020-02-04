import React, { useState } from "react";
import Decks from "./Decks";
import "./app.css";
import nanoid from "nanoid";
import START_DECKS from "./START_DECKS";

export default function App() {
  const [decks, setDecks] = useState(START_DECKS);

  const addCardToDeck = deckID => {
    const newCard = {
      id: nanoid(),
      question: "Question",
      answer: "Answer"
    };
    const newDecks = [...decks];
    const index = newDecks.findIndex(d => d.id === deckID);
    newDecks[index].cards = [newCard, ...newDecks[index].cards];
    setDecks(newDecks);
  };

  return (
    <div className="n-app">
      <div className="n-header">
        <span>Logo</span>
        <button>Sign in</button>
      </div>
      <div className="n-divider"></div>
      <Decks decks={decks} addCardToDeck={addCardToDeck} />
    </div>
  );
}
