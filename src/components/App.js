import React, { useState } from "react";
import Decks from "./Decks";
import "./app.css";
import nanoid from "nanoid";

export default function App() {
  const [decks, setDecks] = useState(startDecks);

  const addCardToDeck = deckID => {
    const newCard = {
      id: nanoid(),
      question: "Question",
      answer: "Answer"
    };
    const newDecks = [...decks];
    const index = newDecks.findIndex(d => d.id === deckID);
    newDecks[index].cards.push(newCard);
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

const startDecks = [
  {
    id: nanoid(),
    name: "My First French Deck",
    cards: [
      {
        id: nanoid(),
        question: "The girl",
        answer: "La fille"
      },
      {
        id: nanoid(),
        question: "The boy",
        answer: "Le garcon"
      }
    ]
  },
  {
    id: nanoid(),
    name: "My Second French Deck",
    cards: [
      {
        id: nanoid(),
        question: "I am",
        answer: "Je suis"
      }
    ]
  }
];
