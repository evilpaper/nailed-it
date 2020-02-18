import React, { useState, useEffect } from "react";
import Decks from "./Decks";
import "./app.css";
import nanoid from "nanoid";
import START_DECKS from "./START_DECKS";

const LOCAL_STORAGE_KEY = "nailed-it.decks";

export default function App() {
  const [decks, setDecks] = useState(START_DECKS);

  useEffect(() => {
    const decksJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (decksJSON != null) setDecks(JSON.parse(decksJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(decks));
  }, [decks]);

  class Card {
    constructor() {
      this.id = nanoid();
      this.question = "Question";
      this.answer = "Answer";
    }
  }

  const addCardToDeck = deckID => {
    const newCard = new Card();
    const newDecks = [...decks];
    const index = newDecks.findIndex(d => d.id === deckID);
    newDecks[index].cards = [newCard, ...newDecks[index].cards];
    setDecks(newDecks);
  };

  const removeCardFromDeck = (cardID, deckID) => {
    const newDecks = [...decks];
    const index = newDecks.findIndex(d => d.id === deckID);
    newDecks[index].cards = newDecks[index].cards.filter(c => c.id !== cardID);
    setDecks(newDecks);
  };

  const handleCardContentChange = (changes, cardID, deckID) => {
    const newDecks = [...decks];
    const deckIndex = newDecks.findIndex(d => d.id === deckID);
    const cardIndex = newDecks[deckIndex].cards.findIndex(c => c.id === cardID);
    const newCard = newDecks[deckIndex].cards[cardIndex];
    newDecks[deckIndex].cards[cardIndex] = { ...newCard, ...changes };
    setDecks(newDecks);
  };

  return (
    <div className="n-app">
      <div className="n-header">
        <span>Logo</span>
        <button>Sign in</button>
      </div>
      <div className="n-divider"></div>
      <Decks
        decks={decks}
        addCardToDeck={addCardToDeck}
        removeCardFromDeck={removeCardFromDeck}
        handleCardContentChange={handleCardContentChange}
      />
    </div>
  );
}
