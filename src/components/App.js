import React, { useState } from "react";
import Decks from "./Decks";
import "./app.css";
import nanoid from "nanoid";

export const DeckContext = React.createContext();

export default function App() {
  const [decks, setDecks] = useState(startDecks);

  const deckContextValue = {
    handleDeckChange
  };

  function handleDeckChange(id, deck) {
    console.log("Yeah");
    /*
    const newDeck = [...deck];
    const index = newDeck.findIndex(d => d.id === id);
    newDeck[index] = deck;
    setDecks(newDeck);
    */
  }

  return (
    <div className="n-app">
      <div className="n-header">
        <span>Logo</span>
        <button>Sign in</button>
      </div>
      <div className="n-divider"></div>
      <DeckContext.Provider value={deckContextValue}>
        <Decks decks={decks} />
      </DeckContext.Provider>
    </div>
  );
}

const startDecks = [
  {
    id: nanoid(),
    name: "My Awesome Deck",
    cards: [
      {
        id: nanoid(),
        question: "How to reload page in JavaScript",
        answer: "window.location.reload()"
      },
      {
        id: nanoid(),
        question: "How to loop through array in JavaScript",
        answer: "for (const person of people) { console.log(person) }"
      }
    ]
  },
  {
    id: nanoid(),
    name: "My Wonderful Deck",
    cards: [
      {
        id: nanoid(),
        question: "How to reload page in JavaScript",
        answer: "window.location.reload()"
      },
      {
        id: nanoid(),
        question: "How to loop through array in JavaScript",
        answer: "for (const person of people) { console.log(person) }"
      }
    ]
  }
];
